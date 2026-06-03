export const renderHome = () => `

<!-- Welcome hero -->
<section class="welcome-hero" aria-label="ยินดีต้อนรับ intern ใหม่">
  <div class="welcome-hero-bg" aria-hidden="true"></div>

  <div class="welcome-hero-inner">
    <div class="welcome-copy">
      <p class="welcome-kicker">
        <span></span>
        EXZY Intern Welcome
      </p>
      <h1>ก้าวแรกที่ EXZY ควรรู้สึกเหมือนมีคนรออยู่</h1>
      <p class="welcome-lead">เปิดหน้านี้เมื่อมาถึงวันแรก แล้วค่อย ๆ ตามเส้นทางจากการรู้จักออฟฟิศ คนในทีม ไปจนถึงสิ่งที่ต้องทำก่อนกลับบ้าน</p>
      <div class="welcome-actions">
        <a href="#/first-day" class="welcome-primary" data-link>
          เริ่มจากวันแรก
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>

    <div class="welcome-scene" aria-hidden="true">
      <svg viewBox="0 0 760 560" role="img" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="homeDesk" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F7FCFC"/>
            <stop offset="100%" stop-color="#E7F5F7"/>
          </linearGradient>
          <linearGradient id="homeNavy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#004081"/>
            <stop offset="100%" stop-color="#002D5C"/>
          </linearGradient>
          <linearGradient id="homeTeal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#66C5C5"/>
            <stop offset="100%" stop-color="#2A9FA7"/>
          </linearGradient>
          <filter id="homeSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#004080" flood-opacity="0.16"/>
          </filter>
        </defs>

        <path d="M76 162C133 55 300 18 430 51c132 33 230 139 248 264 18 127-43 255-157 298-116 44-287 8-384-76C40 454 19 270 76 162Z" fill="#EEF8FA"/>
        <path d="M104 387C216 349 301 330 401 351c84 18 165 60 268 43v98c-90 54-214 70-335 50-98-16-176-52-230-84v-71Z" fill="#D8F0F2"/>

        <g filter="url(#homeSoftShadow)">
          <path d="M118 342 628 291l58 146-520 65-48-160Z" fill="url(#homeDesk)"/>
          <path d="M118 342 628 291l13 32-514 61-9-42Z" fill="#FFFFFF" opacity=".82"/>
        </g>

        <g transform="rotate(-6 359 279)" filter="url(#homeSoftShadow)">
          <rect x="240" y="156" width="255" height="170" rx="18" fill="#DDE8EF"/>
          <rect x="256" y="171" width="223" height="132" rx="10" fill="url(#homeNavy)"/>
          <path d="M276 205h82M276 232h138M276 259h102" stroke="#66C5C5" stroke-width="10" stroke-linecap="round" opacity=".5"/>
          <circle cx="443" cy="257" r="30" fill="#66C5C5" opacity=".24"/>
          <path d="M293 329h154c18 0 33 13 37 31l4 17H255l5-18c5-18 15-30 33-30Z" fill="#C6D3DD"/>
          <rect x="313" y="346" width="115" height="19" rx="8" fill="#AEBECD"/>
        </g>

        <g transform="rotate(8 190 360)" filter="url(#homeSoftShadow)">
          <rect x="92" y="260" width="170" height="190" rx="14" fill="#FFFFFF"/>
          <rect x="92" y="260" width="20" height="190" rx="10" fill="#66C5C5"/>
          <path d="M131 304h91M131 333h104M131 362h76M131 402h98" stroke="#004080" stroke-width="5" stroke-linecap="round" opacity=".17"/>
          <circle cx="213" cy="405" r="18" fill="#66C5C5" opacity=".25"/>
        </g>

        <g transform="rotate(-4 578 214)" filter="url(#homeSoftShadow)">
          <rect x="518" y="118" width="142" height="158" rx="18" fill="#FFFFFF"/>
          <rect x="518" y="118" width="142" height="42" rx="18" fill="url(#homeTeal)"/>
          <rect x="518" y="146" width="142" height="18" fill="#66C5C5"/>
          <g fill="#004080" opacity=".18">
            <rect x="536" y="179" width="18" height="18" rx="5"/>
            <rect x="565" y="179" width="18" height="18" rx="5"/>
            <rect x="594" y="179" width="18" height="18" rx="5"/>
            <rect x="623" y="179" width="18" height="18" rx="5"/>
            <rect x="536" y="208" width="18" height="18" rx="5"/>
            <rect x="565" y="208" width="18" height="18" rx="5"/>
            <rect x="594" y="208" width="18" height="18" rx="5"/>
            <rect x="623" y="208" width="18" height="18" rx="5"/>
          </g>
          <rect x="565" y="208" width="18" height="18" rx="5" fill="#004080" opacity=".64"/>
        </g>

        <g transform="rotate(7 547 407)" filter="url(#homeSoftShadow)">
          <path d="M475 318h138l43 43v130H475V318Z" fill="#FFFFFF"/>
          <path d="M613 318v43h43" fill="#DDE8EF"/>
          <path d="M498 374h92M498 404h120M498 434h82" stroke="#004080" stroke-width="7" stroke-linecap="round" opacity=".16"/>
          <rect x="594" y="426" width="38" height="25" rx="6" fill="#66C5C5" opacity=".32"/>
        </g>

        <g filter="url(#homeSoftShadow)">
          <rect x="160" y="112" width="138" height="82" rx="18" fill="#FFFFFF"/>
          <path d="M188 155c18-30 67-30 84 0" fill="none" stroke="#66C5C5" stroke-width="8" stroke-linecap="round"/>
          <circle cx="200" cy="144" r="15" fill="#004080" opacity=".82"/>
          <circle cx="229" cy="132" r="18" fill="#66C5C5"/>
          <circle cx="258" cy="145" r="15" fill="#707070"/>
        </g>

        <path d="M120 238c94-65 202-83 310-58 76 17 136 57 196 96" fill="none" stroke="#66C5C5" stroke-width="3" stroke-linecap="round" stroke-dasharray="8 14" opacity=".65"/>
        <circle cx="122" cy="238" r="8" fill="#66C5C5"/>
        <circle cx="430" cy="180" r="8" fill="#004080"/>
        <circle cx="626" cy="276" r="8" fill="#707070"/>
      </svg>
    </div>
  </div>
</section>

<!-- Story path -->
<section class="welcome-path" aria-labelledby="welcome-path-title">
  <div class="welcome-section-head">
    <h2 id="welcome-path-title">ไม่ต้องอ่านทั้งเว็บในครั้งเดียว</h2>
    <p>เลือกตามสถานการณ์ที่อยู่ตรงหน้า เหมือนมีแผนที่เล็ก ๆ บนโต๊ะทำงาน</p>
  </div>

  <div class="welcome-path-board">
    <a href="#/first-day" class="welcome-path-piece piece-day" data-link>
      <span class="piece-label">เพิ่งมาถึง</span>
      <h3>เดินตาม Day 1 Guide</h3>
      <p>รู้ว่าช่วงเช้าต้องเจออะไร วันนี้ต้องทำอะไรให้เสร็จ และควรถามใคร</p>
    </a>
    <a href="#/getting-started/wifi" class="welcome-path-piece piece-office" data-link>
      <span class="piece-label">นั่งที่โต๊ะแล้ว</span>
      <h3>ต่อ Wi-Fi และจองห้อง</h3>
      <p>ข้อมูลออฟฟิศที่ต้องใช้ทันที ไม่ต้องไล่ถามหลายรอบ</p>
    </a>
    <a href="#/policy/dress-code" class="welcome-path-piece piece-policy" data-link>
      <span class="piece-label">เตรียมตัวพรุ่งนี้</span>
      <h3>เช็กกติกาการทำงาน</h3>
      <p>Core Values, dress code, การลา และขอบเขตที่ช่วยให้ทำงานร่วมกันง่ายขึ้น</p>
    </a>
    <a href="#/showcase/experiences" class="welcome-path-piece piece-story" data-link>
      <span class="piece-label">อยากเห็นภาพชีวิตจริง</span>
      <h3>อ่านเรื่องจากรุ่นพี่</h3>
      <p>ประสบการณ์ วิธีคิด และบทเรียนจากคนที่เคยเริ่มต้นตรงจุดเดียวกัน</p>
    </a>
  </div>
</section>

<!-- Quick objects -->
<section class="welcome-objects" aria-labelledby="welcome-objects-title">
  <div class="welcome-objects-inner">
    <div class="welcome-object-copy">
      <h2 id="welcome-objects-title">ของที่มักต้องหยิบระหว่างวัน</h2>
      <p>บางเรื่องไม่ได้ต้องอ่านยาว แค่ต้องเปิดให้เจอเร็วตอนกำลังทำงาน</p>
    </div>
    <div class="welcome-object-list">
      <a href="#/resources/timesheet" data-link>
        <span class="object-icon object-sheet"></span>
        <strong>Timesheet</strong>
        <small>กรอกเวลาเข้าออกและดูวิธีพิมพ์ส่ง</small>
      </a>
      <a href="#/policy/leave" data-link>
        <span class="object-icon object-leave"></span>
        <strong>การขอลา</strong>
        <small>ขั้นตอน วันลา และการแจ้ง HR</small>
      </a>
      <a href="#/employee/directory" data-link>
        <span class="object-icon object-people"></span>
        <strong>Employee Contact</strong>
        <small>หาชื่อทีมและช่องทางติดต่อ</small>
      </a>
      <a href="#/resources/faqs" data-link>
        <span class="object-icon object-faq"></span>
        <strong>FAQs</strong>
        <small>คำถามที่ intern เปิดดูบ่อย</small>
      </a>
    </div>
  </div>
</section>
`;
