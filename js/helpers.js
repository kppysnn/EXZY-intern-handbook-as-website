import { I } from './icons.js';

export function qCard(icon, title, desc, href, feature = false) {
  return `
    <a href="${href}" class="card ${feature ? 'card-feature' : ''} is-link fade-up" data-link>
      <div class="icon-wrap">${I[icon]}</div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <span class="card-link">ดูเพิ่ม ${I.arrow}</span>
    </a>
  `;
}

export function teamCard(badge, title, sub, roles) {
  return `
    <div class="team-card anim-up">
      <div class="team-head">
        <div class="team-badge">${badge}</div>
        <div>
          <h4>${title}</h4>
          <div class="team-sub">${sub}</div>
        </div>
      </div>
      <div class="team-roles">${roles.map(r => `<span>${r}</span>`).join("")}</div>
    </div>
  `;
}

export function acc(q, a) {
  return `
    <div class="acc-item">
      <button type="button" class="acc-trigger" aria-expanded="false">${q}<span class="acc-icon">${I.plus}</span></button>
      <div class="acc-body"><div class="acc-body-inner">${a}</div></div>
    </div>
  `;
}

const _sectionMeta = {
  "Getting Started": { num: "01", label: "Getting Started", section: "getting-started" },
  "Company & Office": { num: "01", label: "Getting Started", section: "getting-started" },
  "Intern Tasks":    { num: "02", label: "Intern Tasks",    section: "tasks" },
  "Company":         { num: "03", label: "Company",         section: "company" },
  "Employee":        { num: "03", label: "Company",         section: "company" },
  "Work Policy":     { num: "04", label: "Work Policy",     section: "policy" },
  "Resources":       { num: "05", label: "Resources",       section: "resources" },
  "Showcase":        { num: "06", label: "Showcase",        section: "showcase" },
  "Admin":           { num: "07", label: "Admin",           section: "admin" },
};

export function pageWrap({ crumbs, title, lead, body, toc }) {
  const crumbHtml = crumbs.map(([t, href], i) => {
    const isLast = i === crumbs.length - 1;
    if (href) return `<a href="${href}" data-link>${t}</a><span class="breadcrumb-sep"> › </span>`;
    if (isLast) return `<span class="breadcrumb-cur">${t}</span>`;
    return `<span>${t}</span><span class="breadcrumb-sep"> › </span>`;
  }).join("");

  const sectionName = crumbs.length > 1 ? crumbs[1][0] : "";
  const meta = _sectionMeta[sectionName] || { num: "—", label: sectionName };

  const tocHtml = toc ? `
    <aside class="content-sticky">
      <nav class="toc">
        <div class="toc-title">On this page</div>
        ${toc.map(([id, label]) => `<a href="#${id}" data-anchor>${label}</a>`).join("")}
      </nav>
    </aside>
  ` : "";

  return `
    <!-- PAGE HERO BAND -->
    <div class="page-hero-band" data-section="${meta.section || 'getting-started'}">
      <div class="phb-inner">
        <div class="phb-eyebrow anim-up">
          ${meta.label}
        </div>
        <h1 class="phb-title anim-up" data-delay="40">${title}</h1>
        <p class="phb-lead anim-up" data-delay="90">${lead}</p>
      </div>
      <div class="phb-deco-num" aria-hidden="true">${meta.num}</div>
    </div>

    <!-- CONTENT -->
    <section class="section">
      <div class="section-inner">
        <div class="${toc ? 'content-grid' : ''}">
          ${tocHtml}
          <article class="prose">
            ${body}
          </article>
        </div>
      </div>
    </section>
  `;
}

export function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function escapeAttr(s) {
  return escapeHtml(s);
}
