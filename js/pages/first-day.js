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
      <h1 class="ex-day-hero-h1">
        <span class="ex-day-h1-welcome">Welcome to</span>
        <span class="ex-day-h1-brand">EXZY Internship</span>
        <span class="ex-day-h1-sub">วันแรกของการฝึกงาน</span>
      </h1>
      <p class="ex-day-hero-lead">ก่อนเริ่มงานวันนี้ เช็กงานที่ต้องทำ คนที่ต้องเจอ และลิงก์ที่ต้องใช้ต่อ</p>
      <a href="#ex-day-tasks" class="ex-day-cta">ดูสิ่งที่ต้องทำวันนี้</a>
    </div>
  </div>
</section>

<section class="ex-day-tasks" id="ex-day-tasks" aria-labelledby="ex-day-tasks-title">
  <div class="ex-section-head ex-section-head-center fdb-reveal">
    <h2 id="ex-day-tasks-title">เริ่มต้นด้วย 2 เรื่องสำคัญ</h2>
    <p>อย่าลืม Subscribe Calendar เพื่อติดตามวันหยุดของบริษัท และกรอก Timesheet เพื่อลงเวลาเข้าออกงานในระหว่างการฝึกงาน</p>
  </div>

  <div class="ex-task-stage">
    <article class="ex-task-slip ex-task-calendar fdb-reveal fdb-delay1">
      <div class="ex-task-visual" aria-hidden="true">
        <img src="./static/task-calendar-3d.png" alt="Google Calendar" />
      </div>
      <div class="ex-task-content">
        <span class="ex-task-badge">Task 01</span>
        <h3>Subscribe Google Calendar</h3>
        <p>HR จะส่งคำเชิญทางอีเมล กดเปิด Calendar แล้ว subscribe ปฏิทินบริษัทเพื่อดูวันหยุดประจำปีของบริษัท</p>
        <div class="ex-mini-flow ex-mini-flow-emoji">
          <div class="ex-flow-step"><span>📧</span><b>รับ Email คำเชิญจาก HR</b></div>
          <i></i>
          <div class="ex-flow-step"><span>📅</span><b>กด Open Calendar</b></div>
          <i></i>
          <div class="ex-flow-step"><span>✅</span><b>กด Subscribe ปฏิทิน</b></div>
        </div>
        <p class="ex-task-note">หากไม่ได้รับ Calendar invitation ติดต่อ <a href="mailto:${hrEmail}">${hrEmail}</a></p>
      </div>
    </article>

    <article class="ex-task-slip ex-task-timesheet fdb-reveal fdb-delay2">
      <div class="ex-task-visual" aria-hidden="true">
        <img src="./static/task-timesheet-3d.png" alt="Timesheet" />
      </div>
      <div class="ex-task-content">
        <span class="ex-task-badge">Task 02</span>
        <h3>กรอก Timesheet</h3>
        <p>กรอกเวลาเข้าออกงานตามจริงในไฟล์ที่ HR ส่งให้ ทำทุกวัน และพิมพ์ส่ง HR เป็นกระดาษตอนสิ้นเดือน (วันที่ 30-31)</p>
        <div class="ex-mini-flow ex-mini-flow-emoji">
          <div class="ex-flow-step"><span>📂</span><b>รับไฟล์ Timesheet จาก HR</b></div>
          <i></i>
          <div class="ex-flow-step"><span>✏️</span><b>เปิดไฟล์และเริ่มกรอกข้อมูล</b></div>
          <i></i>
          <div class="ex-flow-step"><span>🖨️</span><b>พิมพ์ส่ง HR สิ้นเดือน <br>(วันที่ 30-31)</b></div>
        </div>
        <a href="#/tasks/timesheet" class="ex-task-btn" data-link>ดูคู่มือ Timesheet →</a>
      </div>
    </article>
  </div>
</section>

<section class="ex-day-road" aria-labelledby="ex-day-road-title">
  <div class="ex-section-head ex-section-head-center fdb-reveal">
    <h2 id="ex-day-road-title">วันแรกต้องเจอกับอะไรบ้าง</h2>
    <p>4 steps หลัก ที่ intern จะได้เจอในวันแรก ตั้งแต่การทำความรู้จัก EXZY ไปจนถึงการเริ่มทำงาน</p>
  </div>

  <div class="ex-info-roadmap" aria-label="เส้นทางของวันแรก">
    <svg class="ex-info-path" viewBox="0 0 1120 600" preserveAspectRatio="none" aria-hidden="true">
      <path d="M60 320 C160 320,250 110,375 110 C500 110,600 320,720 320 C840 320,920 110,1060 110" fill="none" stroke="#D0D6DF" stroke-width="46" stroke-linecap="round"/>
      <path d="M60 320 C160 320,250 110,375 110 C500 110,600 320,720 320 C840 320,920 110,1060 110" fill="none" stroke="#66C5C5" stroke-width="5" stroke-linecap="round" stroke-dasharray="13 18"/>
    </svg>

    <article class="ex-info-stop ex-info-stop-1 fdb-reveal" style="--stop:#66C5C5">
      <span class="ex-info-pin">01</span>
      <h3>Orientation</h3>
      <p>ทำความรู้จัก EXZY ภาพรวมบริษัท นโยบาย การฝึกงาน และหากมีเรื่อง<br>ที่อยากถาม สามารถถามพี่ HR ได้เลย!</p>
      <div class="ex-road-mini">
        <span>🏢<b>EXZY</b></span>
        <span>💻<b>Tools</b></span>
        <span>📅<b>Calendar</b></span>
      </div>
    </article>

    <article class="ex-info-stop ex-info-stop-2 fdb-reveal fdb-delay1" style="--stop:#004081">
      <span class="ex-info-pin">02</span>
      <h3>Metropolis</h3>
      <p>รู้จักตัวตนของ EXZY ผ่านโลโก้ สี ฟอนต์ สไตล์งาน และบรรยากาศออฟฟิศ</p>
      <div class="ex-road-mini">
        <span><img src="./exzy-square-icon.png" style="width:20px;height:20px;object-fit:contain;border-radius:4px;" alt="EXZY"><b>Logo</b></span>
        <span>🎨<b>Color</b></span>
        <span>👥<b>People</b></span>
      </div>
    </article>

    <article class="ex-info-stop ex-info-stop-3 fdb-reveal fdb-delay1" style="--stop:#586782">
      <span class="ex-info-pin">03</span>
      <h3>Mentor &amp; Team</h3>
      <p>พูดคุยกับพี่เลี้ยงที่จะดูแลคุณ<br>ตลอดการฝึกงาน ทำความรู้จักกับสมาชิกในทีมที่ต้องร่วมงานด้วย <br>และพูดคุยถึงความต้องการและ<br>ความคาดหวังในการฝึกงาน</p>
      <div class="ex-road-mini">
        <span>🧭<b>Mentor</b></span>
        <span>🤝<b>Team</b></span>
        <span>💬<b>Ask</b></span>
      </div>
    </article>

    <article class="ex-info-stop ex-info-stop-4 fdb-reveal fdb-delay2" style="--stop:#004081">
      <span class="ex-info-pin">04</span>
      <h3>Timesheet</h3>
      <p>เริ่มกรอกเวลาเข้าออกตามจริง <br>เพื่อเก็บข้อมูลการเข้างานเพื่อใช้<br>ส่งเอกสารให้กับ hr ทุกสิ้นเดือน<br>ได้ถูกต้อง</p>
      <a href="#/tasks/timesheet" class="ex-road-btn" data-link>ดูวิธีกรอก Timesheet →</a>
    </article>
  </div>
</section>

<section class="ex-day-more" aria-labelledby="ex-day-more-title">
  <div class="ex-day-more-inner fdb-reveal">

    <div class="ex-more-headline">
      <p class="ex-more-kicker"><span></span>Intern Handbook Map</p>
      <h2 id="ex-day-more-title">อ่านต่อใน <br>Intern Handbook</h2>
      <p>เรื่องที่ intern ควรรู้และต้องใช้ตลอดการฝึกงาน ตั้งแต่นโยบาย ออฟฟิศ คนในทีม และข้อมูลที่เกี่ยวข้อง</p>
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
      <a href="#/tasks/hr-bd-project" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">04</span>
        <span class="ex-more-ch-ico">📝</span>
        <b>Intern Tasks</b>
        <small>Timesheet, HR / BD Project</small>
      </a>
      <a href="#/resources/faqs" data-link class="ex-more-ch">
        <span class="ex-more-ch-num">05</span>
        <span class="ex-more-ch-ico">❔</span>
        <b>FAQs &amp; Resources</b>
        <small>คำถามที่มักเจอระหว่างฝึกงาน</small>
      </a>
    </div>

  </div>
</section>

</div>
`;
  }
