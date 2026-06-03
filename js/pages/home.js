import { I } from '../icons.js';

export const renderHome = () => `

<!-- ══ HERO ══ -->
<section class="hmv3-hero">
  <div class="hmv3-inner">
    <div>
      <div class="hmv3-kicker">
        <span class="hmv3-kicker-dot"></span>
        EXZY · Intern Handbook
      </div>
      <h1 class="hmv3-h1">
        คู่มือของนักศึกษาฝึกงาน<br/>
        <span class="hmv3-h1-accent">ที่รวมทุกอย่างไว้</span>
      </h1>
      <p class="hmv3-sub">รวมทุกสิ่งที่ต้องรู้ตลอดการฝึกงานที่ EXZY ตั้งแต่วันแรกจนถึงวันสุดท้าย</p>
      <div class="hmv3-actions">
        <a href="#/first-day" class="hmv3-btn-primary">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          เพิ่งเริ่มวันแรก? เริ่มที่นี่
          ${I.arrow}
        </a>
      </div>
    </div>

    <div class="hmv3-hero-visual" aria-hidden="true">
      <div class="hmv3-hero-orb"></div>
      <svg class="hmv3-hero-svg" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
        <circle cx="160" cy="160" r="148" stroke="rgba(102,197,197,0.14)" stroke-width="1" fill="none"/>
        <circle cx="160" cy="160" r="110" stroke="rgba(102,197,197,0.09)" stroke-width="1" fill="none"/>
        <circle cx="160" cy="160" r="72" fill="rgba(0,64,128,0.16)"/>
        <circle cx="160" cy="160" r="44" fill="rgba(102,197,197,0.08)"/>
        <text x="160" y="152" text-anchor="middle" fill="rgba(255,255,255,0.06)" font-size="40" font-family="Sora,system-ui,sans-serif" font-weight="800" letter-spacing="-1">EXZY</text>
        <text x="160" y="172" text-anchor="middle" fill="rgba(102,197,197,0.18)" font-size="9.5" font-family="Sora,system-ui,sans-serif" font-weight="700" letter-spacing="3.5">INTERN</text>
      </svg>
      <div class="hmv3-hero-orbit hmv3-hero-orbit-1"><div class="hmv3-hero-dot"></div></div>
      <div class="hmv3-hero-orbit hmv3-hero-orbit-2"><div class="hmv3-hero-dot hmv3-hero-dot-sm"></div></div>
    </div>

  </div>
</section>

<!-- ══ CHAPTER BAR ══ -->
<nav class="hmv3-chapters" aria-label="สารบัญ Intern Handbook">
  <div class="hmv3-chapters-inner">
    <a href="#/first-day" class="hmv3-chapter-item">
      <span class="hmv3-chapter-dot" style="background:#66C5C5"></span>
      <span class="hmv3-chapter-name">Day 1 Guide</span>
      <span class="hmv3-chapter-badge">เริ่มที่นี่</span>
    </a>
    <a href="#/getting-started/orientation" class="hmv3-chapter-item">
      <span class="hmv3-chapter-dot" style="background:#66C5C5"></span>
      <span class="hmv3-chapter-name">Orientation & ออฟฟิศ</span>
    </a>
    <a href="#/employee/org-chart" class="hmv3-chapter-item">
      <span class="hmv3-chapter-dot" style="background:#F59E0B"></span>
      <span class="hmv3-chapter-name">ทีมและองค์กร</span>
    </a>
    <a href="#/policy/code-of-conduct" class="hmv3-chapter-item">
      <span class="hmv3-chapter-dot" style="background:#3B82F6"></span>
      <span class="hmv3-chapter-name">Work Policy</span>
    </a>
    <a href="#/resources/timesheet" class="hmv3-chapter-item">
      <span class="hmv3-chapter-dot" style="background:#8B5CF6"></span>
      <span class="hmv3-chapter-name">Resources & FAQs</span>
    </a>
    <a href="#/showcase/experiences" class="hmv3-chapter-item">
      <span class="hmv3-chapter-dot" style="background:#EC4899"></span>
      <span class="hmv3-chapter-name">Showcase</span>
    </a>
  </div>
</nav>


<!-- ══ BENTO GRID ══ -->
<div class="hmv3-bento-wrap">
  <div class="hmv3-bento-inner">
    <div class="hmv3-bento-header">
      <h2 class="hmv3-bento-title">ข้อมูลที่ต้องรู้</h2>
    </div>
    <div class="hmv3-bento-grid">

      <!-- Day 1 featured -->
      <a href="#/first-day" class="hmv3-cell hmv3-cell--day1">
        <div class="hmv3-day1-num">01 · Day 1 Guide</div>
        <div class="hmv3-day1-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <h3 class="hmv3-day1-title">เพิ่งเริ่มวันแรก?<br/>เริ่มที่นี่เลย</h3>
        <p class="hmv3-day1-sub">สิ่งที่ต้องทำวันนี้และ 4 ช่วงสำคัญที่จะเกิดขึ้น — ออกแบบมาสำหรับวันแรกโดยเฉพาะ</p>
        <div class="hmv3-day1-checklist">
          <div class="hmv3-day1-check">
            <div class="hmv3-day1-check-dot"></div>
            <div class="hmv3-day1-check-text">
              <span class="hmv3-day1-check-label">Orientation กับ HR</span>
              <span class="hmv3-day1-check-note">ทำความรู้จัก EXZY ตั้งค่า Tools รับเอกสาร</span>
            </div>
          </div>
          <div class="hmv3-day1-check">
            <div class="hmv3-day1-check-dot"></div>
            <div class="hmv3-day1-check-text">
              <span class="hmv3-day1-check-label">Subscribe Google Calendar</span>
              <span class="hmv3-day1-check-note">รับนัดหมายบริษัทโดยอัตโนมัติ</span>
            </div>
          </div>
          <div class="hmv3-day1-check">
            <div class="hmv3-day1-check-dot"></div>
            <div class="hmv3-day1-check-text">
              <span class="hmv3-day1-check-label">กรอก Timesheet ก่อนกลับบ้าน</span>
              <span class="hmv3-day1-check-note">บันทึกเวลาเข้า-ออกตามจริง</span>
            </div>
          </div>
        </div>
        <span class="hmv3-day1-cta">
          เปิด Day 1 Guide
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </a>

      <!-- Orientation -->
      <div class="hmv3-cell" style="--cell-accent:#66C5C5">
        <div class="hmv3-cell-head">
          <div class="hmv3-cell-icon" style="background:rgba(102,197,197,.12);color:#0e7a7a;">${I.rocket}</div>
        </div>
        <div class="hmv3-cell-title">Orientation & ออฟฟิศ</div>
        <div class="hmv3-cell-desc">ข้อมูลสำคัญเกี่ยวกับออฟฟิศและการทำงาน</div>
        <div class="hmv3-cell-links">
          <a href="#/getting-started/orientation" class="hmv3-cell-link">${I.arrow} Orientation Slides</a>
          <a href="#/getting-started/wifi" class="hmv3-cell-link">${I.arrow} Wi-Fi ออฟฟิศ</a>
          <a href="#/getting-started/meeting-rooms" class="hmv3-cell-link">${I.arrow} ห้องประชุม</a>
        </div>
      </div>

      <!-- Company -->
      <div class="hmv3-cell" style="--cell-accent:#F59E0B">
        <div class="hmv3-cell-head">
          <div class="hmv3-cell-icon" style="background:rgba(245,158,11,.12);color:#92400e;">${I.people}</div>
        </div>
        <div class="hmv3-cell-title">ทีมและองค์กร</div>
        <div class="hmv3-cell-desc">โครงสร้างองค์กร 9 แผนก · รายชื่อและข้อมูลการติดต่อพนักงาน</div>
        <div class="hmv3-cell-links">
          <a href="#/employee/org-chart" class="hmv3-cell-link">${I.arrow} โครงสร้างองค์กร</a>
          <a href="#/employee/directory" class="hmv3-cell-link">${I.arrow} Employee Contact</a>
        </div>
      </div>

      <!-- Policy -->
      <div class="hmv3-cell" style="--cell-accent:#3B82F6">
        <div class="hmv3-cell-head">
          <div class="hmv3-cell-icon" style="background:rgba(59,130,246,.12);color:#1e3a8a;">${I.shield}</div>
        </div>
        <div class="hmv3-cell-title">Work Policy</div>
        <div class="hmv3-cell-desc">5 Core Values · นโยบายฝึกงาน · Dress Code · การลา</div>
        <div class="hmv3-cell-links">
          <a href="#/policy/code-of-conduct" class="hmv3-cell-link">${I.arrow} Core Values</a>
          <a href="#/policy/internship" class="hmv3-cell-link">${I.arrow} Internship Policy</a>
          <a href="#/policy/dress-code" class="hmv3-cell-link">${I.arrow} Dress Code</a>
          <a href="#/policy/leave" class="hmv3-cell-link">${I.arrow} Leave & Absence</a>
        </div>
      </div>

      <!-- Resources -->
      <div class="hmv3-cell" style="--cell-accent:#8B5CF6">
        <div class="hmv3-cell-head">
          <div class="hmv3-cell-icon" style="background:rgba(139,92,246,.12);color:#4c1d95;">${I.clock}</div>
        </div>
        <div class="hmv3-cell-title">Resources</div>
        <div class="hmv3-cell-desc">Timesheet · FAQs · ข้อมูลที่ต้องใช้ตลอดการฝึกงาน</div>
        <div class="hmv3-cell-links">
          <a href="#/resources/timesheet" class="hmv3-cell-link">${I.arrow} Timesheet</a>
          <a href="#/resources/faqs" class="hmv3-cell-link">${I.arrow} FAQs</a>
        </div>
      </div>

      <!-- Showcase -->
      <div class="hmv3-showcase-wrap">
        <div class="hmv3-showcase-top">
          <div class="hmv3-showcase-title">เรื่องราว บทเรียน และมุมมองจากผู้ที่เคยฝึกงานที่ EXZY</div>
        </div>
        <div class="hmv3-showcase-articles">
          <!-- Article card 1 — Experiences -->
          <a href="#/showcase/experiences" class="hmv3-art-card">
            <div class="hmv3-art-cover hmv3-art-cover-exp">
              <div class="hmv3-art-cover-label">Experiences</div>
              <svg viewBox="0 0 80 52" width="80" height="52" fill="none">
                <circle cx="24" cy="26" r="18" stroke="rgba(255,255,255,.2)" stroke-width="1.5"/>
                <circle cx="24" cy="26" r="10" fill="rgba(102,197,197,.25)"/>
                <circle cx="56" cy="26" r="12" stroke="rgba(255,255,255,.12)" stroke-width="1.5"/>
                <circle cx="56" cy="26" r="6" fill="rgba(102,197,197,.15)"/>
                <line x1="34" y1="26" x2="44" y2="26" stroke="rgba(255,255,255,.2)" stroke-width="1.5"/>
              </svg>
            </div>
            <div class="hmv3-art-body">
              <div class="hmv3-art-tag hmv3-art-tag-exp">Experiences</div>
              <div class="hmv3-art-title">ประสบการณ์จาก Intern รุ่นก่อน</div>
              <div class="hmv3-art-desc">ประสบการณ์และมุมมองจากคนที่เคยฝึกงานที่ EXZY มาก่อน</div>
              <div class="hmv3-art-meta">
                <span class="hmv3-art-read">ดูทั้งหมด</span>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>
          <a href="#/showcase/blog" class="hmv3-art-card">
            <div class="hmv3-art-cover hmv3-art-cover-blog">
              <div class="hmv3-art-cover-label">Blog</div>
              <svg viewBox="0 0 80 52" width="80" height="52" fill="none">
                <rect x="10" y="12" width="48" height="7" rx="3.5" fill="rgba(255,255,255,.22)"/>
                <rect x="10" y="24" width="34" height="5" rx="2.5" fill="rgba(255,255,255,.14)"/>
                <rect x="10" y="34" width="22" height="4" rx="2" fill="rgba(255,255,255,.08)"/>
              </svg>
            </div>
            <div class="hmv3-art-body">
              <div class="hmv3-art-tag hmv3-art-tag-blog">Blog</div>
              <div class="hmv3-art-title">บทความจาก Intern</div>
              <div class="hmv3-art-desc">ความรู้ เทคนิค และสิ่งที่ได้เรียนรู้ระหว่างฝึกงานที่ EXZY</div>
              <div class="hmv3-art-meta">
                <span class="hmv3-art-read">ดูทั้งหมด</span>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- ══ QUICK LINKS ══ -->
<div class="hmv3-ql-wrap">
  <div class="hmv3-ql-inner">
    <div class="hmv3-ql-header">
      <div class="hmv3-ql-label">เปิดบ่อย</div>
      <p class="hmv3-ql-sub">ข้อมูลที่ intern ค้นหาบ่อยที่สุด</p>
    </div>
    <div class="hmv3-ql-grid">
      <a href="#/resources/timesheet" class="hmv3-ql-item">
        <div class="hmv3-ql-text">
          <span class="hmv3-ql-name">Timesheet</span>
          <span class="hmv3-ql-hint">กรอก · แก้ไข · พิมพ์ส่งสิ้นเดือน</span>
        </div>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" class="hmv3-ql-arr"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/policy/leave" class="hmv3-ql-item">
        <div class="hmv3-ql-text">
          <span class="hmv3-ql-name">การขอลา</span>
          <span class="hmv3-ql-hint">ขั้นตอน · วันลา · ลาป่วย</span>
        </div>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" class="hmv3-ql-arr"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/getting-started/wifi" class="hmv3-ql-item">
        <div class="hmv3-ql-text">
          <span class="hmv3-ql-name">Wi-Fi ออฟฟิศ</span>
          <span class="hmv3-ql-hint">SSID · Password · QR Code</span>
        </div>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" class="hmv3-ql-arr"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/employee/directory" class="hmv3-ql-item">
        <div class="hmv3-ql-text">
          <span class="hmv3-ql-name">Employee Contact</span>
          <span class="hmv3-ql-hint">ติดต่อทีมงานและแผนก</span>
        </div>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" class="hmv3-ql-arr"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/policy/dress-code" class="hmv3-ql-item">
        <div class="hmv3-ql-text">
          <span class="hmv3-ql-name">Dress Code</span>
          <span class="hmv3-ql-hint">การแต่งกายที่เหมาะสม</span>
        </div>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" class="hmv3-ql-arr"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/resources/faqs" class="hmv3-ql-item">
        <div class="hmv3-ql-text">
          <span class="hmv3-ql-name">FAQs</span>
          <span class="hmv3-ql-hint">คำถามพบบ่อย 18+ ข้อ</span>
        </div>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" class="hmv3-ql-arr"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</div>
`;
