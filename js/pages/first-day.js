export function renderFirstDay(data = {}) {
  const hrEmail = data.hr_email || 'hr@exzyteam.com';

  return `
<div class="ex-day-page">

<section class="ex-day-hero ex-day-hero-v2" aria-label="Welcome to EXZY internship first day">
  <div class="ex-day-hero-inner">
    <div class="ex-day-hero-copy">
      <p class="ex-day-chapter"><span></span>EXZY Internship · First Day</p>
      <h1>Welcome to EXZY Internship วันแรกของคุณเริ่มจากหน้านี้</h1>
      <p>ใช้หน้านี้เป็นแผนที่วันแรก: รู้ว่าต้องทำอะไรให้เสร็จ เจอขั้นตอนไหนบ้าง และเข้าใจว่าอะไรคือภาพรวมของ EXZY ก่อนเริ่มทำงานจริง</p>
      <a href="#ex-day-tasks" class="ex-day-cta">ดูสิ่งที่ต้องทำวันนี้</a>
    </div>

    <div class="ex-day-smart-scene" aria-hidden="true">
      <svg viewBox="0 0 620 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="smartDesk" x1="0" y1="0" x2="1" y2="1">
            <stop stop-color="#FFFFFF"/>
            <stop offset="1" stop-color="#DFF4F6"/>
          </linearGradient>
          <linearGradient id="smartScreen" x1="0" y1="0" x2="1" y2="1">
            <stop stop-color="#004080"/>
            <stop offset="1" stop-color="#06213E"/>
          </linearGradient>
          <linearGradient id="smartTeal" x1="0" y1="0" x2="1" y2="1">
            <stop stop-color="#66C5C5"/>
            <stop offset="1" stop-color="#2A8DA8"/>
          </linearGradient>
          <filter id="smartShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#004080" flood-opacity=".14"/>
          </filter>
        </defs>
        <path d="M74 112C128 31 276 19 401 58c126 39 208 125 205 236-3 112-95 202-222 219-126 17-272-39-342-137C-27 279 20 193 74 112Z" fill="#E7F7F9"/>
        <path d="M70 344c100-46 198-51 299-28 77 18 151 17 230-20l27 75c-88 70-211 92-332 70-86-15-166-47-247-90l23-7Z" fill="#CFEFF2"/>

        <g filter="url(#smartShadow)">
          <path d="M70 315 492 258l52 114-433 68-41-125Z" fill="url(#smartDesk)"/>
        </g>

        <g transform="rotate(-4 305 230)" filter="url(#smartShadow)">
          <rect x="191" y="124" width="254" height="174" rx="18" fill="#D5E4EC"/>
          <rect x="206" y="140" width="224" height="132" rx="12" fill="url(#smartScreen)"/>
          <path d="M232 180h82M232 210h132M232 239h92" stroke="#66C5C5" stroke-width="9" stroke-linecap="round" opacity=".46"/>
          <circle cx="381" cy="225" r="30" fill="#66C5C5" opacity=".18"/>
          <rect x="251" y="306" width="151" height="22" rx="9" fill="#A9BECC"/>
        </g>

        <g transform="rotate(7 139 296)" filter="url(#smartShadow)">
          <rect x="60" y="210" width="150" height="166" rx="15" fill="#FFFFFF"/>
          <rect x="60" y="210" width="150" height="43" rx="15" fill="url(#smartTeal)"/>
          <path d="M84 283h86M84 314h61M84 344h75" stroke="#004080" stroke-width="8" stroke-linecap="round" opacity=".13"/>
          <rect x="126" y="307" width="28" height="28" rx="8" fill="#004080" opacity=".70"/>
        </g>

        <g transform="rotate(-8 475 257)" filter="url(#smartShadow)">
          <rect x="408" y="170" width="128" height="176" rx="18" fill="#FFFFFF"/>
          <rect x="432" y="199" width="80" height="56" rx="16" fill="#66C5C5" opacity=".28"/>
          <path d="M430 286h77M430 311h52" stroke="#004080" stroke-width="7" stroke-linecap="round" opacity=".16"/>
          <circle cx="510" cy="313" r="14" fill="#004080" opacity=".82"/>
        </g>

        <g transform="rotate(8 455 111)" filter="url(#smartShadow)">
          <rect x="368" y="64" width="166" height="92" rx="17" fill="#FFFFFF"/>
          <circle cx="409" cy="110" r="17" fill="#66C5C5"/>
          <circle cx="448" cy="110" r="18" fill="#004080"/>
          <circle cx="489" cy="110" r="14" fill="#707070"/>
          <path d="M396 84h81" stroke="#DDE8EF" stroke-width="8" stroke-linecap="round"/>
        </g>

        <path d="M99 242c91-65 213-88 324-44 56 22 92 55 127 91" fill="none" stroke="#66C5C5" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 14" opacity=".72"/>
        <circle cx="99" cy="242" r="8" fill="#66C5C5"/>
        <circle cx="423" cy="198" r="8" fill="#004080"/>
        <circle cx="550" cy="289" r="8" fill="#66C5C5"/>
      </svg>
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
        <svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="22" y="20" width="184" height="184" rx="18" fill="#FFFFFF"/>
          <rect x="22" y="20" width="184" height="52" rx="18" fill="#66C5C5"/>
          <path d="M22 56h184" stroke="#66C5C5" stroke-width="20"/>
          <path d="M59 105h27M105 105h27M151 105h27M59 144h27M105 144h27M151 144h27" stroke="#004080" stroke-width="16" stroke-linecap="round" opacity=".12"/>
          <rect x="105" y="136" width="27" height="27" rx="8" fill="#004080" opacity=".76"/>
          <path d="M70 45h90" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".72"/>
          <path d="M51 187h93" stroke="#66C5C5" stroke-width="9" stroke-linecap="round" opacity=".72"/>
        </svg>
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
        <svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 18h117l45 45v156H48V18Z" fill="#FFFFFF"/>
          <path d="M165 18v45h45" fill="#DCE8EE"/>
          <rect x="69" y="52" width="82" height="12" rx="6" fill="#004080" opacity=".18"/>
          <rect x="69" y="88" width="116" height="9" rx="4" fill="#66C5C5" opacity=".62"/>
          <path d="M69 121h132M69 148h132M69 175h94" stroke="#004080" stroke-width="9" stroke-linecap="round" opacity=".12"/>
          <circle cx="178" cy="175" r="22" fill="#66C5C5" opacity=".28"/>
          <path d="M166 176h24" stroke="#004080" stroke-width="6" stroke-linecap="round" opacity=".28"/>
        </svg>
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
        <a href="#/resources/timesheet" class="ex-inline-link" data-link>ดูคู่มือ Timesheet</a>
      </div>
    </article>
  </div>
</section>

<section class="ex-day-road" aria-labelledby="ex-day-road-title">
  <div class="ex-section-head fdb-reveal">
    <h2 id="ex-day-road-title">เส้นทางของวันแรก</h2>
    <p>ทุกคนอาจได้เวลานัดต่างกัน แต่สิ่งที่ต้องเจอเหมือนกันคือ 4 step นี้</p>
  </div>

  <div class="ex-info-roadmap" aria-label="First day infographic roadmap">
    <svg class="ex-info-path" viewBox="0 0 1120 470" preserveAspectRatio="none" aria-hidden="true">
      <path d="M64 354C174 210 218 84 332 126c68 28 98 126 188 146c80 18 142-24 192-90c42-52 90-118 146-118" fill="none" stroke="#D6EEF2" stroke-width="48" stroke-linecap="round"/>
      <path d="M64 354C174 210 218 84 332 126c68 28 98 126 188 146c80 18 142-24 192-90c42-52 90-118 146-118" fill="none" stroke="#66C5C5" stroke-width="6" stroke-linecap="round" stroke-dasharray="12 16"/>
    </svg>

    <article class="ex-info-stop ex-info-stop-1 fdb-reveal" style="--stop:#66C5C5">
      <span class="ex-info-pin">01</span>
      <span class="ex-info-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 21V7l8-4 8 4v14"/><path d="M8 21v-8h8v8"/><path d="M8 9h.01M12 9h.01M16 9h.01"/></svg>
      </span>
      <small>Step 01</small>
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
      <span class="ex-info-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="7" cy="7" r="3" fill="currentColor" opacity=".28"/><circle cx="15" cy="7" r="3" fill="currentColor" opacity=".58"/><circle cx="11" cy="15" r="5"/><path d="M4 20h16"/></svg>
      </span>
      <small>Step 02</small>
        <h3>Metropolis & CI</h3>
        <p>เข้าใจภาพรวมที่บอกว่า “นี่คือ EXZY” ตั้งแต่โลโก้ ฟอนต์ สี layout การแต่งตัว ผู้คน และสถานที่</p>
        <div class="ex-road-mini">
          <span>✦<b>Logo</b></span>
          <span>🎨<b>Color</b></span>
          <span>👥<b>People</b></span>
        </div>
    </article>

    <article class="ex-info-stop ex-info-stop-3 fdb-reveal fdb-delay1" style="--stop:#2A8DA8">
      <span class="ex-info-pin">03</span>
      <span class="ex-info-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="10" r="2.8"/><path d="M3.5 20c.8-4 3.2-6 6.5-6s5.7 2 6.5 6"/><path d="M15 15c2.8.2 4.8 1.8 5.5 5"/></svg>
      </span>
      <small>Step 03</small>
        <h3>Mentor & Team</h3>
        <p>เจอคนที่จะช่วยคุณระหว่าง internship รู้ว่าเรื่องไหนถาม mentor เรื่องไหนถาม team lead หรือเพื่อนร่วมทีม</p>
        <div class="ex-road-mini">
          <span>🧭<b>Mentor</b></span>
          <span>🤝<b>Team</b></span>
          <span>💬<b>Ask</b></span>
        </div>
    </article>

    <article class="ex-info-stop ex-info-stop-4 fdb-reveal fdb-delay2" style="--stop:#004080">
      <span class="ex-info-pin">04</span>
      <span class="ex-info-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h9l3 3v18H6z"/><path d="M15 3v6h6"/><path d="M9 13h7M9 17h5"/></svg>
      </span>
      <small>Step 04</small>
      <h3>Timesheet</h3>
      <p>ปิดท้ายด้วยการกรอกเวลาเข้าออกตามจริง เพื่อให้ HR ตรวจและใช้ส่งเอกสารสิ้นเดือนได้ถูกต้อง</p>
      <a href="#/resources/timesheet" class="ex-inline-link" data-link>เปิดหน้า Timesheet</a>
    </article>
  </div>
</section>

<section class="ex-day-more" aria-labelledby="ex-day-more-title">
  <div class="ex-day-more-inner fdb-reveal">
    <div class="ex-more-copy">
      <p class="ex-more-kicker">Intern Handbook Navigation</p>
      <h2 id="ex-day-more-title">หน้า Home คือบ้านหลักของ handbook นี้</h2>
      <p>เริ่มที่วันแรก แล้วกลับไปหน้า Home เมื่อไหร่ก็ยังเห็นทุกบท ทุกหมวดที่ช่วยให้ฝึกงานราบรื่น: office, policy, tools, FAQs และเส้นทางต่อจากนี้</p>
      <a href="#/" class="ex-more-home" data-link>
        กลับไปหน้า Home
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
    <div class="ex-more-map" aria-label="Intern handbook sections">
      <a href="#/getting-started/orientation" data-link><span>01</span><b>Orientation & Office</b></a>
      <a href="#/policy/code-of-conduct" data-link><span>02</span><b>Work Policy</b></a>
      <a href="#/resources/faqs" data-link><span>03</span><b>FAQs</b></a>
      <a href="#/showcase/experiences" data-link><span>04</span><b>Intern Stories</b></a>
    </div>
  </div>
</section>

</div>
`;
}
