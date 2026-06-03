export function renderFirstDay(data = {}) {
  const hrEmail = data.hr_email || 'hr@exzyteam.com';

  return `
<div class="fd3-page">

<!-- ══════════════ HERO ══════════════ -->
<div class="fdw-hero">

  <!-- ── ILLUSTRATED WORKSPACE SCENE ── -->
  <div class="fdw-scene" aria-hidden="true">
    <svg viewBox="0 0 1440 580" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fdw-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FDF8F0"/>
          <stop offset="100%" stop-color="#F5EDD8"/>
        </linearGradient>
        <linearGradient id="fdw-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#E8C87A"/>
          <stop offset="100%" stop-color="#C8A050"/>
        </linearGradient>
        <linearGradient id="fdw-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1A2E52"/>
          <stop offset="100%" stop-color="#0E1F3A"/>
        </linearGradient>
        <filter id="fdw-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="16" flood-color="rgba(60,30,0,0.18)"/>
        </filter>
        <filter id="fdw-soft" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="8" flood-color="rgba(60,30,0,0.12)"/>
        </filter>
      </defs>

      <!-- WALL -->
      <rect width="1440" height="580" fill="url(#fdw-wall)"/>

      <!-- WINDOW — upper right, morning light -->
      <rect x="980" y="30" width="210" height="270" rx="6" fill="#FEFCF5"/>
      <rect x="980" y="30" width="210" height="270" rx="6" fill="none" stroke="#D4BE8A" stroke-width="8"/>
      <line x1="980" y1="165" x2="1190" y2="165" stroke="#D4BE8A" stroke-width="4"/>
      <line x1="1085" y1="30" x2="1085" y2="300" stroke="#D4BE8A" stroke-width="4"/>
      <!-- morning light rays washing across wall -->
      <polygon points="980,30 540,580 760,580 1190,30" fill="rgba(255,220,80,0.09)"/>
      <polygon points="1085,30 640,580 820,580 1190,110" fill="rgba(255,220,80,0.06)"/>
      <polygon points="1190,30 820,580 960,580 1190,80" fill="rgba(255,220,80,0.04)"/>

      <!-- WALL ART — small framed print left of window -->
      <rect x="720" y="55" width="130" height="100" rx="4" fill="#EDE5D8" filter="url(#fdw-soft)"/>
      <rect x="726" y="61" width="118" height="88" rx="2" fill="#F5EDE0"/>
      <!-- abstract art: a few coloured shapes -->
      <circle cx="765" cy="105" r="24" fill="rgba(102,197,197,0.35)"/>
      <rect x="775" y="78" width="14" height="38" rx="3" fill="rgba(0,64,128,0.2)"/>
      <ellipse cx="800" cy="115" rx="16" ry="10" fill="rgba(245,158,11,0.25)"/>

      <!-- WALL SHELF + PLANT -->
      <rect x="200" y="210" width="90" height="8" rx="2" fill="#C8B07A"/>
      <rect x="224" y="182" width="28" height="30" rx="3" fill="#707070"/>
      <ellipse cx="238" cy="178" rx="20" ry="28" fill="#66AA66" transform="rotate(-8,238,178)"/>
      <ellipse cx="252" cy="172" rx="16" ry="22" fill="#55BB55" transform="rotate(18,252,172)"/>
      <ellipse cx="224" cy="174" rx="14" ry="20" fill="#44A044" transform="rotate(-22,224,174)"/>

      <!-- DESK SURFACE — large, perspective trapezoid -->
      <polygon points="0,330 1440,330 1440,580 0,580" fill="url(#fdw-desk)"/>
      <!-- Desk edge highlight line -->
      <line x1="0" y1="330" x2="1440" y2="330" stroke="#E8D090" stroke-width="3"/>
      <!-- Very subtle wood grain -->
      <line x1="0" y1="400" x2="1440" y2="398" stroke="rgba(160,110,30,0.06)" stroke-width="1.5"/>
      <line x1="0" y1="470" x2="1440" y2="468" stroke="rgba(160,110,30,0.05)" stroke-width="1.5"/>
      <!-- Desk mat under laptop -->
      <rect x="350" y="325" width="480" height="240" rx="10" fill="rgba(0,40,80,0.06)" transform="rotate(-2,590,445)"/>

      <!-- LAPTOP — main focal object -->
      <!-- Laptop lid/screen back -->
      <rect x="380" y="198" width="360" height="238" rx="14" fill="#DEDAD4" filter="url(#fdw-shadow)" transform="rotate(-2,560,317)"/>
      <!-- Screen bezel -->
      <rect x="392" y="208" width="336" height="218" rx="8" fill="#1C1C2E" transform="rotate(-2,560,317)"/>
      <!-- Screen display -->
      <rect x="398" y="214" width="324" height="206" rx="6" fill="url(#fdw-screen)" transform="rotate(-2,560,317)"/>
      <!-- Screen glow: subtle EXZY-blue content suggestion -->
      <rect x="404" y="220" width="312" height="194" rx="4" fill="#243A5E" opacity="0.6" transform="rotate(-2,560,317)"/>
      <!-- camera dot -->
      <circle cx="561" cy="216" r="3.5" fill="#0A0A1A" transform="rotate(-2,561,216)"/>
      <!-- Screen glare reflection -->
      <ellipse cx="475" cy="268" rx="30" ry="10" fill="rgba(255,255,255,0.07)" transform="rotate(-2,560,317)"/>
      <!-- Keyboard / base -->
      <rect x="392" y="430" width="336" height="34" rx="8" fill="#CCCAC4" filter="url(#fdw-soft)" transform="rotate(-2,560,447)"/>
      <!-- trackpad -->
      <rect x="482" y="436" width="160" height="24" rx="6" fill="#C0BEB8" transform="rotate(-2,560,448)"/>

      <!-- COFFEE MUG — right of laptop -->
      <ellipse cx="868" cy="388" rx="42" ry="26" fill="#55B8B8"/>
      <ellipse cx="868" cy="362" rx="42" ry="26" fill="#66C5C5"/>
      <rect x="826" y="362" width="84" height="26" fill="#66C5C5"/>
      <!-- Coffee liquid surface -->
      <ellipse cx="868" cy="362" rx="32" ry="19" fill="#7B4A28"/>
      <!-- Latte art suggestion -->
      <path d="M858 358 Q868 352 878 358" fill="none" stroke="rgba(240,220,180,0.5)" stroke-width="2" stroke-linecap="round"/>
      <!-- Handle -->
      <path d="M910 368 Q935 378 910 388" fill="none" stroke="#66C5C5" stroke-width="10" stroke-linecap="round"/>
      <path d="M910 368 Q935 378 910 388" fill="none" stroke="#7DD4D4" stroke-width="6" stroke-linecap="round"/>
      <!-- Steam wisps -->
      <path d="M854 352 Q858 336 853 320" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M868 348 Q873 330 868 312" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M882 352 Q887 336 882 320" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2.5" stroke-linecap="round"/>

      <!-- NOTEBOOK — left of laptop, slightly rotated -->
      <rect x="80" y="345" width="220" height="175" rx="7" fill="#F0EAD8" filter="url(#fdw-shadow)" transform="rotate(6,190,432)"/>
      <rect x="92" y="352" width="196" height="162" rx="4" fill="#FAFAF5" transform="rotate(6,190,432)"/>
      <!-- Spiral spine -->
      <rect x="80" y="345" width="14" height="175" rx="4" fill="#D4C48A" transform="rotate(6,190,432)"/>
      <!-- Ruled lines -->
      <line x1="106" y1="378" x2="278" y2="374" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" transform="rotate(6,190,432)"/>
      <line x1="106" y1="395" x2="278" y2="391" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" transform="rotate(6,190,432)"/>
      <line x1="106" y1="412" x2="278" y2="408" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" transform="rotate(6,190,432)"/>
      <line x1="106" y1="429" x2="278" y2="425" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" transform="rotate(6,190,432)"/>
      <line x1="106" y1="446" x2="278" y2="442" stroke="rgba(0,0,0,0.06)" stroke-width="1.5" transform="rotate(6,190,432)"/>
      <!-- Some handwriting/doodle suggestion -->
      <path d="M115 385 Q140 380 155 390 Q165 398 160 408" fill="none" stroke="rgba(0,60,120,0.18)" stroke-width="1.5" stroke-linecap="round" transform="rotate(6,190,432)"/>
      <line x1="115" y1="420" x2="185" y2="418" stroke="rgba(0,60,120,0.12)" stroke-width="1.5" stroke-linecap="round" transform="rotate(6,190,432)"/>

      <!-- PEN beside notebook -->
      <rect x="308" y="355" width="9" height="135" rx="4.5" fill="#0FA8A8" filter="url(#fdw-soft)" transform="rotate(10,312,422)"/>
      <polygon points="312,350 307,340 317,340" fill="#0D9090" transform="rotate(10,312,345)"/>
      <rect x="308" y="466" width="9" height="18" rx="4.5" fill="#0D9090" transform="rotate(10,312,475)"/>

      <!-- DESK SUCCULENT — far right -->
      <ellipse cx="1300" cy="460" rx="36" ry="22" fill="#707070"/>
      <ellipse cx="1300" cy="438" rx="36" ry="22" fill="#888888"/>
      <rect x="1264" y="438" width="72" height="22" fill="#888888"/>
      <!-- Leaves -->
      <ellipse cx="1300" cy="416" rx="16" ry="26" fill="#5AAA60"/>
      <ellipse cx="1283" cy="416" rx="13" ry="20" fill="#4CAF54" transform="rotate(-28,1283,416)"/>
      <ellipse cx="1317" cy="416" rx="13" ry="20" fill="#66BB6A" transform="rotate(28,1317,416)"/>
      <ellipse cx="1291" cy="404" rx="10" ry="16" fill="#43A047" transform="rotate(-18,1291,404)"/>
      <ellipse cx="1310" cy="404" rx="10" ry="16" fill="#388E3C" transform="rotate(18,1310,404)"/>

      <!-- POST-IT NOTE on laptop screen edge -->
      <rect x="666" y="318" width="52" height="44" rx="2" fill="#66C5C5" opacity="0.85" filter="url(#fdw-soft)" transform="rotate(3,692,340)"/>
      <line x1="672" y1="328" x2="712" y2="327" stroke="rgba(0,0,0,0.08)" stroke-width="1.2" transform="rotate(3,692,340)"/>
      <line x1="672" y1="337" x2="712" y2="336" stroke="rgba(0,0,0,0.08)" stroke-width="1.2" transform="rotate(3,692,340)"/>
      <line x1="672" y1="346" x2="700" y2="345" stroke="rgba(0,0,0,0.08)" stroke-width="1.2" transform="rotate(3,692,340)"/>

      <!-- PHONE — right side of desk -->
      <rect x="1060" y="378" width="70" height="118" rx="14" fill="#2A2838" filter="url(#fdw-soft)" transform="rotate(-6,1095,437)"/>
      <rect x="1066" y="386" width="58" height="102" rx="9" fill="#1A1828" transform="rotate(-6,1095,437)"/>
      <rect x="1078" y="480" width="30" height="4" rx="2" fill="rgba(255,255,255,0.2)" transform="rotate(-6,1095,482)"/>

    </svg>
  </div>

  <!-- ── GRADIENT OVERLAY so text is legible over scene ── -->
  <div class="fdw-overlay" aria-hidden="true"></div>

  <!-- ── CHAPTER OPENING TEXT ── -->
  <div class="fdw-text">

    <p class="fdw-chapter-tag">
      <span class="fdw-tag-line"></span>
      Chapter One &nbsp;·&nbsp; บทที่หนึ่ง
    </p>

    <h1 class="fdw-h1">
      <span class="fdw-h1-intro">วันนี้คือ</span>
      <span class="fdw-h1-main">วันแรก</span>
      <span class="fdw-h1-place">ของคุณ ที่ <em>EXZY</em></span>
    </h1>

    <p class="fdw-lead">ไม่ต้องรู้ทุกอย่างในวันเดียว<br>แค่มาถึงก็พอ — ที่เหลือเราเตรียมไว้ให้แล้ว</p>

    <a href="#fd3-sec1" class="fdw-cta">
      เริ่มต้นวันแรก
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>

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
    <div class="fd3-task-card fd3-task-card--cal fdb-reveal fdb-delay1">
      <!-- illustrated calendar graphic — decorative background -->
      <div class="fd3-card-graphic" aria-hidden="true">
        <svg viewBox="0 0 160 180" xmlns="http://www.w3.org/2000/svg">
          <!-- Calendar shell -->
          <rect width="160" height="180" rx="14" fill="rgba(102,197,197,0.10)"/>
          <!-- Top header bar -->
          <rect width="160" height="44" rx="14" fill="rgba(102,197,197,0.30)"/>
          <rect y="30" width="160" height="14" fill="rgba(102,197,197,0.30)"/>
          <!-- Month label -->
          <rect x="42" y="14" width="76" height="10" rx="5" fill="rgba(255,255,255,0.55)"/>
          <!-- Nav chevrons -->
          <path d="M18 18 L14 22 L18 26" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M142 18 L146 22 L142 26" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <!-- Day-of-week headers -->
          <g fill="rgba(0,64,128,0.25)">
            <rect x="8"   y="52" width="16" height="6" rx="3"/>
            <rect x="30"  y="52" width="16" height="6" rx="3"/>
            <rect x="52"  y="52" width="16" height="6" rx="3"/>
            <rect x="74"  y="52" width="16" height="6" rx="3"/>
            <rect x="96"  y="52" width="16" height="6" rx="3"/>
            <rect x="118" y="52" width="16" height="6" rx="3"/>
            <rect x="140" y="52" width="14" height="6" rx="3"/>
          </g>
          <!-- Week rows -->
          <g fill="rgba(0,64,128,0.10)">
            <rect x="8"   y="65" width="16" height="16" rx="4"/>
            <rect x="30"  y="65" width="16" height="16" rx="4"/>
            <rect x="52"  y="65" width="16" height="16" rx="4"/>
            <rect x="74"  y="65" width="16" height="16" rx="4"/>
            <rect x="96"  y="65" width="16" height="16" rx="4"/>
            <rect x="118" y="65" width="16" height="16" rx="4"/>
            <rect x="140" y="65" width="14" height="16" rx="4"/>

            <rect x="8"   y="87" width="16" height="16" rx="4"/>
            <rect x="30"  y="87" width="16" height="16" rx="4"/>
            <!-- TODAY: highlighted -->
            <rect x="52"  y="87" width="16" height="16" rx="4" fill="rgba(102,197,197,0.75)"/>
            <rect x="74"  y="87" width="16" height="16" rx="4"/>
            <rect x="96"  y="87" width="16" height="16" rx="4"/>
            <rect x="118" y="87" width="16" height="16" rx="4"/>
            <rect x="140" y="87" width="14" height="16" rx="4"/>

            <rect x="8"   y="109" width="16" height="16" rx="4"/>
            <rect x="30"  y="109" width="16" height="16" rx="4"/>
            <rect x="52"  y="109" width="16" height="16" rx="4"/>
            <rect x="74"  y="109" width="16" height="16" rx="4"/>
            <rect x="96"  y="109" width="16" height="16" rx="4"/>
            <rect x="118" y="109" width="16" height="16" rx="4"/>
            <rect x="140" y="109" width="14" height="16" rx="4"/>

            <rect x="8"   y="131" width="16" height="16" rx="4"/>
            <rect x="30"  y="131" width="16" height="16" rx="4"/>
            <rect x="52"  y="131" width="16" height="16" rx="4"/>
            <rect x="74"  y="131" width="16" height="16" rx="4"/>
            <rect x="96"  y="131" width="16" height="16" rx="4"/>
          </g>
          <!-- event dot on highlighted day -->
          <circle cx="60" cy="95" r="3" fill="rgba(255,255,255,0.9)"/>
          <!-- two event bars below grid -->
          <rect x="8"  y="154" width="70" height="8" rx="4" fill="rgba(102,197,197,0.35)"/>
          <rect x="84" y="154" width="50" height="8" rx="4" fill="rgba(0,64,128,0.18)"/>
          <rect x="8"  y="166" width="55" height="8" rx="4" fill="rgba(0,64,128,0.12)"/>
        </svg>
      </div>
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
    <div class="fd3-task-card fd3-task-card--ts fdb-reveal fdb-delay2">
      <!-- illustrated document/spreadsheet graphic -->
      <div class="fd3-card-graphic" aria-hidden="true">
        <svg viewBox="0 0 150 180" xmlns="http://www.w3.org/2000/svg">
          <!-- Document with dog-ear corner -->
          <polygon points="0,0 110,0 150,40 150,180 0,180" fill="rgba(0,64,128,0.09)"/>
          <!-- Dog-ear fold -->
          <polygon points="110,0 110,40 150,40" fill="rgba(0,64,128,0.18)"/>
          <!-- Document header stripe -->
          <rect width="110" height="30" fill="rgba(0,64,128,0.18)"/>
          <!-- EXZY label bar in header -->
          <rect x="12" y="10" width="55" height="8" rx="4" fill="rgba(102,197,197,0.55)"/>
          <rect x="12" y="20" width="38" height="5" rx="2" fill="rgba(255,255,255,0.3)"/>
          <!-- Column headers row -->
          <rect x="8"  y="38" width="52" height="7" rx="3" fill="rgba(0,64,128,0.22)"/>
          <rect x="66" y="38" width="28" height="7" rx="3" fill="rgba(0,64,128,0.22)"/>
          <rect x="100" y="38" width="24" height="7" rx="3" fill="rgba(0,64,128,0.22)"/>
          <!-- Data rows -->
          <g fill="rgba(0,64,128,0.10)">
            <rect x="8"  y="52" width="48" height="6" rx="2"/>
            <rect x="66" y="52" width="22" height="6" rx="2"/>
            <rect x="100" y="52" width="20" height="6" rx="2"/>

            <rect x="8"  y="64" width="42" height="6" rx="2"/>
            <rect x="66" y="64" width="26" height="6" rx="2"/>
            <rect x="100" y="64" width="18" height="6" rx="2"/>

            <rect x="8"  y="76" width="50" height="6" rx="2"/>
            <rect x="66" y="76" width="20" height="6" rx="2"/>
            <rect x="100" y="76" width="22" height="6" rx="2" fill="rgba(102,197,197,0.4)"/>

            <rect x="8"  y="88" width="44" height="6" rx="2"/>
            <rect x="66" y="88" width="24" height="6" rx="2"/>
            <rect x="100" y="88" width="20" height="6" rx="2"/>

            <rect x="8"  y="100" width="46" height="6" rx="2"/>
            <rect x="66" y="100" width="22" height="6" rx="2"/>
            <rect x="100" y="100" width="18" height="6" rx="2"/>
          </g>
          <!-- Divider -->
          <line x1="6" y1="114" x2="144" y2="114" stroke="rgba(0,64,128,0.15)" stroke-width="1"/>
          <!-- Total/footer row -->
          <rect x="8"  y="120" width="62" height="7" rx="3" fill="rgba(0,64,128,0.16)"/>
          <rect x="100" y="120" width="26" height="7" rx="3" fill="rgba(102,197,197,0.45)"/>
          <!-- Signature lines -->
          <line x1="8"  y1="140" x2="65" y2="140" stroke="rgba(0,64,128,0.2)" stroke-width="1.5"/>
          <line x1="80" y1="140" x2="144" y2="140" stroke="rgba(0,64,128,0.2)" stroke-width="1.5"/>
          <rect x="8"  y="144" width="32" height="4" rx="2" fill="rgba(0,64,128,0.1)"/>
          <rect x="80" y="144" width="40" height="4" rx="2" fill="rgba(0,64,128,0.1)"/>
          <!-- Approval stamp circle -->
          <circle cx="118" cy="162" r="16" fill="none" stroke="rgba(102,197,197,0.45)" stroke-width="2"/>
          <circle cx="118" cy="162" r="11" fill="none" stroke="rgba(102,197,197,0.25)" stroke-width="1" stroke-dasharray="3 2"/>
          <rect x="110" y="159" width="16" height="6" rx="3" fill="rgba(102,197,197,0.4)"/>
        </svg>
      </div>
      <div class="fd3-task-body">
        <div class="fd3-task-header">
          <div class="fd3-task-ico" style="color:#F59E0B">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div>
            <div class="fd3-task-num" style="color:#004080">Task 02</div>
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
        <div class="fd3-orientation-map" aria-label="Orientation flow">
          <div class="fd3-orient-step">
            <span class="fd3-orient-icon">🏢</span>
            <strong>รู้จัก EXZY</strong>
            <small>ภาพรวมบริษัทและวิธีทำงาน</small>
          </div>
          <div class="fd3-orient-step">
            <span class="fd3-orient-icon">📄</span>
            <strong>เอกสารสำคัญ</strong>
            <small>นโยบายและข้อมูลที่ต้องรับทราบ</small>
          </div>
          <div class="fd3-orient-step">
            <span class="fd3-orient-icon">💻</span>
            <strong>ตั้งค่า Tools</strong>
            <small>เตรียมเครื่องมือให้พร้อมใช้งาน</small>
          </div>
          <div class="fd3-orient-step">
            <span class="fd3-orient-icon">📅</span>
            <strong>ผูก Calendar</strong>
            <small>รับนัดหมายบริษัทอัตโนมัติ</small>
          </div>
        </div>
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
