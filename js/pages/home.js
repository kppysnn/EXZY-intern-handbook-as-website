// js/pages/home.js — renderHome template
// Source of truth: this file. Build with: npm run build

export var renderHome = () => `

<section class="ex-home-hero" aria-label="EXZY Intern Handbook">
  <div class="ex-home-hero-inner">
    <div class="ex-home-copy">
      <p class="ex-home-kicker"><span></span>Official Intern Handbook</p>
      <h1>EXZY Intern Handbook</h1>
      <p class="ex-home-lead">\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E01\u0E25\u0E32\u0E07\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48 Intern \u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E2B\u0E25\u0E31\u0E07 Orientation: \u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28 \u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22 \u0E04\u0E19\u0E17\u0E35\u0E48\u0E04\u0E27\u0E23\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01 Timesheet \u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48\u0E1E\u0E1A\u0E1A\u0E48\u0E2D\u0E22 \u0E41\u0E25\u0E30\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E25\u0E48\u0E32\u0E08\u0E32\u0E01\u0E23\u0E38\u0E48\u0E19\u0E1E\u0E35\u0E48</p>
      <div class="ex-home-actions">
        <a href="#ex-home-contents" class="ex-home-primary">
          \u0E40\u0E1B\u0E34\u0E14\u0E2A\u0E32\u0E23\u0E1A\u0E31\u0E0D Handbook
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </a>
        <a href="#/first-day" class="ex-home-secondary" data-link>\u0E44\u0E1B\u0E17\u0E35\u0E48 Day 1 Guide</a>
      </div>
    </div>

    <div class="ex-office-scene fdb-reveal fdb-delay1" aria-hidden="true">
      <svg viewBox="0 0 620 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="osBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#D8EEFF"/>
            <stop offset="100%" stop-color="#EEF7FF"/>
          </linearGradient>
          <linearGradient id="osFloor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#F8FCFF"/>
            <stop offset="100%" stop-color="#EBF5FF"/>
          </linearGradient>
          <linearGradient id="osTeal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#66C5C5"/>
            <stop offset="100%" stop-color="#2A8DA8"/>
          </linearGradient>
          <clipPath id="osWin">
            <rect x="200" y="0" width="420" height="340" rx="0"/>
          </clipPath>
        </defs>

        <!-- Sky background -->
        <rect width="620" height="500" fill="url(#osBg)"/>

        <!-- Window glass area (large panoramic) -->
        <rect x="200" y="0" width="420" height="340" fill="#D4ECFF" opacity=".55"/>

        <!-- City skyline buildings (outside window) -->
        <!-- Far background buildings (lighter) -->
        <rect x="210" y="120" width="35" height="220" fill="#8BBCD8" opacity=".45"/>
        <rect x="248" y="80"  width="50" height="260" fill="#7AADC9" opacity=".50"/>
        <rect x="302" y="140" width="28" height="200" fill="#8BBCD8" opacity=".40"/>
        <rect x="334" y="60"  width="70" height="280" fill="#6A9EC0" opacity=".55"/>
        <rect x="408" y="110" width="40" height="230" fill="#7AADC9" opacity=".48"/>
        <rect x="452" y="50"  width="60" height="290" fill="#5A8EB0" opacity=".60"/>
        <rect x="516" y="130" width="45" height="210" fill="#7AADC9" opacity=".45"/>
        <rect x="565" y="90"  width="55" height="250" fill="#6A9EC0" opacity=".52"/>

        <!-- Mid-ground buildings (darker, more defined) -->
        <rect x="215" y="180" width="30" height="160" fill="#3A6A98"/>
        <!-- Windows on building 1 -->
        <g fill="rgba(200,230,255,.55)" transform="translate(219,188)">
          <rect width="6" height="5" rx="1"/><rect x="9" width="6" height="5" rx="1"/>
          <rect y="10" width="6" height="5" rx="1"/><rect x="9" y="10" width="6" height="5" rx="1"/>
          <rect y="20" width="6" height="5" rx="1"/><rect x="9" y="20" width="6" height="5" rx="1"/>
          <rect y="30" width="6" height="5" rx="1"/><rect x="9" y="30" width="6" height="5" rx="1"/>
          <rect y="40" width="6" height="5" rx="1"/><rect x="9" y="40" width="6" height="5" rx="1"/>
        </g>
        <rect x="260" y="140" width="55" height="200" fill="#2A5888"/>
        <g fill="rgba(200,230,255,.48)" transform="translate(264,152)">
          <rect width="8" height="6" rx="1"/><rect x="12" width="8" height="6" rx="1"/><rect x="24" width="8" height="6" rx="1"/>
          <rect y="14" width="8" height="6" rx="1"/><rect x="12" y="14" width="8" height="6" rx="1"/><rect x="24" y="14" width="8" height="6" rx="1"/>
          <rect y="28" width="8" height="6" rx="1"/><rect x="12" y="28" width="8" height="6" rx="1"/><rect x="24" y="28" width="8" height="6" rx="1"/>
          <rect y="42" width="8" height="6" rx="1"/><rect x="12" y="42" width="8" height="6" rx="1"/>
          <rect y="56" width="8" height="6" rx="1"/><rect x="12" y="56" width="8" height="6" rx="1"/><rect x="24" y="56" width="8" height="6" rx="1"/>
        </g>
        <rect x="340" y="100" width="80" height="240" fill="#1A4878"/>
        <g fill="rgba(102,197,197,.38)" transform="translate(346,112)">
          <rect width="10" height="7" rx="1"/><rect x="14" width="10" height="7" rx="1"/><rect x="28" width="10" height="7" rx="1"/>
          <rect y="17" width="10" height="7" rx="1"/><rect x="14" y="17" width="10" height="7" rx="1"/><rect x="28" y="17" width="10" height="7" rx="1"/>
          <rect y="34" width="10" height="7" rx="1"/><rect x="14" y="34" width="10" height="7" rx="1"/><rect x="28" y="34" width="10" height="7" rx="1"/>
          <rect y="51" width="10" height="7" rx="1"/><rect x="14" y="51" width="10" height="7" rx="1"/>
          <rect y="68" width="10" height="7" rx="1"/><rect x="14" y="68" width="10" height="7" rx="1"/><rect x="28" y="68" width="10" height="7" rx="1"/>
          <rect y="85" width="10" height="7" rx="1"/><rect x="14" y="85" width="10" height="7" rx="1"/>
          <rect y="102" width="10" height="7" rx="1"/><rect x="14" y="102" width="10" height="7" rx="1"/><rect x="28" y="102" width="10" height="7" rx="1"/>
        </g>
        <rect x="425" y="170" width="45" height="170" fill="#2A5888"/>
        <rect x="475" y="90"  width="65" height="250" fill="#003060"/>
        <g fill="rgba(102,197,197,.35)" transform="translate(480,100)">
          <rect width="10" height="7" rx="1"/><rect x="14" width="10" height="7" rx="1"/><rect x="28" width="10" height="7" rx="1"/>
          <rect y="17" width="10" height="7" rx="1"/><rect x="14" y="17" width="10" height="7" rx="1"/><rect x="28" y="17" width="10" height="7" rx="1"/>
          <rect y="34" width="10" height="7" rx="1"/><rect x="14" y="34" width="10" height="7" rx="1"/>
          <rect y="51" width="10" height="7" rx="1"/><rect x="14" y="51" width="10" height="7" rx="1"/><rect x="28" y="51" width="10" height="7" rx="1"/>
          <rect y="68" width="10" height="7" rx="1"/><rect x="14" y="68" width="10" height="7" rx="1"/>
          <rect y="85" width="10" height="7" rx="1"/><rect x="28" y="85" width="10" height="7" rx="1"/>
          <rect y="102" width="10" height="7" rx="1"/><rect x="14" y="102" width="10" height="7" rx="1"/><rect x="28" y="102" width="10" height="7" rx="1"/>
        </g>
        <rect x="545" y="150" width="75" height="190" fill="#1A3C6A"/>

        <!-- Horizon glow -->
        <ellipse cx="420" cy="340" rx="280" ry="40" fill="#C8E6FF" opacity=".55"/>

        <!-- Window frame dividers (glass panels) -->
        <rect x="200" y="0"   width="4" height="340" fill="#8AAECC" opacity=".55"/>
        <rect x="344" y="0"   width="4" height="340" fill="#8AAECC" opacity=".55"/>
        <rect x="488" y="0"   width="4" height="340" fill="#8AAECC" opacity=".55"/>
        <rect x="616" y="0"   width="4" height="340" fill="#8AAECC" opacity=".55"/>
        <rect x="200" y="168" width="420" height="4" fill="#8AAECC" opacity=".45"/>

        <!-- Office interior left wall (dark, teal accent) -->
        <rect x="0" y="0" width="200" height="500" fill="#002A4A"/>
        <rect x="0" y="0" width="200" height="8" fill="#66C5C5"/>
        <!-- Left wall subtle texture -->
        <rect x="20" y="40"  width="160" height="1" fill="rgba(255,255,255,.06)"/>
        <rect x="20" y="80"  width="160" height="1" fill="rgba(255,255,255,.06)"/>
        <rect x="20" y="120" width="160" height="1" fill="rgba(255,255,255,.06)"/>

        <!-- Person 1 (standing, right area near window) -->
        <g transform="translate(490,170)">
          <circle cx="0" cy="0" r="20" fill="#002A4A"/>
          <!-- Body -->
          <rect x="-18" y="22" width="36" height="72" rx="10" fill="#1A4A7A"/>
          <!-- Teal shirt accent -->
          <rect x="-8" y="28" width="16" height="30" rx="4" fill="#66C5C5" opacity=".65"/>
          <!-- Arms -->
          <rect x="-32" y="26" width="16" height="48" rx="7" fill="#1A4A7A"/>
          <rect x="16"  y="26" width="16" height="48" rx="7" fill="#1A4A7A"/>
          <!-- Left arm holding tablet -->
          <rect x="-44" y="50" width="28" height="20" rx="4" fill="#2A5A8A"/>
          <!-- Legs -->
          <rect x="-16" y="92" width="14" height="60" rx="6" fill="#0D2A48"/>
          <rect x="2"   y="92" width="14" height="60" rx="6" fill="#0D2A48"/>
        </g>

        <!-- Person 2 (standing, center-right, female) -->
        <g transform="translate(430,200)">
          <circle cx="0" cy="0" r="18" fill="#1A2840"/>
          <!-- Hair suggestion -->
          <path d="M-18 5 Q-20 -12 0 -18 Q18 -12 18 5" fill="#0A1828"/>
          <!-- Body -->
          <rect x="-16" y="20" width="32" height="60" rx="9" fill="#FFFFFF"/>
          <!-- Teal jacket/blazer -->
          <rect x="-18" y="20" width="10" height="60" rx="5" fill="#66C5C5" opacity=".70"/>
          <rect x="8"   y="20" width="10" height="60" rx="5" fill="#66C5C5" opacity=".70"/>
          <!-- Holding folder -->
          <rect x="16"  y="38" width="22" height="28" rx="3" fill="#E8EEF4"/>
          <rect x="16"  y="38" width="22" height="5"  rx="2" fill="#004080"/>
          <!-- Legs (dark trousers) -->
          <rect x="-14" y="78" width="12" height="56" rx="5" fill="#1A2840"/>
          <rect x="2"   y="78" width="12" height="56" rx="5" fill="#1A2840"/>
        </g>

        <!-- Person 3 (walking toward viewer, right side) -->
        <g transform="translate(570,210)">
          <circle cx="0" cy="0" r="19" fill="#1A2840"/>
          <path d="M-19 4 Q-18 -14 0 -19 Q18 -14 19 4" fill="#0A1828"/>
          <rect x="-16" y="21" width="32" height="64" rx="9" fill="#004080"/>
          <rect x="-5"  y="28" width="10" height="20" rx="3" fill="#66C5C5" opacity=".55"/>
          <rect x="-22" y="24" width="8"  height="50" rx="4" fill="#004080"/>
          <rect x="14"  y="24" width="8"  height="50" rx="4" fill="#004080"/>
          <rect x="-14" y="83" width="11" height="52" rx="5" fill="#0D2040"/>
          <rect x="3"   y="83" width="11" height="52" rx="5" fill="#0D2040"/>
        </g>

        <!-- Floor (reflective office floor) -->
        <polygon points="0,340 620,340 620,500 0,500" fill="url(#osFloor)"/>
        <line x1="0" y1="340" x2="620" y2="340" stroke="#C8DDED" stroke-width="1.5"/>
        <!-- Floor reflection streaks -->
        <line x1="100" y1="340" x2="150" y2="500" stroke="rgba(255,255,255,.40)" stroke-width="1.5"/>
        <line x1="300" y1="340" x2="380" y2="500" stroke="rgba(255,255,255,.30)" stroke-width="1.5"/>
        <line x1="500" y1="340" x2="560" y2="500" stroke="rgba(255,255,255,.28)" stroke-width="1.5"/>

        <!-- Meeting table (center) -->
        <ellipse cx="350" cy="400" rx="130" ry="32" fill="#FFFFFF" opacity=".90"/>
        <ellipse cx="350" cy="398" rx="130" ry="32" fill="#EEF4FA" stroke="#D8E6F0" stroke-width="1.5"/>
        <!-- Laptop on table -->
        <rect x="290" y="368" width="100" height="64" rx="6" fill="#E8EEF4"/>
        <rect x="298" y="374" width="84" height="50" rx="4" fill="#002A4A"/>
        <rect x="306" y="380" width="68" height="38" rx="3" fill="#003060"/>
        <rect x="314" y="386" width="52" height="6" rx="2" fill="#66C5C5" opacity=".55"/>
        <rect x="314" y="398" width="38" height="4" rx="2" fill="rgba(255,255,255,.30)"/>
        <rect x="314" y="408" width="46" height="4" rx="2" fill="rgba(255,255,255,.22)"/>
        <rect x="286" y="428" width="108" height="10" rx="3" fill="#D0DCE8"/>
        <!-- Coffee cup -->
        <rect x="415" y="390" width="20" height="24" rx="4" fill="#FFFFFF"/>
        <ellipse cx="425" cy="390" rx="10" ry="4" fill="#66C5C5" opacity=".55"/>
        <path d="M435 396 Q443 400 435 404" fill="none" stroke="#E8EEF4" stroke-width="4" stroke-linecap="round"/>

        <!-- Person 4 (seated at table, left) -->
        <g transform="translate(270,365)">
          <circle cx="0" cy="0" r="17" fill="#1A2840"/>
          <rect x="-14" y="18" width="28" height="40" rx="7" fill="#66C5C5" opacity=".80"/>
          <rect x="-22" y="22" width="10" height="30" rx="5" fill="#66C5C5" opacity=".72"/>
          <rect x="12"  y="22" width="10" height="30" rx="5" fill="#66C5C5" opacity=".72"/>
        </g>

        <!-- Person 5 (seated at table, right) -->
        <g transform="translate(440,358)">
          <circle cx="0" cy="0" r="16" fill="#0A1828"/>
          <rect x="-14" y="18" width="28" height="42" rx="7" fill="#FFFFFF"/>
          <rect x="-6"  y="24" width="12" height="18" rx="3" fill="#004080" opacity=".70"/>
        </g>

        <!-- Teal accent geometric shape (top-left, design element) -->
        <polygon points="0,0 120,0 0,180" fill="#66C5C5" opacity=".18"/>
        <polygon points="0,0 60,0 0,90"   fill="#66C5C5" opacity=".25"/>

        <!-- Dot grid decoration (top-right) -->
        <g fill="#004080" opacity=".18">
          <circle cx="555" cy="18" r="3"/><circle cx="573" cy="18" r="3"/><circle cx="591" cy="18" r="3"/><circle cx="609" cy="18" r="3"/>
          <circle cx="555" cy="36" r="3"/><circle cx="573" cy="36" r="3"/><circle cx="591" cy="36" r="3"/><circle cx="609" cy="36" r="3"/>
          <circle cx="555" cy="54" r="3"/><circle cx="573" cy="54" r="3"/><circle cx="591" cy="54" r="3"/><circle cx="609" cy="54" r="3"/>
          <circle cx="555" cy="72" r="3"/><circle cx="573" cy="72" r="3"/><circle cx="591" cy="72" r="3"/><circle cx="609" cy="72" r="3"/>
        </g>

        <!-- Plus accent -->
        <g stroke="#66C5C5" stroke-width="2.5" stroke-linecap="round" opacity=".55" transform="translate(542,140)">
          <line x1="0" y1="-8" x2="0" y2="8"/>
          <line x1="-8" y1="0" x2="8" y2="0"/>
        </g>
        <g stroke="#004080" stroke-width="2" stroke-linecap="round" opacity=".35" transform="translate(195,220)">
          <line x1="0" y1="-6" x2="0" y2="6"/>
          <line x1="-6" y1="0" x2="6" y2="0"/>
        </g>
      </svg>
    </div>
    </div>
  </div>
</section>

<section class="ex-home-start" aria-labelledby="ex-home-start-title">
  <div class="ex-home-start-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-home-start-title">\u0E40\u0E23\u0E34\u0E48\u0E21\u0E08\u0E32\u0E01\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E1A\u0E48\u0E2D\u0E22\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14</h2>
      <p>\u0E16\u0E49\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E07\u0E08\u0E1A Orientation \u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E33\u0E25\u0E31\u0E07\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E40\u0E1B\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19 \u0E2A\u0E32\u0E21\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E04\u0E37\u0E2D\u0E08\u0E38\u0E14\u0E40\u0E23\u0E34\u0E48\u0E21\u0E17\u0E35\u0E48\u0E40\u0E23\u0E47\u0E27\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14</p>
    </div>

    <div class="ex-start-grid">
      <a href="#/first-day" class="ex-start-card ex-start-card-primary fdb-reveal" data-link>
        <span class="ex-start-index">Start</span>
        <h3>Day 1 Guide</h3>
        <p>\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E02\u0E2D\u0E07\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01 \u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33 \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E08\u0E30\u0E44\u0E14\u0E49\u0E40\u0E08\u0E2D\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19</p>
        <strong>\u0E40\u0E1B\u0E34\u0E14\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01</strong>
      </a>
      <a href="#/getting-started/orientation" class="ex-start-card fdb-reveal fdb-delay1" data-link>
        <span class="ex-start-index">After Orientation</span>
        <h3>Orientation</h3>
        <p>\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E14\u0E39\u0E2A\u0E44\u0E25\u0E14\u0E4C \u0E04\u0E48\u0E32\u0E19\u0E34\u0E22\u0E21 \u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C \u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19\u0E02\u0E2D\u0E07 EXZY</p>
        <strong>\u0E17\u0E1A\u0E17\u0E27\u0E19 Orientation</strong>
      </a>
      <a href="#/resources/timesheet" class="ex-start-card fdb-reveal fdb-delay2" data-link>
        <span class="ex-start-index">Every Month</span>
        <h3>Timesheet</h3>
        <p>\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E01\u0E23\u0E2D\u0E01 \u0E40\u0E27\u0E25\u0E32\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07 \u0E41\u0E25\u0E30\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E37\u0E48\u0E19\u0E43\u0E2B\u0E49 HR</p>
        <strong>\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E01\u0E23\u0E2D\u0E01 Timesheet</strong>
      </a>
    </div>
  </div>
</section>

<section class="ex-folders-section" id="ex-home-contents" aria-labelledby="ex-folders-title">
  <div class="ex-folders-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-folders-title">ทุกอย่างที่ intern ต้องรู้ รวมไว้ในที่เดียว</h2>
      <p>เลือกหมวดหมู่ที่ต้องการ — แต่ละโฟลเดอร์เปิดสารบัญให้อ่านทันที</p>
    </div>

    <div class="ex-folder-grid">

      <div class="ex-folder ex-folder--cyan" tabindex="0" role="button" aria-expanded="false">
        <div class="ex-folder-tab">เริ่มต้น</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="7" width="26" height="20" rx="3"/><path d="M3 13h26M10 7V4M22 7V4"/><circle cx="16" cy="20" r="3" fill="currentColor" stroke="none"/></svg>
          </div>
          <h3>Day 1 Guide</h3>
          <p>ภาพรวมวันแรกและสิ่งที่ต้องทำ</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/first-day" data-link class="ex-folder-doc">ตารางวันแรก</a>
          <a href="#/first-day" data-link class="ex-folder-doc">สิ่งที่ต้องเตรียม</a>
          <a href="#/first-day" data-link class="ex-folder-doc">คนที่ต้องรู้จัก</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--navy" tabindex="0" role="button" aria-expanded="false">
        <div class="ex-folder-tab">ออฟฟิศ</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="26" height="24" rx="3"/><path d="M10 4v24M10 12h16M10 19h16"/></svg>
          </div>
          <h3>Orientation & ออฟฟิศ</h3>
          <p>Wi-Fi, ห้องประชุม และข้อมูลออฟฟิศ</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/getting-started/orientation" data-link class="ex-folder-doc">Orientation</a>
          <a href="#/getting-started/wifi" data-link class="ex-folder-doc">Office Wi-Fi</a>
          <a href="#/getting-started/meeting-rooms" data-link class="ex-folder-doc">Meeting Rooms</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--slate" tabindex="0" role="button" aria-expanded="false">
        <div class="ex-folder-tab">บริษัท</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="16" cy="10" r="5"/><circle cx="7" cy="22" r="4"/><circle cx="25" cy="22" r="4"/><path d="M11 14 Q8 18 11 22M21 14 Q24 18 21 22"/></svg>
          </div>
          <h3>บริษัทและทีม</h3>
          <p>โครงสร้างองค์กรและ Employee Directory</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/employee/org-chart" data-link class="ex-folder-doc">โครงสร้างองค์กร</a>
          <a href="#/employee/directory" data-link class="ex-folder-doc">Employee Contact</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--teal" tabindex="0" role="button" aria-expanded="false">
        <div class="ex-folder-tab">นโยบาย</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16 3 L28 8v10c0 7-5 11-12 13C9 29 4 25 4 18V8L16 3Z"/><path d="M11 16l3 3 7-7"/></svg>
          </div>
          <h3>Work Policy</h3>
          <p>กฎระเบียบ Dress Code และการลา</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/policy/code-of-conduct" data-link class="ex-folder-doc">Core Values</a>
          <a href="#/policy/dress-code" data-link class="ex-folder-doc">Dress Code</a>
          <a href="#/policy/leave" data-link class="ex-folder-doc">Leave & Absence</a>
        </div>
      </div>

      <div class="ex-folder ex-folder--warm" tabindex="0" role="button" aria-expanded="false">
        <div class="ex-folder-tab">Resources</div>
        <div class="ex-folder-body">
          <div class="ex-folder-icon">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="14" height="14" rx="2"/><rect x="14" y="14" width="14" height="14" rx="2"/><rect x="4" y="18" width="8" height="10" rx="2"/><rect x="20" y="4" width="8" height="8" rx="2"/></svg>
          </div>
          <h3>Resources</h3>
          <p>Timesheet, FAQs และ Showcase</p>
        </div>
        <div class="ex-folder-docs">
          <a href="#/resources/timesheet" data-link class="ex-folder-doc">Timesheet</a>
          <a href="#/resources/faqs" data-link class="ex-folder-doc">FAQs</a>
          <a href="#/showcase/experiences" data-link class="ex-folder-doc">Intern Showcase</a>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="ex-home-quick" aria-labelledby="ex-home-quick-title">
  <div class="ex-home-quick-inner">
    <div class="ex-home-section-intro fdb-reveal">
      <h2 id="ex-home-quick-title">\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E40\u0E1B\u0E34\u0E14\u0E1A\u0E48\u0E2D\u0E22</h2>
      <p>\u0E17\u0E32\u0E07\u0E25\u0E31\u0E14\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E21\u0E31\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19</p>
    </div>

    <div class="ex-quick-list">
      <a href="#/getting-started/wifi" data-link>
        <span>Wi-Fi</span>
        <strong>\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2D\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E47\u0E15\u0E43\u0E19\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28</strong>
      </a>
      <a href="#/employee/directory" data-link>
        <span>Contact</span>
        <strong>\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E04\u0E19\u0E43\u0E19\u0E17\u0E35\u0E21\u0E41\u0E25\u0E30\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D</strong>
      </a>
      <a href="#/policy/leave" data-link>
        <span>Leave</span>
        <strong>\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E25\u0E32\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1B\u0E48\u0E27\u0E22</strong>
      </a>
      <a href="#/resources/faqs" data-link>
        <span>FAQs</span>
        <strong>\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48 intern \u0E21\u0E31\u0E01\u0E2A\u0E07\u0E2A\u0E31\u0E22</strong>
      </a>
    </div>
  </div>
</section>
`;
