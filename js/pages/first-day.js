export function renderFirstDay(data = {}) {
  const hrEmail = data.hr_email || 'hr@exzyteam.com';

  return `
<div class="fd3-page">

<!-- ══════════════ HERO ══════════════ -->
<div class="fd9-hero">

  <!-- bold CI color panel — right diagonal -->
  <div class="fd9-panel" aria-hidden="true">
    <div class="fd9-panel-orb fd9-porb-1"></div>
    <div class="fd9-panel-orb fd9-porb-2"></div>
    <!-- grid lines on panel -->
    <div class="fd9-panel-grid"></div>
  </div>

  <!-- full-width top eyebrow bar -->
  <div class="fd9-topbar">
    <span class="fd9-topbar-dot"></span>
    EXZY Internship
    <span class="fd9-topbar-sep">·</span>
    คู่มือวันแรก
    <span class="fd9-topbar-sep">·</span>
    Day 01
  </div>

  <!-- main split -->
  <div class="fd9-inner">

    <!-- LEFT: white zone / large typography -->
    <div class="fd9-left">
      <h1 class="fd9-h1">
        <span class="fd9-h1-a">ยินดี</span>
        <span class="fd9-h1-b">ต้อนรับ</span>
        <span class="fd9-h1-c">สู่ทีม <mark class="fd9-mark">EXZY</mark></span>
      </h1>

      <p class="fd9-sub">คู่มือฉบับสั้น สำหรับ intern วันแรก<br>ทำให้เสร็จก่อนกลับบ้านวันนี้</p>

      <div class="fd9-actions">
        <a href="#fd3-sec1" class="fd9-btn" data-scroll-to="fd3-sec1">
          เริ่มต้นเลย
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <div class="fd9-pill-row">
          <span class="fd9-pill">📋 2 Tasks</span>
          <span class="fd9-pill">⏱ 5 นาที</span>
        </div>
      </div>
    </div>

    <!-- RIGHT: CI atmospheric panel -->
    <div class="fd9-right">

      <!-- large day number (background anchor) -->
      <div class="fd9-bignum" aria-hidden="true">01</div>

      <!-- orbital ring illustration -->
      <div class="fd9-ring" aria-hidden="true">
        <div class="fd9-ring-track fd9-ring-track-1"></div>
        <div class="fd9-ring-track fd9-ring-track-2"></div>
        <div class="fd9-ring-center"></div>
        <div class="fd9-ring-spinner fd9-ring-spinner-1">
          <div class="fd9-ring-dot"></div>
        </div>
        <div class="fd9-ring-spinner fd9-ring-spinner-2">
          <div class="fd9-ring-dot fd9-ring-dot-sm"></div>
        </div>
      </div>

      <!-- welcome badge -->
      <div class="fd9-welcome">
        <span class="fd9-welcome-emoji">👋</span>
        <span>ยินดีต้อนรับ intern ใหม่!</span>
      </div>

    </div>
  </div>


</div>
<div style="display:none"><!-- fd8 hero placeholder --></div>
<div class="fd8-hero">

  <!-- bg gradient + texture -->
  <div class="fd8-bg" aria-hidden="true"></div>

  <!-- big decorative circle right -->
  <div class="fd8-circle-deco" aria-hidden="true"></div>

  <!-- split layout -->
  <div class="fd8-split">

    <!-- LEFT: text -->
    <div class="fd8-left">

      <div class="fd8-eyebrow">
        <span class="fd8-dot"></span>
        EXZY Internship &nbsp;·&nbsp; คู่มือวันแรก
      </div>

      <h1 class="fd8-h1">
        <span class="fd8-h1-light">ยินดีต้อนรับ</span>
        <span class="fd8-h1-bold">สู่ทีม <em>EXZY</em></span>
      </h1>

      <p class="fd8-sub">ทำ 2 tasks ให้เสร็จก่อนกลับบ้านวันนี้<br>อ่านได้ภายใน 5 นาที</p>

      <div class="fd8-actions">
        <a href="#fd3-sec1" class="fd8-cta-main" data-scroll-to="fd3-sec1">
          เริ่มต้นเลย
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#fd3-sec2" class="fd8-cta-ghost" data-scroll-to="fd3-sec2">ดูตารางวันแรก</a>
      </div>

      <!-- stat row -->
      <div class="fd8-stats">
        <div class="fd8-stat">
          <span class="fd8-stat-n">2</span>
          <span class="fd8-stat-l">Tasks</span>
        </div>
        <div class="fd8-stat-sep"></div>
        <div class="fd8-stat">
          <span class="fd8-stat-n">4</span>
          <span class="fd8-stat-l">ช่วงสำคัญ</span>
        </div>
        <div class="fd8-stat-sep"></div>
        <div class="fd8-stat">
          <span class="fd8-stat-n">5</span>
          <span class="fd8-stat-l">นาที</span>
        </div>
      </div>

    </div>

    <!-- RIGHT: visual panel -->
    <div class="fd8-right" aria-hidden="true">

      <!-- glow orb behind everything -->
      <div class="fd8-glow-orb"></div>

      <!-- task card 1 -->
      <div class="fd8-vcard fd8-vcard-1">
        <div class="fd8-vcard-bar" style="background:linear-gradient(90deg,#0FA8A8,#66C5C5)"></div>
        <div class="fd8-vcard-body">
          <div class="fd8-vcard-label" style="color:#0FA8A8">Task 01</div>
          <div class="fd8-vcard-title">Subscribe Google Calendar</div>
          <div class="fd8-vcard-steps">
            <span>📧</span><span class="fd8-step-arrow">→</span>
            <span>📅</span><span class="fd8-step-arrow">→</span>
            <span>✅</span>
          </div>
        </div>
        <div class="fd8-vcard-check">✓</div>
      </div>

      <!-- task card 2 -->
      <div class="fd8-vcard fd8-vcard-2">
        <div class="fd8-vcard-bar" style="background:linear-gradient(90deg,#F59E0B,#FCD34D)"></div>
        <div class="fd8-vcard-body">
          <div class="fd8-vcard-label" style="color:#D97706">Task 02</div>
          <div class="fd8-vcard-title">กรอก Timesheet</div>
          <div class="fd8-vcard-steps">
            <span>📂</span><span class="fd8-step-arrow">→</span>
            <span>✏️</span><span class="fd8-step-arrow">→</span>
            <span>🖨️</span>
          </div>
        </div>
        <div class="fd8-vcard-check" style="background:#FEF3C7;color:#D97706">✓</div>
      </div>

      <!-- welcome badge -->
      <div class="fd8-badge">
        <span class="fd8-badge-emoji">🎉</span>
        <div>
          <div class="fd8-badge-title">Day 1</div>
          <div class="fd8-badge-sub">ยินดีต้อนรับสู่ทีม!</div>
        </div>
      </div>

      <!-- time badge -->
      <div class="fd8-time-badge">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        5 นาที
      </div>

      <!-- floating dots -->
      <div class="fd8-fdot fd8-fdot-1"></div>
      <div class="fd8-fdot fd8-fdot-2"></div>
      <div class="fd8-fdot fd8-fdot-3"></div>

    </div>
  </div>

  <!-- wave -->
  <div class="fd8-wave" aria-hidden="true">
    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff"/>
    </svg>
  </div>
</div>

<!-- ══════════════ SECTION 1: Tasks ══════════════ -->
<section class="fd3-section fd3-sec-tasks" id="fd3-sec1">
  <div class="fd3-sec-head fdb-reveal">
    <div class="fd3-sec-tag">ภารกิจวันนี้</div>
    <h2 class="fd3-sec-title">ต้องทำให้เสร็จวันนี้</h2>
    <p class="fd3-sec-sub">หลัง Orientation เสร็จ — ทำ 2 tasks นี้ให้ครบก่อนกลับบ้าน</p>
  </div>

  <div class="fd3-task-grid">

    <!-- Task 01: Calendar -->
    <div class="fd3-task-card fdb-reveal fdb-delay1">
      <div class="fd3-task-body">
        <div class="fd3-task-header">
          <div class="fd3-task-ico" style="color:#66C5C5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div>
            <div class="fd3-task-num" style="color:#66C5C5">Task 01</div>
            <div class="fd3-task-name">Subscribe Google Calendar</div>
          </div>
        </div>

        <p class="fd3-task-desc">Subscribe ปฏิทิน EXZY เพื่อรับนัดหมายและกิจกรรมบริษัทโดยอัตโนมัติ</p>

        <div class="fd3-flow">
          <div class="fd3-flow-step">
            <div class="fd3-flow-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2 8 12 14 22 8"/></svg></div>
            <div class="fd3-flow-text">รับ Email<br>คำเชิญจาก HR</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step">
            <div class="fd3-flow-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
            <div class="fd3-flow-text">กด<br>Open Calendar</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step fd3-flow-step-last">
            <div class="fd3-flow-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
            <div class="fd3-flow-text">กด Subscribe<br>ทั้ง 2 ปฏิทิน</div>
          </div>
        </div>

        <div class="fd3-task-note">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          ไม่ได้รับ Email? ติดต่อ HR ได้ที่
          <a href="mailto:${hrEmail}" class="fd3-task-note-email">${hrEmail}</a>
        </div>
      </div>
    </div>

    <!-- Task 02: Timesheet -->
    <div class="fd3-task-card fdb-reveal fdb-delay2">
      <div class="fd3-task-body">
        <div class="fd3-task-header">
          <div class="fd3-task-ico" style="color:#F59E0B">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div>
            <div class="fd3-task-num" style="color:#F59E0B">Task 02</div>
            <div class="fd3-task-name">กรอก Timesheet</div>
          </div>
        </div>

        <p class="fd3-task-desc">กรอกเวลาเข้า-ออกงานตามจริง HR จะส่งไฟล์ Excel ให้ทางอีเมล กรอกทุกวัน พิมพ์ส่งสิ้นเดือน</p>

        <div class="fd3-flow">
          <div class="fd3-flow-step">
            <div class="fd3-flow-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></div>
            <div class="fd3-flow-text">รับไฟล์<br>Timesheet จาก HR</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step">
            <div class="fd3-flow-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div>
            <div class="fd3-flow-text">เปิดไฟล์<br>กรอกวันนี้</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step fd3-flow-step-last">
            <div class="fd3-flow-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg></div>
            <div class="fd3-flow-text">พิมพ์ส่ง HR<br>สิ้นเดือน</div>
          </div>
        </div>

        <a href="#/resources/timesheet" class="fd3-task-link" data-link>
          ดูคู่มือ Timesheet ฉบับเต็ม
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>

  </div>
</section>

<!-- ══════════════ SECTION 2: Timeline ══════════════ -->
<section class="fd3-section fd3-sec-timeline" id="fd3-sec2">
  <div class="fd3-sec-head fdb-reveal">
    <div class="fd3-sec-tag fd3-sec-tag-alt">ตารางวันแรก</div>
    <h2 class="fd3-sec-title">4 ช่วงสำคัญในวันแรก</h2>
    <p class="fd3-sec-sub">วันแรกแบ่งเป็น 4 ช่วงหลัก — อ่านเพื่อเตรียมใจและรู้ว่าจะเกิดอะไรขึ้น</p>
  </div>

  <div class="fd3-tl">

    <div class="fd3-tl-item fdb-reveal" style="--tl:#66C5C5">
      <div class="fd3-tl-side"><div class="fd3-tl-num">01</div><div class="fd3-tl-line"></div></div>
      <div class="fd3-tl-card">
        <div class="fd3-tl-tag">เริ่มต้นวัน</div>
        <div class="fd3-tl-title">Orientation</div>
        <p class="fd3-tl-sub">ปฐมนิเทศกับ HR รู้จัก EXZY และทุกสิ่งที่ต้องเตรียมก่อนเริ่มงาน</p>
        <div class="fd3-tl-pills"><span>Overview EXZY</span><span>เอกสารและนโยบาย</span><span>ติดตั้ง Tools</span><span>Subscribe Calendar</span></div>
        <div class="fd3-tl-quote">"ถามได้ทุกอย่าง — Orientation คือเวลาของคุณที่จะเก็บข้อมูลให้ครบ" <em>— HR Team</em></div>
      </div>
    </div>

    <div class="fd3-tl-item fdb-reveal fdb-delay1" style="--tl:#004080">
      <div class="fd3-tl-side"><div class="fd3-tl-num">02</div><div class="fd3-tl-line"></div></div>
      <div class="fd3-tl-card">
        <div class="fd3-tl-tag">อัตลักษณ์การทำงาน</div>
        <div class="fd3-tl-title">Metropolis</div>
        <p class="fd3-tl-sub">Work Theme & CI ของ EXZY — กำหนดทิศทางภาพลักษณ์และแนวคิดในงานทุกชิ้น</p>
        <div class="fd3-tl-pills"><span>Work Theme ของบริษัท</span><span>ส่งผลต่องานทุกชิ้น</span><span>ทุกคนต้องรู้</span></div>
        <div class="fd3-tl-quote">"Metropolis คือวิธีที่ EXZY มองโลกและสร้างงาน — เรียนรู้ก่อนเริ่มทำชิ้นแรก"</div>
      </div>
    </div>

    <div class="fd3-tl-item fdb-reveal fdb-delay1" style="--tl:#2A8DA8">
      <div class="fd3-tl-side"><div class="fd3-tl-num">03</div><div class="fd3-tl-line"></div></div>
      <div class="fd3-tl-card">
        <div class="fd3-tl-tag">สร้างความสัมพันธ์</div>
        <div class="fd3-tl-title">Mentor & ทีม</div>
        <p class="fd3-tl-sub">พบ Mentor และสมาชิกในทีม — คนที่จะช่วยคุณตลอดช่วง Internship</p>
        <div class="fd3-tl-persons">
          <div class="fd3-tl-person" style="--pc:#66C5C5">
            <div class="fd3-tl-person-av"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
            <div><div class="fd3-tl-person-role">Mentor</div><div class="fd3-tl-person-tip">คนแรกที่ควรถามเมื่อติดปัญหา</div></div>
          </div>
          <div class="fd3-tl-person" style="--pc:#004080">
            <div class="fd3-tl-person-av"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></div>
            <div><div class="fd3-tl-person-role">Team Lead</div><div class="fd3-tl-person-tip">คุยได้เมื่อต้องการ Feedback ภาพรวม</div></div>
          </div>
          <div class="fd3-tl-person" style="--pc:#2A8DA8">
            <div class="fd3-tl-person-av"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <div><div class="fd3-tl-person-role">Teammates</div><div class="fd3-tl-person-tip">แนะนำตัวและจำชื่อให้ครบวันนี้</div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="fd3-tl-item fdb-reveal fdb-delay1" style="--tl:#F59E0B">
      <div class="fd3-tl-side"><div class="fd3-tl-num">04</div></div>
      <div class="fd3-tl-card">
        <div class="fd3-tl-tag">ก่อนกลับบ้าน</div>
        <div class="fd3-tl-title">กรอก Timesheet</div>
        <p class="fd3-tl-sub">บันทึกเวลาเข้า-ออกงานตามจริง กรอกย้อนหลังได้ แต่ต้องพิมพ์ส่งทุกสิ้นเดือน</p>
        <div class="fd3-tl-ts">
          <div class="fd3-tl-ts-row"><span class="fd3-tl-ts-k">เวลาเข้า / ออก</span><span class="fd3-tl-ts-v">กรอกตามจริงทุกวัน</span></div>
          <div class="fd3-tl-ts-row"><span class="fd3-tl-ts-k">กรอกย้อนหลัง</span><span class="fd3-tl-ts-v fd3-tl-ts-ok">ทำได้ตลอด</span></div>
          <div class="fd3-tl-ts-row fd3-tl-ts-warn"><span class="fd3-tl-ts-k">วันที่ 30–31 ทุกเดือน</span><span class="fd3-tl-ts-v">พิมพ์ส่ง HR — ห้ามลืม!</span></div>
        </div>
        <a href="#/resources/timesheet" class="fd3-tl-cta" data-link>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          ดูคู่มือ Timesheet ฉบับเต็ม
        </a>
      </div>
    </div>

  </div>
</section>

<!-- ══════════════ SECTION 3: Handbook — flows into footer ══════════════ -->
<section class="fd3-section fd3-sec-more" id="fd3-sec3">
  <div class="fd3-more-inner">
    <div class="fd3-more-head fdb-reveal">
      <h2 class="fd3-more-title">ยังมีอีกเยอะใน Handbook</h2>
      <p class="fd3-more-sub">หลังจากวันแรกผ่านไป ข้อมูลเหล่านี้จะมีประโยชน์ตลอดช่วงฝึกงาน</p>
    </div>

    <div class="fd3-more-entries fdb-reveal">
      <a href="#/getting-started/orientation" class="fd3-more-entry" data-link>
        <span class="fd3-more-entry-dot" style="background:#66C5C5"></span>
        <div class="fd3-more-entry-body">
          <div class="fd3-more-entry-title">Orientation & ออฟฟิศ</div>
          <div class="fd3-more-entry-desc">Orientation slides · Wi-Fi · ห้องประชุม</div>
        </div>
        <svg class="fd3-more-entry-arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/policy/code-of-conduct" class="fd3-more-entry" data-link>
        <span class="fd3-more-entry-dot" style="background:#004080"></span>
        <div class="fd3-more-entry-body">
          <div class="fd3-more-entry-title">Work Policy</div>
          <div class="fd3-more-entry-desc">Core Values · Dress Code · การลา</div>
        </div>
        <svg class="fd3-more-entry-arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/resources/timesheet" class="fd3-more-entry" data-link>
        <span class="fd3-more-entry-dot" style="background:#8B5CF6"></span>
        <div class="fd3-more-entry-body">
          <div class="fd3-more-entry-title">Resources & FAQs</div>
          <div class="fd3-more-entry-desc">Timesheet · คำถามพบบ่อย 18 ข้อ</div>
        </div>
        <svg class="fd3-more-entry-arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#/showcase/experiences" class="fd3-more-entry" data-link>
        <span class="fd3-more-entry-dot" style="background:#EC4899"></span>
        <div class="fd3-more-entry-body">
          <div class="fd3-more-entry-title">Showcase รุ่นพี่</div>
          <div class="fd3-more-entry-desc">ประสบการณ์และบทความจาก intern ที่ผ่านมา</div>
        </div>
        <svg class="fd3-more-entry-arr" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>

    <div class="fd3-more-home fdb-reveal">
      <a href="#/home" class="fd3-more-home-btn" data-link>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        เปิด Handbook ทั้งหมด
      </a>
    </div>
  </div>
</section>

</div>
`;
}
