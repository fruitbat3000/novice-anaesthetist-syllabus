/* Novice anaesthetist syllabus — rendering, filtering and progress tracking.
 * No build step and no dependencies. Opens directly from the file system. */
(function () {
  'use strict';

  const S = window.SITE;
  const STORE_KEY = 'nas-progress-v1';
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* Short paraphrase of each cluster's Key Capabilities (IAC Workbook v1.2). */
  const CLUSTER_CAPS = {
    epa1: 'Focused history, examination and investigations. Recognise and escalate risk. Explain how past history affects anaesthesia. Explain the plan and common risks to the patient. Know the limits of a novice.',
    pre: 'Use the pre-op assessment to plan care. Know your scope and seek help. Starvation policies. Working knowledge of the machine, monitoring, airway equipment and common drugs.',
    intra: 'Mask ventilation, supraglottic airway, and intubation with direct and video laryngoscopy. RSI. Spontaneous and controlled ventilation. Physiological effects of GA. Positioning. Infection control. Extubation and emergence problems such as laryngospasm.',
    post: 'Give a clear handover to recovery. Manage problems in recovery, including acute pain and rescue opioids.',
    emerg: 'Rehearse the QRH "unknowns". Demonstrate the failed intubation routine on a manikin, following DAS. Show anaesthetic non-technical skills.',
  };

  /* ---------- progress storage (per browser only) ---------- */
  let progress = { topics: {}, ela: {} };
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const p = JSON.parse(raw);
        progress = { topics: p.topics || {}, ela: p.ela || {} };
      }
    } catch (e) { /* storage unavailable: run without saving */ }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) { /* ignore */ }
  }

  /* ---------- flattened data ---------- */
  const topics = [];
  S.domains.forEach(d => d.groups.forEach(g => g.topics.forEach(t => {
    topics.push(Object.assign({ domain: d, group: g }, t));
  })));
  const topicById = Object.fromEntries(topics.map(t => [t.id, t]));
  const allEla = Array.from(new Set(topics.flatMap(t => t.ela))).filter(c => S.ela[c]);

  /* ---------- helpers ---------- */
  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? '' : v);
    }
    kids.flat().forEach(c => { if (c != null) n.append(c.nodeType ? c : document.createTextNode(c)); });
    return n;
  }
  const ext = (href, text, cls) => el('a', { href, target: '_blank', rel: 'noopener', class: cls }, text);
  const isCode = c => /^\d{2}_\d{2}_\d{2}$|^\d{2}[a-z]_\d{2}_\d{2}$/.test(c);

  function fillStaticLinks() {
    $$('[data-link]').forEach(a => {
      const url = S.links[a.dataset.link];
      if (url) a.href = url;
      else console.warn('Missing link', a.dataset.link);
    });
    $$('[data-checked]').forEach(n => { n.textContent = S.checked; });
  }

  /* ---------- header progress ---------- */
  function renderSummary() {
    const tDone = topics.filter(t => progress.topics[t.id]).length;
    const eDone = allEla.filter(c => progress.ela[c]).length;
    const meter = (label, a, b) => el('span', { class: 'meter', title: `${a} of ${b}` },
      label, ' ', el('span', { class: 'bar', 'aria-hidden': 'true' }, el('span', { style: `width:${b ? (100 * a / b) : 0}%` })), ` ${a}/${b}`);
    $('#progress-summary').replaceChildren(meter('Topics', tDone, topics.length), meter('e-LfH', eDone, allEla.length));
  }

  /* ---------- journey ---------- */
  function topicChip(id) {
    const t = topicById[id];
    if (!t) return null;
    return el('a', { href: `#syllabus/${id}`, class: 'topic-chip' + (progress.topics[id] ? ' done' : '') }, t.title);
  }
  function renderJourney() {
    $('#journey-list').replaceChildren(...S.journey.map(stage => el('li', null,
      el('div', { class: 'card' },
        el('h2', null, stage.title),
        el('ul', null, stage.points.map(p => el('li', null, p))),
        el('div', { class: 'topic-chips' }, stage.topics.map(topicChip))))));
  }

  /* ---------- syllabus ---------- */
  const filter = { q: '', clusters: new Set(), onlyFirst: false, hideDone: false };

  function renderClusterChips() {
    const wrap = $('#cluster-chips');
    wrap.replaceChildren(
      el('span', { class: 'small', style: 'align-self:center' }, 'IAC:'),
      ...Object.entries(S.clusters).map(([k, c]) => el('button', {
        type: 'button', class: 'chip', 'aria-pressed': String(filter.clusters.has(k)), title: c.name,
        onclick: () => { filter.clusters.has(k) ? filter.clusters.delete(k) : filter.clusters.add(k); renderClusterChips(); renderSyllabus(); },
      }, c.short)));
  }

  function matches(t) {
    if (filter.onlyFirst && !t.first) return false;
    if (filter.hideDone && progress.topics[t.id]) return false;
    if (filter.clusters.size && !t.iac.some(c => filter.clusters.has(c))) return false;
    if (filter.q) {
      const hay = [t.title, t.note, t.group.name, t.domain.name, ...t.ela.map(c => c + ' ' + (S.ela[c] ? S.ela[c][0] : ''))]
        .join(' ').toLowerCase();
      if (!filter.q.split(/\s+/).every(w => hay.includes(w))) return false;
    }
    return true;
  }

  function resourceItem(code) {
    const r = S.ela[code];
    if (!r) return null;
    const done = !!progress.ela[code];
    const id = `ela-${code}-${Math.random().toString(36).slice(2, 7)}`;
    return el('li', { class: done ? 'done' : null },
      el('input', { type: 'checkbox', id, checked: done, 'data-ela': code, 'aria-label': `Completed: ${r[0]}` }),
      isCode(code) ? el('code', null, code) : null,
      ext(r[1], r[0], 'ext'));
  }

  function topicCard(t) {
    const done = !!progress.topics[t.id];
    const cbId = `t-${t.id}`;
    const tags = el('div', { class: 'topic-tags' },
      t.first ? el('span', { class: 'badge first' }, 'Start here') : null,
      t.iac.map(c => el('span', { class: 'badge', title: S.clusters[c].name }, S.clusters[c].short)));
    const res = el('ul', { class: 'res' },
      t.ela.map(resourceItem),
      (t.links || []).map(([text, key]) => el('li', null, el('span', { style: 'width:13px;flex:none' }), ext(S.links[key], text, 'ext'))));
    return el('article', { class: 'topic' + (done ? ' is-done' : ''), id: `topic-${t.id}` },
      el('div', { class: 'topic-head' },
        el('input', { type: 'checkbox', id: cbId, checked: done, 'data-topic': t.id, title: 'I have covered this' }),
        el('div', null,
          el('label', { for: cbId, class: 'topic-title' }, t.title),
          tags)),
      t.note ? el('p', { class: 'topic-note' }, t.note) : null,
      res.children.length ? res : null);
  }

  function renderSyllabus() {
    const out = [];
    let shown = 0;
    S.domains.forEach(d => {
      const domTopics = d.groups.flatMap(g => g.topics);
      const done = domTopics.filter(t => progress.topics[t.id]).length;
      const groups = d.groups.map(g => {
        const list = g.topics.map(t => topicById[t.id]).filter(matches);
        shown += list.length;
        return list.length ? el('div', { class: 'group' }, el('h3', null, g.name), list.map(topicCard)) : null;
      }).filter(Boolean);
      if (groups.length) out.push(el('section', { class: 'domain' },
        el('h2', null, d.name, el('span', { class: 'count' }, `${done}/${domTopics.length} covered`)), groups));
    });
    $('#syllabus-list').replaceChildren(...out);
    $('#syllabus-empty').hidden = shown > 0;
  }

  /* ---------- IAC clusters ---------- */
  function renderIac() {
    $('#iac-clusters').replaceChildren(...Object.entries(S.clusters).map(([k, c]) => {
      const list = topics.filter(t => t.iac.includes(k));
      const done = list.filter(t => progress.topics[t.id]).length;
      return el('div', { class: 'card cluster' },
        el('h3', null, c.name, el('span', { class: 'count' }, `${done}/${list.length}`)),
        el('p', { class: 'caps' }, CLUSTER_CAPS[k]),
        el('div', { class: 'topic-chips' }, list.map(t => topicChip(t.id))));
    }));
  }

  /* ---------- routing ---------- */
  const VIEWS = ['start', 'journey', 'syllabus', 'iac', 'resources', 'about'];
  function route() {
    const [view, arg] = (location.hash.slice(1) || 'start').split('/');
    const v = VIEWS.includes(view) ? view : 'start';
    VIEWS.forEach(name => { $(`#view-${name}`).hidden = name !== v; });
    $$('.tabs a').forEach(a => { if (a.dataset.view !== v) a.removeAttribute('aria-current'); else a.setAttribute('aria-current', 'page'); });
    if (v === 'journey') renderJourney();
    if (v === 'iac') renderIac();
    if (v === 'syllabus') {
      if (arg && topicById[arg]) {
        // Make sure the linked topic is visible, then scroll to it.
        filter.q = ''; filter.clusters.clear(); filter.onlyFirst = false; filter.hideDone = false;
        $('#q').value = ''; $('#only-first').checked = false; $('#hide-done').checked = false;
        renderClusterChips();
        renderSyllabus();
        const card = document.getElementById(`topic-${arg}`);
        if (card) {
          card.scrollIntoView({ block: 'start' });
          card.classList.add('flash');
          setTimeout(() => card.classList.remove('flash'), 1800);
        }
        return;
      }
      renderSyllabus();
    }
    window.scrollTo(0, 0);
  }

  /* ---------- events ---------- */
  function onChange(e) {
    const t = e.target;
    if (t.matches('[data-topic]')) {
      if (t.checked) progress.topics[t.dataset.topic] = true; else delete progress.topics[t.dataset.topic];
      save(); renderSummary();
      const card = t.closest('.topic');
      card.classList.toggle('is-done', t.checked);
      const h = card.closest('.domain');
      if (h) {
        const d = S.domains.find(x => x.name === h.querySelector('h2').firstChild.textContent);
        const all = d.groups.flatMap(g => g.topics);
        h.querySelector('.count').textContent = `${all.filter(x => progress.topics[x.id]).length}/${all.length} covered`;
      }
      if (filter.hideDone && t.checked) setTimeout(renderSyllabus, 400);
    } else if (t.matches('[data-ela]')) {
      const code = t.dataset.ela;
      if (t.checked) progress.ela[code] = true; else delete progress.ela[code];
      save(); renderSummary();
      // The same session can appear under several topics; keep them in step.
      $$(`[data-ela="${code}"]`).forEach(cb => { cb.checked = t.checked; cb.closest('li').classList.toggle('done', t.checked); });
    }
  }

  function wireFilters() {
    let timer;
    $('#q').addEventListener('input', e => {
      clearTimeout(timer);
      timer = setTimeout(() => { filter.q = e.target.value.trim().toLowerCase(); renderSyllabus(); }, 120);
    });
    $('#only-first').addEventListener('change', e => { filter.onlyFirst = e.target.checked; renderSyllabus(); });
    $('#hide-done').addEventListener('change', e => { filter.hideDone = e.target.checked; renderSyllabus(); });
  }

  function wireProgressTools() {
    const msg = text => { $('#progress-msg').textContent = text; };
    $('#export-progress').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
      const a = el('a', { href: URL.createObjectURL(blob), download: 'novice-syllabus-progress.json' });
      document.body.append(a); a.click(); a.remove();
      msg('Progress exported.');
    });
    $('#import-progress').addEventListener('change', async e => {
      const f = e.target.files[0];
      if (!f) return;
      try {
        const p = JSON.parse(await f.text());
        if (typeof p !== 'object' || !p) throw new Error('bad file');
        progress = { topics: p.topics || {}, ela: p.ela || {} };
        save(); renderSummary(); msg('Progress imported.');
      } catch (err) { msg('That file could not be read as progress data.'); }
      e.target.value = '';
    });
    let armed = false;
    $('#reset-progress').addEventListener('click', e => {
      if (!armed) { armed = true; e.target.textContent = 'Click again to confirm'; setTimeout(() => { armed = false; e.target.textContent = 'Clear all ticks'; }, 4000); return; }
      progress = { topics: {}, ela: {} }; save(); renderSummary(); armed = false;
      e.target.textContent = 'Clear all ticks'; msg('All ticks cleared.');
    });
  }

  /* ---------- theme (light unless the viewer picks dark) ---------- */
  function wireTheme() {
    const btn = $('#theme-toggle');
    const apply = t => {
      if (t === 'dark') document.documentElement.dataset.theme = 'dark';
      else delete document.documentElement.dataset.theme;
      btn.textContent = t === 'dark' ? 'Light mode' : 'Dark mode';
    };
    let theme = 'light';
    try { theme = localStorage.getItem('nas-theme') || 'light'; } catch (e) { /* ignore */ }
    apply(theme);
    btn.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      apply(theme);
      try { localStorage.setItem('nas-theme', theme); } catch (e) { /* ignore */ }
    });
  }

  /* ---------- start ---------- */
  wireTheme();
  load();
  fillStaticLinks();
  renderSummary();
  renderClusterChips();
  wireFilters();
  wireProgressTools();
  document.addEventListener('change', onChange);
  window.addEventListener('hashchange', route);
  route();
})();
