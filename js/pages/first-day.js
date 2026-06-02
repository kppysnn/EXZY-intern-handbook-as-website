export function renderFirstDay() {
  return `
<div class="fdc-page">

<div class="fdc-hero">
  <!-- noise overlay -->
  <div class="fdc-hero-noise"></div>

  <!-- left column -->
  <div class="fdc-hero-left">
    <div class="fdc-hero-pill">
      <span class="fdc-hero-pip"></span>
      EXZY Internship &nbsp;·&nbsp; Day 1 Guide
    </div>
    <h1 class="fdc-hero-h1">
      ยินดีต้อนรับ<br>
      สู่ทีม <em>EXZY</em>
    </h1>
    <p class="fdc-hero-sub">อ่าน 5 นาที ทำ 2 tasks ให้เสร็จ — แค่นี้ก็พร้อมสำหรับวันแรกแล้ว</p>

    <div class="fdc-hero-chips">
      <div class="fdc-hero-chip fdc-hc-teal">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Subscribe Calendar
      </div>
      <div class="fdc-hero-chip fdc-hc-amber">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        กรอก Timesheet
      </div>
      <div class="fdc-hero-chip fdc-hc-blue">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        4 ช่วงสำคัญ
      </div>
    </div>
  </div>

  <!-- right column: compact day summary -->
  <div class="fdc-hero-right">
    <div class="fdc-day-card">
      <span class="fdc-day-card-kicker">Day 1</span>
      <strong>Start Guide</strong>
      <div class="fdc-day-card-list">
        <span>2 tasks</span>
        <span>4 topics</span>
        <span>5 min read</span>
      </div>
    </div>
  </div>
</div>

<div class="fdc-body">

  <!-- ───────────── SECTION 1: Tasks ───────────── -->
  <section class="fdc-band fdc-band-tasks">
    <div class="fdc-section-header fdb-reveal">
      <div class="fdc-section-badge">Section 01</div>
      <div>
        <div class="fdc-section-title">ต้องทำให้เสร็จวันนี้</div>
        <p class="fdc-section-copy">สองเรื่องนี้คือ action สำคัญหลัง Orientation ทำตามลำดับในการ์ดได้เลย</p>
      </div>
    </div>

    <div class="fdc-tgrid">
      <div class="fdc-tc fdb-reveal fdb-delay1" style="--ta:#66C5C5">
        <div class="fdc-tc-bar"></div>
        <div class="fdc-tc-inner">
          <div class="fdc-tc-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
          <div class="fdc-tc-lbl">Task 01</div>
          <div class="fdc-tc-name">Subscribe Google Calendar</div>
          <div class="fdc-tc-urg">ทำเลยตอนนี้</div>
          <p class="fdc-tc-desc">Subscribe ปฏิทิน EXZY เพื่อรับนัดหมายและกิจกรรมบริษัทโดยอัตโนมัติ ขอ Link ได้จาก HR</p>
          <div class="fdc-steps-flow">
            <div class="fdc-sf-step">
              <span class="fdc-sf-emoji">📧</span>
              <span class="fdc-sf-text">Receive invitation email from HR</span>
            </div>
            <svg class="fdc-sf-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            <div class="fdc-sf-step">
              <span class="fdc-sf-emoji">📅</span>
              <span class="fdc-sf-text">Press Open Calendar</span>
            </div>
            <svg class="fdc-sf-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            <div class="fdc-sf-step fdc-sf-step-final">
              <span class="fdc-sf-emoji">✅</span>
              <span class="fdc-sf-text">Press Subscribe for both calendars</span>
            </div>
          </div>
          <a href="#/home" class="fdc-tc-cta" data-link>ไปหน้า Homepage <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        </div>
      </div>
      <div class="fdc-tc fdb-reveal fdb-delay2" style="--ta:#F59E0B">
        <div class="fdc-tc-bar"></div>
        <div class="fdc-tc-inner">
          <div class="fdc-tc-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
          <div class="fdc-tc-lbl">Task 02</div>
          <div class="fdc-tc-name">กรอก Timesheet</div>
          <div class="fdc-tc-urg">ก่อนออกจากออฟฟิศ</div>
          <p class="fdc-tc-desc">กรอกเวลาเข้า-ออกงานตามจริงในระบบ Timesheet HR จะแนะนำวิธีใน Orientation</p>
          <div class="fdc-steps-flow">
            <div class="fdc-sf-step">
              <span class="fdc-sf-emoji">📧</span>
              <span class="fdc-sf-text">Receive Timesheet file from HR</span>
            </div>
            <svg class="fdc-sf-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            <div class="fdc-sf-step">
              <span class="fdc-sf-emoji">📝</span>
              <span class="fdc-sf-text">Open file and fill today</span>
            </div>
            <svg class="fdc-sf-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            <div class="fdc-sf-step fdc-sf-step-final">
              <span class="fdc-sf-emoji">✅</span>
              <span class="fdc-sf-text">Submit printed documents at month end</span>
            </div>
          </div>
          <a href="#/home" class="fdc-tc-cta" data-link>ไปหน้า Homepage <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        </div>
      </div>
    </div>
  </section>

  <!-- ───────────── SECTION 2: Timeline ───────────── -->
  <section class="fdc-band fdc-band-timeline">
  <div class="fdc-section-header fdb-reveal">
    <div class="fdc-section-badge">Section 02</div>
    <div>
      <div class="fdc-section-title">4 ช่วงสำคัญในวันแรก</div>
      <p class="fdc-section-copy">อ่านทีละหัวข้อเพื่อเห็นภาพว่าวันแรกจะไหลไปอย่างไร</p>
    </div>
  </div>

  <div class="fdc-timeline">
    <div class="fdc-tl-track"></div>

    <div class="fdc-tl-item fdb-reveal" style="--sc:#66C5C5">
      <div class="fdc-tl-dot"></div>
      <div class="fdc-step">
        <div class="fdc-step-bar"></div>
        <div class="fdc-step-head">
          <div class="fdc-step-n">01</div>
          <div class="fdc-step-meta">
            <div class="fdc-step-tag">เริ่มต้นวัน</div>
            <div class="fdc-step-title">Orientation</div>
            <p class="fdc-step-sub">ปฐมนิเทศกับ HR — รู้จัก EXZY และทุกสิ่งที่ต้องเตรียมก่อนเริ่มงาน</p>
          </div>
        </div>
        <div class="fdc-step-body" style="--sc:#66C5C5">
          <div class="fdc-bullets">
            <div class="fdc-bullet">
              <div class="fdc-bullet-icon" style="--bi:#66C5C5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              </div>
              <div class="fdc-bullet-text"><strong>Overview EXZY</strong> — โครงสร้างองค์กร วิสัยทัศน์ และ Core Values ที่ทีมยึดถือ</div>
            </div>
            <div class="fdc-bullet">
              <div class="fdc-bullet-icon" style="--bi:#66C5C5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h6M9 16h6M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div class="fdc-bullet-text"><strong>เอกสารและนโยบาย</strong> — รับเอกสารต่าง ๆ และทำความเข้าใจนโยบายสำคัญ</div>
            </div>
            <div class="fdc-bullet">
              <div class="fdc-bullet-icon" style="--bi:#66C5C5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <div class="fdc-bullet-text"><strong>ติดตั้ง Tools</strong> — ได้รับ Account ตั้งค่า Slack, Notion, Google Workspace</div>
            </div>
            <div class="fdc-bullet">
              <div class="fdc-bullet-icon" style="--bi:#66C5C5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div class="fdc-bullet-text"><strong>Subscribe Calendar</strong> — HR จะส่ง Link ให้ ทำตาม Task 01 ด้านบนได้เลย</div>
            </div>
          </div>
          <div class="fdc-quote" style="--sc:#66C5C5">
            "ถามได้ทุกอย่าง ไม่มีคำถามไหนโง่เกินไป — Orientation คือเวลาของคุณที่จะเก็บข้อมูลให้ครบ"
            <cite>— HR Team</cite>
          </div>
        </div>
      </div>
    </div>

    <div class="fdc-tl-item fdb-reveal" style="--sc:#818CF8">
      <div class="fdc-tl-dot"></div>
      <div class="fdc-step">
        <div class="fdc-step-bar"></div>
        <div class="fdc-step-head">
          <div class="fdc-step-n">02</div>
          <div class="fdc-step-meta">
            <div class="fdc-step-tag">อัตลักษณ์การทำงาน</div>
            <div class="fdc-step-title">Metropolis</div>
            <p class="fdc-step-sub">Work Theme & CI ของ EXZY — พนักงานทุกคนต้องรู้ เพราะส่งผลต่องานและแนวคิดทุกชิ้น</p>
          </div>
        </div>
        <div class="fdc-step-body" style="--sc:#818CF8">
          <div class="fdc-2col">
            <div class="fdc-bullets">
              <div class="fdc-bullet">
                <div class="fdc-bullet-icon" style="--bi:#818CF8">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/><line x1="12" y1="12" x2="12" y2="16"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>
                </div>
                <div class="fdc-bullet-text"><strong>Work Theme ของบริษัท</strong> — Metropolis คือ CI ที่กำหนดทิศทางภาพลักษณ์และแนวคิดการทำงานของ EXZY</div>
              </div>
              <div class="fdc-bullet">
                <div class="fdc-bullet-icon" style="--bi:#818CF8">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125c-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
                </div>
                <div class="fdc-bullet-text"><strong>ส่งผลต่องานทุกชิ้น</strong> — Design, Communication และ Output ต้องสอดคล้องกับ Theme นี้</div>
              </div>
              <div class="fdc-bullet">
                <div class="fdc-bullet-icon" style="--bi:#818CF8">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <div class="fdc-bullet-text"><strong>ทุกคนต้องรู้</strong> — ทำความเข้าใจ Metropolis ก่อนสร้างผลงานชิ้นแรก</div>
              </div>
            </div>
            <div class="fdc-dark" style="--sc:#818CF8">
              <div class="fdc-dark-topbar">
                <div class="fdc-dark-dot" style="background:#FF5F57"></div>
                <div class="fdc-dark-dot" style="background:#FFBD2E"></div>
                <div class="fdc-dark-dot" style="background:#28C840"></div>
                <span class="fdc-dark-ttl">metropolis · CI overview</span>
              </div>
              <div class="fdc-dark-row"><div class="fdc-dark-lbl">Visual</div><div class="fdc-dark-pb"><div class="fdc-dark-pf p80"></div></div></div>
              <div class="fdc-dark-row"><div class="fdc-dark-lbl">Tone</div><div class="fdc-dark-pb"><div class="fdc-dark-pf p55"></div></div></div>
              <div class="fdc-dark-row"><div class="fdc-dark-lbl">Concept</div><div class="fdc-dark-pb"><div class="fdc-dark-pf p20"></div></div></div>
              <div class="fdc-dark-foot">Status: <span class="fdc-dark-badge">เรียนรู้ก่อนเริ่มงาน</span></div>
            </div>
          </div>
          <div class="fdc-quote" style="--sc:#818CF8; margin-top:14px">
            "Metropolis ไม่ใช่แค่ชื่อ — มันคือวิธีที่ EXZY มองโลกและสร้างงาน ทำความเข้าใจให้ดีแล้วงานจะสอดคล้องกับทีมโดยอัตโนมัติ"
          </div>
        </div>
      </div>
    </div>

    <div class="fdc-tl-item fdb-reveal" style="--sc:#F472B6">
      <div class="fdc-tl-dot"></div>
      <div class="fdc-step">
        <div class="fdc-step-bar"></div>
        <div class="fdc-step-head">
          <div class="fdc-step-n">03</div>
          <div class="fdc-step-meta">
            <div class="fdc-step-tag">สร้างความสัมพันธ์</div>
            <div class="fdc-step-title">Mentor & ทีม</div>
            <p class="fdc-step-sub">พบ Mentor และสมาชิกในทีม — คนที่จะช่วยคุณตลอดช่วง Internship</p>
          </div>
        </div>
        <div class="fdc-step-body" style="--sc:#F472B6">
          <div class="fdc-persons">
            <div class="fdc-person" style="--sc:#F472B6">
              <div class="fdc-person-av">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              </div>
              <div class="fdc-person-role">Mentor</div>
              <div class="fdc-person-name">พี่เลี้ยงของคุณ</div>
              <div class="fdc-person-tip">คนแรกที่ควรถามเมื่อติดปัญหา ไม่ว่าเรื่องงานหรือออฟฟิศ</div>
            </div>
            <div class="fdc-person" style="--sc:#A78BFA">
              <div class="fdc-person-av">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
              </div>
              <div class="fdc-person-role">Team Lead</div>
              <div class="fdc-person-name">หัวหน้าทีม</div>
              <div class="fdc-person-tip">ดูแล Direction คุยได้เมื่อต้องการ Feedback ภาพรวม</div>
            </div>
            <div class="fdc-person" style="--sc:#34D399">
              <div class="fdc-person-av">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div class="fdc-person-role">Teammates</div>
              <div class="fdc-person-name">เพื่อนร่วมทีม</div>
              <div class="fdc-person-tip">แนะนำตัวและจำชื่อให้ครบวันนี้ — จะช่วยมากในระยะยาว</div>
            </div>
          </div>
          <div class="fdc-quote" style="--sc:#F472B6">
            "แนะนำตัวให้ครบ ถามชื่อและ Role ของทุกคน — การรู้จักทีมเร็วทำให้การทำงานราบรื่นขึ้นมาก"
          </div>
        </div>
      </div>
    </div>

    <div class="fdc-tl-item fdb-reveal" style="--sc:#F59E0B">
      <div class="fdc-tl-dot"></div>
      <div class="fdc-step">
        <div class="fdc-step-bar"></div>
        <div class="fdc-step-head">
          <div class="fdc-step-n">04</div>
          <div class="fdc-step-meta">
            <div class="fdc-step-tag">ก่อนกลับบ้าน</div>
            <div class="fdc-step-title">กรอก Timesheet</div>
            <p class="fdc-step-sub">บันทึกเวลาเข้า-ออกงานตามจริง — กรอกย้อนหลังและแก้ไขได้ แต่ต้องพิมพ์ส่งทุกสิ้นเดือน</p>
          </div>
        </div>
        <div class="fdc-step-body" style="--sc:#F59E0B">
          <div class="fdc-ts">
            <div class="fdc-ts-row" style="--sc:#F59E0B"><div class="fdc-ts-lbl">เวลาเข้างาน</div><div class="fdc-ts-val">กรอกเวลาตามที่เข้าจริง</div><div class="fdc-ts-tag">กรอกทุกวัน</div></div>
            <div class="fdc-ts-row" style="--sc:#F59E0B"><div class="fdc-ts-lbl">เวลาออกงาน</div><div class="fdc-ts-val">กรอกตามเวลาออกจริง</div><div class="fdc-ts-tag">กรอกทุกวัน</div></div>
            <div class="fdc-ts-row" style="--sc:#22C55E"><div class="fdc-ts-lbl">กรอกย้อนหลัง</div><div class="fdc-ts-val">กรอกย้อนหลังได้ และแก้ไขได้ตลอด</div><div class="fdc-ts-tag" style="background:#DCFCE7;color:#16A34A">ทำได้</div></div>
            <div class="fdc-ts-row warn"><div class="fdc-ts-lbl">สิ้นเดือน (30–31)</div><div class="fdc-ts-val">พิมพ์และส่ง Timesheet ให้ HR ทุกเดือน</div><div class="fdc-ts-tag">ห้ามลืม!</div></div>
          </div>
          <div class="fdc-step-cta">
            <a href="#/home" class="fdc-cta-btn" style="--sc:#F59E0B" data-link>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              ไปหน้า Homepage
            </a>
            <a href="#/home" class="fdc-cta-ghost" style="--sc:#F59E0B" data-link>กลับ Homepage</a>
          </div>
        </div>
      </div>
    </div>

  </div>
  </section>

  <!-- ───────────── SECTION 3: Discover More ───────────── -->
  <section class="fdc-band fdc-band-more">
  <div class="fdc-discover-wrap fdb-reveal">
    <div class="fdc-discover-cta-block">
      <div class="fdc-discover-intro-bg">MORE</div>
      <div class="fdc-discover-eyebrow">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        ยังมีข้อมูลอีกมากใน Handbook
      </div>
      <div class="fdc-discover-title">สำรวจ Handbook ต่อได้เลย</div>
      <p class="fdc-discover-sub">นโยบาย · Core Values · Wi-Fi · ห้องประชุม · FAQs · Resources · Dress Code — ครบทุกอย่างที่ต้องรู้ตลอดการฝึกงาน</p>
      <a href="#/home" class="fdc-discover-home-btn" data-link>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        เปิด Handbook ทั้งหมด
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
  </section>

</div>
</div>
`;
}
