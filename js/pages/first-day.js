// js/pages/first-day.js — renderFirstDay template
// Source of truth: this file. Build with: npm run build

export function renderFirstDay(data = {}) {
    const hrEmail = data.hr_email || "hr@exzyteam.com";
    return `
<div class="ex-day-page">

<section class="ex-day-hero ex-day-hero-v2" aria-label="Welcome to EXZY internship first day">
  <div class="ex-day-photo-frame" aria-label="บรรยากาศการเริ่มต้นฝึกงานที่ EXZY">
    <img src="./static/first-day-hero.png" alt="นักศึกษาฝึกงานนั่งประชุมร่วมกันในออฟฟิศ EXZY" />
  </div>
  <div class="ex-day-hero-inner">
    <div class="ex-day-hero-copy">
      <p class="ex-day-chapter"><span></span>EXZY Internship · First Day</p>
      <h1>Welcome to EXZY Internship วันแรกของคุณเริ่มจากหน้านี้</h1>
      <p>ใช้หน้านี้เป็นแผนที่วันแรก<br>รู้ว่าต้องทำอะไร เจอขั้นตอนไหนบ้าง<br>และเข้าใจภาพรวมของ EXZY</p>
      <a href="#ex-day-tasks" class="ex-day-cta">ดูสิ่งที่ต้องทำวันนี้</a>
    </div>
  </div>
</section>

<section class="ex-day-tasks" id="ex-day-tasks" aria-labelledby="ex-day-tasks-title">
  <div class="ex-section-head ex-section-head-left fdb-reveal">
    <h2 id="ex-day-tasks-title">สองอย่างที่ต้องเสร็จก่อนจบวัน</h2>
    <p>ไม่ต้องจำทั้ง handbook ตอนนี้ แค่ปิดสองชิ้นนี้ให้เรียบร้อยก่อนกลับบ้าน</p>
  </div>

  <div class="ex-task-stage">
    <article class="ex-task-slip ex-task-calendar fdb-reveal fdb-delay1">
      <div class="ex-task-visual" aria-hidden="true">
        <img src="./static/task-calendar-3d.png" alt="Google Calendar" />
      </div>
      <div class="ex-task-content">
        <span>Task 01</span>
        <h3>Subscribe Google Calendar</h3>
        <p>HR จะส่งคำเชิญทางอีเมล กดเปิด Calendar แล้ว subscribe ปฏิทินบริษัทเพื่อรับนัดหมายและกิจกรรมอัตโนมัติ</p>
        <div class="ex-mini-flow ex-mini-flow-emoji">
          <div class="ex-flow-step"><span>📧</span><b>รับ Email คำเชิญจาก HR</b></div>
          <i></i>
          <div class="ex-flow-step"><span>📅</span><b>กด Open Calendar</b></div>
          <i></i>
          <div class="ex-flow-step"><span>✅</span><b>กด Subscribe ทั้ง 2 ปฏิทิน</b></div>
        </div>
        <p class="ex-task-note">ถ้าไม่ได้รับอีเมล ติดต่อ <a href="mailto:${hrEmail}">${hrEmail}</a></p>
      </div>
    </article>

    <article class="ex-task-slip ex-task-timesheet fdb-reveal fdb-delay2">
      <div class="ex-task-visual" aria-hidden="true">
        <img src="./static/task-timesheet-3d.png" alt="Timesheet" />
      </div>
      <div class="ex-task-content">
        <span>Task 02</span>
        <h3>กรอก Timesheet</h3>
        <p>กรอกเวลาเข้าออกตามจริงในไฟล์ที่ HR ส่งให้ ทำทุกวัน และพิมพ์ส่ง HR เมื่อสิ้นเดือน</p>
        <div class="ex-mini-flow ex-mini-flow-emoji">
          <div class="ex-flow-step"><span>📂</span><b>รับไฟล์ Timesheet จาก HR</b></div>
          <i></i>
          <div class="ex-flow-step"><span>✏️</span><b>เปิดไฟล์และกรอกวันนี้</b></div>
          <i></i>
          <div class="ex-flow-step"><span>🖨️</span><b>พิมพ์ส่ง HR สิ้นเดือน</b></div>
        </div>
        <a href="#/resources/timesheet" class="ex-task-btn" data-link>ดูคู่มือ Timesheet →</a>
      </div>
    </article>
  </div>
</section>

<section class="ex-day-road" aria-labelledby="ex-day-road-title">
  <div class="ex-section-head fdb-reveal">
    <h2 id="ex-day-road-title">เส้นทางของวันแรก</h2>
    <p>ทุกคนอาจได้เวลานัดต่างกัน แต่สิ่งที่ต้องเจอเหมือนกันคือ 4 step นี้</p>
  </div>

  <div class="ex-info-roadmap" aria-label="เส้นทางของวันแรก">
    <svg class="ex-info-path" viewBox="0 0 1120 600" preserveAspectRatio="none" aria-hidden="true">
      <path d="M80 330 C180 330,310 130,425 130 C540 130,620 330,728 330 C836 330,900 130,976 130" fill="none" stroke="#D6EEF2" stroke-width="46" stroke-linecap="round"/>
      <path d="M80 330 C180 330,310 130,425 130 C540 130,620 330,728 330 C836 330,900 130,976 130" fill="none" stroke="#66C5C5" stroke-width="5" stroke-linecap="round" stroke-dasharray="13 18"/>
    </svg>

    <article class="ex-info-stop ex-info-stop-1 fdb-reveal" style="--stop:#66C5C5">
      <span class="ex-info-pin">01</span>
      <h3>Orientation</h3>
      <p>รู้จัก EXZY ภาพรวมบริษัท เครื่องมือที่ต้องใช้ และเรื่องที่ควรถาม HR ให้ครบตั้งแต่ต้น</p>
      <div class="ex-road-mini">
        <span>🏢<b>EXZY</b></span>
        <span>💻<b>Tools</b></span>
        <span>📅<b>Calendar</b></span>
      </div>
    </article>

    <article class="ex-info-stop ex-info-stop-2 fdb-reveal fdb-delay1" style="--stop:#004080">
      <span class="ex-info-pin">02</span>
      <h3>Metropolis &amp; CI</h3>
      <p>เข้าใจภาพรวมที่บอกว่า "นี่คือ EXZY" ตั้งแต่โลโก้ ฟอนต์ สี layout การแต่งตัว ผู้คน และสถานที่</p>
      <div class="ex-road-mini">
        <span>✦<b>Logo</b></span>
        <span>🎨<b>Color</b></span>
        <span>👥<b>People</b></span>
      </div>
    </article>

    <article class="ex-info-stop ex-info-stop-3 fdb-reveal fdb-delay1" style="--stop:#2A8DA8">
      <span class="ex-info-pin">03</span>
      <h3>Mentor &amp; Team</h3>
      <p>เจอคนที่จะช่วยคุณระหว่าง internship รู้ว่าเรื่องไหนถาม mentor เรื่องไหนถาม team lead หรือเพื่อนร่วมทีม</p>
      <div class="ex-road-mini">
        <span>🧭<b>Mentor</b></span>
        <span>🤝<b>Team</b></span>
        <span>💬<b>Ask</b></span>
      </div>
    </article>

    <article class="ex-info-stop ex-info-stop-4 fdb-reveal fdb-delay2" style="--stop:#004080">
      <span class="ex-info-pin">04</span>
      <h3>Timesheet</h3>
      <p>ปิดท้ายด้วยการกรอกเวลาเข้าออกตามจริง เพื่อให้ HR ตรวจและใช้ส่งเอกสารสิ้นเดือนได้ถูกต้อง</p>
      <a href="#/resources/timesheet" class="ex-road-btn" data-link>เปิดหน้า Timesheet →</a>
    </article>
  </div>
</section>

<section class="ex-day-more" aria-labelledby="ex-day-more-title">
  <div class="ex-day-more-inner fdb-reveal">

    <div class="ex-more-headline">
      <p class="ex-more-kicker"><span></span>Intern Handbook Map</p>
      <h2 id="ex-day-more-title">วันแรกคือบทแรก<br>ส่วน Home คือแผนที่ทั้งเล่ม</h2>
      <p>Handbook นี้มีข้อมูลครบสำหรับทั้ง internship — ออฟฟิศ นโยบาย คนในทีม เครื่องมือ และคำถามที่มักเจอ</p>
      <a href="#/" class="ex-more-home" data-link>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        กลับไปหน้า Home
      </a>
    </div>

    <div class="ex-more-chapters">
      <a href="#/getting-started/orientation" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">01</span>
        <span class="ex-more-ch-ico">🏢</span>
        <b>Orientation &amp; Office</b>
        <small>Wi-Fi, Meeting rooms, Orientation slides</small>
      </a>
      <a href="#/employee/org-chart" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">02</span>
        <span class="ex-more-ch-ico">👥</span>
        <b>บริษัทและทีม</b>
        <small>โครงสร้างองค์กร, Employee Contact</small>
      </a>
      <a href="#/policy/code-of-conduct" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">03</span>
        <span class="ex-more-ch-ico">📋</span>
        <b>Work Policy</b>
        <small>Core Values, Dress Code, การลา</small>
      </a>
      <a href="#/resources/faqs" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">04</span>
        <span class="ex-more-ch-ico">❔</span>
        <b>FAQs &amp; Resources</b>
        <small>Timesheet, คำถามที่มักเจอ</small>
      </a>
    </div>

  </div>
</section>

</div>
`;
  }
