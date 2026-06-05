import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';

const depts = [
  { title: "Business Development", abbr: "BD",  color: "#66C5C5",
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    desc: "พัฒนาธุรกิจและโอกาสทางการตลาด" },
  { title: "Marketing", abbr: "MKT", color: "#FFCC00",
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    desc: "สื่อสารแบรนด์และสร้าง Awareness" },
  { title: "HR", abbr: "HR",  color: "#82C566",
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    desc: "บริหารบุคลากรและดูแล Intern" },
  { title: "Accounting", abbr: "ACC", color: "#929EB4",
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="8" y1="3" x2="8" y2="21"/><path d="M11 8h4M11 12h4M11 16h4"/></svg>`,
    desc: "การเงิน บัญชี และเบี้ยเลี้ยง" },
  { title: "Development", abbr: "DEV", color: "#004081",
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    desc: "พัฒนาซอฟต์แวร์และระบบ" },
  { title: "Solution Engineer", abbr: "SE",  color: "#586782",
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 15.54a5 5 0 0 1 0-7.07"/></svg>`,
    desc: "ออกแบบและติดตั้ง Solution" },
  { title: "Design", abbr: "DSN", color: "#66C5C5",
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22L6.5 14.5C6.5 14.5 3 13 3 10c0-3 2-5 5-5"/></svg>`,
    desc: "ออกแบบ UX/UI และสื่อกราฟิก" },
  { title: "IT Support", abbr: "ITS", color: "#D0D6DF",
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    desc: "ดูแลอุปกรณ์ IT และ Network" },
  { title: "Sales", abbr: "SLS", color: "#F3554F",
    icon: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    desc: "ขายสินค้าและบริการของ EXZY" },
];

export const renderOrgChart = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Company", null], ["Org Chart", null]],
  title: "โครงสร้างองค์กร",
  lead: "EXZY มี 9 แผนกหลัก — ทำความรู้จักแต่ละฝ่ายและหน้าที่รับผิดชอบก่อนวันแรก",
  body: `
    <!-- Company Header Card -->
    <div class="oc-company-card oc-company-card-sm anim-up">
      <div class="oc-company-eyebrow">Head Office · Bangkok</div>
      <div class="oc-company-name">EXZY Co., Ltd.</div>
      <div class="oc-company-tagline">"Excellence by design, Advance by technology"</div>
    </div>

    <!-- Connector -->
    <div class="oc-connector" aria-hidden="true">
      <div class="oc-connector-stem"></div>
      <div class="oc-connector-branch"></div>
    </div>

    <!-- Department Grid V2 -->
    <div class="oc-dept-grid">
      ${depts.map((d, i) => `
        <div class="oc-dept-v2 anim-up" data-delay="${i * 40}" style="--dv-color:${d.color}">
          <div class="oc-dept-v2-icon">${d.icon}</div>
          <div>
            <div class="oc-dept-v2-abbr">${d.abbr}</div>
            <div class="oc-dept-v2-name">${d.title}</div>
          </div>
          <div class="oc-dept-v2-desc">${d.desc}</div>
        </div>
      `).join('')}
    </div>

    <div class="callout" style="margin-top:48px;">
      <span class="ic">${I.info}</span>
      <div>
        <h4>ยังไม่รู้ว่าตัวเองอยู่แผนกไหน?</h4>
        <p>ไม่ต้องกังวล — HR จะแจ้งแผนกและพี่เลี้ยงให้คุณทราบก่อนวันแรก · ดูรายชื่อพนักงานแต่ละทีมได้ใน <a href="#/employee/directory" data-link>Employee Directory</a></p>
      </div>
    </div>
  `,
});
