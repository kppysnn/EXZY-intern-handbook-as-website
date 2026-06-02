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
        <a href="#fd3-sec1" class="fd9-btn">
          เริ่มต้นเลย
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <div class="fd9-pill-row">
          <span class="fd9-pill">📋 2 Tasks</span>
          <span class="fd9-pill">⏱ 5 นาที</span>
        </div>
      </div>
    </div>

    <!-- RIGHT: CI vivid panel content -->
    <div class="fd9-right">

      <!-- large day number -->
      <div class="fd9-bignum" aria-hidden="true">01</div>

      <!-- task cards stacked -->
      <div class="fd9-cards">

        <div class="fd9-card fd9-card-1">
          <div class="fd9-card-ico">📅</div>
          <div class="fd9-card-info">
            <div class="fd9-card-tag">Task 01</div>
            <div class="fd9-card-name">Subscribe Google Calendar</div>
            <div class="fd9-card-flow">รับ Email → Open Calendar → Subscribe</div>
          </div>
          <div class="fd9-card-done">✓</div>
        </div>

        <div class="fd9-card fd9-card-2">
          <div class="fd9-card-ico">📝</div>
          <div class="fd9-card-info">
            <div class="fd9-card-tag">Task 02</div>
            <div class="fd9-card-name">กรอก Timesheet</div>
            <div class="fd9-card-flow">รับไฟล์ → กรอกวันนี้ → ส่งสิ้นเดือน</div>
          </div>
          <div class="fd9-card-done fd9-done-amber">✓</div>
        </div>

      </div>

      <!-- welcome badge -->
      <div class="fd9-welcome">
        <span class="fd9-welcome-emoji">👋</span>
        <span>ยินดีต้อนรับ intern ใหม่!</span>
      </div>

    </div>
  </div>

  <!-- bottom wave -->
  <div class="fd9-wave" aria-hidden="true">
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff"/>
    </svg>
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
        <a href="#fd3-sec1" class="fd8-cta-main">
          เริ่มต้นเลย
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#fd3-sec2" class="fd8-cta-ghost">ดูตารางวันแรก</a>
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
    <div class="fd3-sec-tag">Section 01</div>
    <h2 class="fd3-sec-title">ต้องทำให้เสร็จวันนี้</h2>
    <p class="fd3-sec-sub">หลัง Orientation เสร็จ — ทำ 2 tasks นี้ให้ครบก่อนกลับบ้าน</p>
  </div>

  <div class="fd3-task-grid">

    <!-- Task 01: Calendar -->
    <div class="fd3-task-card fdb-reveal fdb-delay1">
      <div class="fd3-task-accent" style="background:#66C5C5"></div>
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
            <div class="fd3-flow-icon">📧</div>
            <div class="fd3-flow-text">รับ Email<br>คำเชิญจาก HR</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step">
            <div class="fd3-flow-icon">📅</div>
            <div class="fd3-flow-text">กด<br>Open Calendar</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step fd3-flow-step-last">
            <div class="fd3-flow-icon">✅</div>
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
      <div class="fd3-task-accent" style="background:#F59E0B"></div>
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
            <div class="fd3-flow-icon">📂</div>
            <div class="fd3-flow-text">รับไฟล์<br>Timesheet จาก HR</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step">
            <div class="fd3-flow-icon">✏️</div>
            <div class="fd3-flow-text">เปิดไฟล์<br>กรอกวันนี้</div>
          </div>
          <svg class="fd3-flow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div class="fd3-flow-step fd3-flow-step-last">
            <div class="fd3-flow-icon">🖨️</div>
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
    <div class="fd3-sec-tag fd3-sec-tag-alt">Section 02</div>
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

    <div class="fd3-tl-item fdb-reveal fdb-delay1" style="--tl:#818CF8">
      <div class="fd3-tl-side"><div class="fd3-tl-num">02</div><div class="fd3-tl-line"></div></div>
      <div class="fd3-tl-card">
        <div class="fd3-tl-tag">อัตลักษณ์การทำงาน</div>
        <div class="fd3-tl-title">Metropolis</div>
        <p class="fd3-tl-sub">Work Theme & CI ของ EXZY — กำหนดทิศทางภาพลักษณ์และแนวคิดในงานทุกชิ้น</p>
        <div class="fd3-tl-pills"><span>Work Theme ของบริษัท</span><span>ส่งผลต่องานทุกชิ้น</span><span>ทุกคนต้องรู้</span></div>
        <div class="fd3-tl-quote">"Metropolis คือวิธีที่ EXZY มองโลกและสร้างงาน — เรียนรู้ก่อนเริ่มทำชิ้นแรก"</div>
      </div>
    </div>

    <div class="fd3-tl-item fdb-reveal fdb-delay1" style="--tl:#F472B6">
      <div class="fd3-tl-side"><div class="fd3-tl-num">03</div><div class="fd3-tl-line"></div></div>
      <div class="fd3-tl-card">
        <div class="fd3-tl-tag">สร้างความสัมพันธ์</div>
        <div class="fd3-tl-title">Mentor & ทีม</div>
        <p class="fd3-tl-sub">พบ Mentor และสมาชิกในทีม — คนที่จะช่วยคุณตลอดช่วง Internship</p>
        <div class="fd3-tl-persons">
          <div class="fd3-tl-person" style="--pc:#F472B6">
            <div class="fd3-tl-person-av"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
            <div><div class="fd3-tl-person-role">Mentor</div><div class="fd3-tl-person-tip">คนแรกที่ควรถามเมื่อติดปัญหา</div></div>
          </div>
          <div class="fd3-tl-person" style="--pc:#A78BFA">
            <div class="fd3-tl-person-av"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></div>
            <div><div class="fd3-tl-person-role">Team Lead</div><div class="fd3-tl-person-tip">คุยได้เมื่อต้องการ Feedback ภาพรวม</div></div>
          </div>
          <div class="fd3-tl-person" style="--pc:#34D399">
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
      <div class="fd3-sec-tag fd3-sec-tag-light">Section 03</div>
      <h2 class="fd3-more-title">ยังมีอีกเยอะใน Handbook</h2>
      <p class="fd3-more-sub">ข้อมูลทุกอย่างที่ต้องรู้ตลอดการฝึกงาน รวบรวมไว้ครบในที่เดียว</p>
    </div>

    <div class="fd3-more-grid fdb-reveal">
      <a href="#/getting-started/orientation" class="fd3-more-card" data-link style="--mc:#66C5C5">
        <div class="fd3-more-card-num">02</div>
        <div class="fd3-more-card-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
        <div class="fd3-more-card-title">Orientation & ออฟฟิศ</div>
        <div class="fd3-more-card-items"><span>Slides</span><span>Wi-Fi</span><span>ห้องประชุม</span></div>
        <div class="fd3-more-card-cta">ดูเลย →</div>
      </a>
      <a href="#/policy/code-of-conduct" class="fd3-more-card" data-link style="--mc:#3B82F6">
        <div class="fd3-more-card-num">04</div>
        <div class="fd3-more-card-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="fd3-more-card-title">Work Policy</div>
        <div class="fd3-more-card-items"><span>Core Values</span><span>Dress Code</span><span>การลา</span></div>
        <div class="fd3-more-card-cta">ดูเลย →</div>
      </a>
      <a href="#/resources/faqs" class="fd3-more-card" data-link style="--mc:#8B5CF6">
        <div class="fd3-more-card-num">05</div>
        <div class="fd3-more-card-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
        <div class="fd3-more-card-title">Resources & FAQs</div>
        <div class="fd3-more-card-items"><span>Timesheet</span><span>FAQs 15+ ข้อ</span></div>
        <div class="fd3-more-card-cta">ดูเลย →</div>
      </a>
      <a href="#/showcase/experiences" class="fd3-more-card" data-link style="--mc:#EC4899">
        <div class="fd3-more-card-num">06</div>
        <div class="fd3-more-card-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
        <div class="fd3-more-card-title">Showcase รุ่นพี่</div>
        <div class="fd3-more-card-items"><span>Experiences</span><span>Blog</span></div>
        <div class="fd3-more-card-cta">ดูเลย →</div>
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
