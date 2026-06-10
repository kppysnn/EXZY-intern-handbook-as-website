import { I } from '../icons.js';
import { isDirectoryUnlocked } from '../auth.js';
import { pageWrap, escapeHtml } from '../helpers.js';

export const renderDirectory = () => {
  if (!isDirectoryUnlocked()) {
    return pageWrap({
      crumbs: [["Home", "#/home"], ["Company", null], ["Employee Contact", null]],
      title: "Employee Contact",
      lead: "ข้อมูลติดต่อพนักงานถูกป้องกันไว้ ใส่รหัสเพื่อเข้าดูรายชื่อได้เลย",
      body: `
        <div class="dir-gate">
          <div class="dir-gate-card anim-up">
            <div class="dir-gate-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3 class="dir-gate-title">Protected Employee Contact</h3>
            <p class="dir-gate-desc">เพื่อความเป็นส่วนตัวของพนักงาน <br>หน้านี้ต้องใช้รหัสก่อนเข้าดูรายชื่อและข้อมูลติดต่อ</p>
            <form class="dir-gate-form" id="dir-gate-form">
              <input type="password" class="dir-pw-input" id="dir-pw-input" aria-label="รหัสสำหรับดูข้อมูลพนักงาน" placeholder="กรอกรหัสสำหรับดูข้อมูล" autocomplete="off" />
              <button type="submit" class="dir-pw-btn" id="dir-pw-btn">${I.lock} ปลดล็อก</button>
            </form>
            <div class="dir-gate-err" id="dir-gate-err" hidden>${I.info} รหัสไม่ถูกต้อง — ลองอีกครั้ง หรือตรวจสอบรหัสใน Admin Panel</div>
            <div class="dir-gate-hint">ใส่รหัสที่ได้รับจาก HR เพื่อเข้าใช้งานหน้านี้</div>
          </div>
        </div>
      `,
    });
  }

  const DATA = window.EMPLOYEE_DATA || { records: [], teams: [] };
  const emps = DATA.records.slice().sort((a, b) => {
    const na = parseInt((a.id || '').replace(/\D/g, ''), 10);
    const nb = parseInt((b.id || '').replace(/\D/g, ''), 10);
    const va = isNaN(na) ? Infinity : na;
    const vb = isNaN(nb) ? Infinity : nb;
    return va - vb;
  });
  const teams = [...new Set(emps.map(e => e.team).filter(Boolean))].sort();

  return pageWrap({
    crumbs: [["Home", "#/home"], ["Company", null], ["Employee Directory", null]],
    title: "Employee Directory",
    lead: "ค้นหาชื่อ อีเมล หรือทีมของเพื่อนร่วมงาน — พิมพ์ค้นได้เลย",
    body: `
      <div class="dir-topbar">
        <span class="dir-mode-badge">${I.lock} Protected Data</span>
        <button class="dir-lock-btn" id="dir-lock-btn" type="button">${I.lock} ล็อกข้อมูล</button>
      </div>

      <div class="dir-toolbar">
        <div class="dir-search">
          <span class="dir-search-ico">${I.search}</span>
          <input type="text" id="dir-q" aria-label="ค้นหาพนักงานด้วยรหัส ชื่อ ชื่อเล่น อีเมล หรือทีม" placeholder="ค้นหาด้วยรหัส, ชื่อ, ชื่อเล่น, อีเมล หรือทีม..." />
        </div>
        <select id="dir-team" aria-label="กรองตามทีม">
          <option value="">ทุกทีม</option>
          ${teams.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("")}
        </select>
        <div class="dir-count" id="dir-count">${emps.length} คน</div>
      </div>

      <div class="dir-table-wrap">
        <table class="dir-table" id="dir-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ชื่อ-นามสกุล (EN)</th>
              <th>ชื่อ (TH)</th>
              <th>ชื่อเล่น</th>
              <th>ทีม</th>
              <th>อีเมล</th>
              <th>เบอร์โทร</th>
            </tr>
          </thead>
          <tbody id="dir-tbody">
            ${emps.map(e => `
              <tr data-team="${escapeHtml(e.team || '')}" data-search="${escapeHtml(((e.id || '') + ' ' + (e.fullName || '') + ' ' + (e.thaiName || '') + ' ' + (e.nickname || '') + ' ' + (e.team || '') + ' ' + (e.email || '')).toLowerCase())}">
                <td class="dir-id">${escapeHtml(e.id || '—')}</td>
                <td>${escapeHtml(e.fullName || '—')}</td>
                <td>${escapeHtml(e.thaiName || '—')}</td>
                <td>${escapeHtml(e.nickname || '—')}</td>
                <td>${e.team ? `<span class="dir-tag">${escapeHtml(e.team)}</span>` : '<span class="dir-muted">—</span>'}</td>
                <td>${e.email ? `<a href="mailto:${escapeHtml(e.email)}" class="dir-email">${escapeHtml(e.email)}</a>` : '<span class="dir-muted">—</span>'}</td>
                <td>${escapeHtml(e.mobile || '') || '<span class="dir-muted">—</span>'}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        <div id="dir-empty" class="dir-empty" hidden>ไม่พบข้อมูลที่ตรงกัน</div>
      </div>

      <div class="callout" style="margin-top:24px;">
        <span class="ic">${I.info}</span>
        <div>
          <h4>หาไม่เจอ?</h4>
          <p>ลองถามพี่เลี้ยง หรือส่งเมลหา HR ที่ <a href="mailto:hr@exzyteam.com">hr@exzyteam.com</a> ได้เลย</p>
        </div>
      </div>
    `,
  });
};
