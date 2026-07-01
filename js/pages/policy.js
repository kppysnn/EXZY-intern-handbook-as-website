import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';
import { loadAdminData } from '../auth.js';

export const coreValuePosters = [
  {
    num: "01",
    name: "Win as a Team",
    label: "Goal · Work+ · Support",
    note: "รู้เป้าหมายของทีม รับผิดชอบงานของตัวเอง และบอกทีมเร็วเมื่อมีอะไรติดขัด",
    src: "./Exzy%20core%20value%20poster/win_as_a_team_yellow.png",
    accent: "#FFCC00",
    alt: "โปสเตอร์ Core Value ข้อ Win as a Team",
  },
  {
    num: "02",
    name: "Innovative",
    label: "Value Added · Learn · Take Risks",
    note: "ลองคิดวิธีที่ทำให้งานดีขึ้น เรียนรู้จาก feedback และประเมินความเสี่ยงก่อนลงมือ",
    src: "./Exzy%20core%20value%20poster/innovation.png",
    accent: "#66C5C5",
    alt: "โปสเตอร์ Core Value ข้อ Innovative",
  },
  {
    num: "03",
    name: "Positive & Open",
    label: "Energy · Listening · Speaking",
    note: "เปิดใจฟังความคิดเห็น สื่อสารตรงไปตรงมา และช่วยทำให้บรรยากาศการทำงานดีขึ้น",
    src: "./Exzy%20core%20value%20poster/Positive%20and%20open.png",
    accent: "#82C566",
    alt: "โปสเตอร์ Core Value ข้อ Positive and Open",
  },
  {
    num: "04",
    name: "Professional & Dynamic",
    label: "Adapt · Commit · Prepare",
    note: "เตรียมตัวก่อนเริ่มงาน ปรับตัวตามสถานการณ์ และส่งงานตามที่ตกลงไว้",
    src: "./Exzy%20core%20value%20poster/professional_dynamic.png",
    accent: "#586782",
    alt: "โปสเตอร์ Core Value ข้อ Professional and Dynamic",
  },
  {
    num: "05",
    name: "Aesthetic Design",
    label: "Tidiness · Experience · WOW",
    note: "ดูแลรายละเอียดให้งานสะอาด อ่านง่าย และส่งต่อให้คนอื่นใช้งานได้ต่อ",
    src: "./Exzy%20core%20value%20poster/Aesthetic_puple.png",
    accent: "#6F4BB8",
    alt: "โปสเตอร์ Core Value ข้อ Aesthetic Design",
  },
];

export const renderCodeOfConduct = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Work Policy", null], ["Core Values", null]],
  title: "EXZY Core Values",
  lead: "เลื่อนลงเพื่อดู Core Values ทีละข้อ หน้า overview จะค้างไว้ แล้ว card จะเปลี่ยนตามจังหวะการเลื่อน",
  body: `
    <section class="cvd-story" data-cvd-stage aria-labelledby="core-values-stage-title">
      <div class="cvd-pin">
        <div class="cvd-overview">
          <span class="cvd-kicker">Core Values Deck</span>
          <h2 id="core-values-stage-title">เลื่อนเพื่อดูทีละ value</h2>
          <p>ภาพรวมจะอยู่กับที่ ส่วน card ด้านขวาจะสลับตามข้อที่กำลังอ่าน ใช้หน้านี้เป็นตัวช่วยจำก่อนเริ่มทำงานกับทีม</p>
          <figure class="cvd-overview-poster">
            <img src="./Exzy%20core%20value%20poster/poster.png" alt="โปสเตอร์ภาพรวม EXZY Core Values">
          </figure>
          <div class="cvd-progress" aria-label="Core Values progress">
            ${coreValuePosters.map((v, i) => `
              <a href="#core-value-${v.num}" class="cvd-progress-step${i === 0 ? " is-active" : ""}" style="--cvd-accent:${v.accent};" data-cvd-jump="${i}">
                <span>${v.num}</span>
                <strong>${v.name}</strong>
              </a>
            `).join("")}
          </div>
        </div>

        <div class="cvd-card-stack" aria-label="Core Values cards">
          ${coreValuePosters.map((v, i) => `
          <article class="cvd-card${i === 0 ? " is-active" : ""}" id="core-value-${v.num}" data-cvd-card="${i}" data-num="${v.num}" style="--cvd-accent:${v.accent};">
            <div class="cvd-copy">
              <span class="cvd-num">${v.num}</span>
              <h2>${v.name}</h2>
              <p>${v.label}</p>
              <small>${v.note}</small>
            </div>
            <figure class="cvd-poster">
              <img src="${v.src}" alt="${v.alt}" loading="lazy">
            </figure>
          </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="cvd-recap" id="core-values-recap" aria-labelledby="core-values-recap-title">
      <div class="cvd-recap-head">
        <h2 id="core-values-recap-title">Core Values ทั้ง 5 ข้อ</h2>
        <p>ถ้าจะกลับมาดูเร็ว ๆ ใช้ส่วนนี้เปิดโปสเตอร์แต่ละใบได้เลย</p>
      </div>
      <div class="cvd-grid">
        ${coreValuePosters.map((v) => `
          <a href="#core-value-${v.num}" class="cvd-thumb" style="--cvd-accent:${v.accent};" data-scroll-to="core-value-${v.num}">
            <img src="${v.src}" alt="${v.alt}" loading="lazy">
            <span><strong>${v.num}</strong>${v.name}</span>
          </a>
        `).join("")}
      </div>
    </section>
  `,
});

export const renderInternshipPolicy = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Work Policy", null], ["Internship Policy", null]],
  title: "Internship Policy",
  lead: "เรื่องพื้นฐานที่ intern ควรรู้เกี่ยวกับเวลาเข้างาน สถานที่ฝึกงาน และนับชั่วโมงฝึกงาน ⏰",
  body: `
    <!-- Policy Hero Banner V2 -->
    <div class="policy-hero-v2 anim-up">
      <div class="phv2-left">
        <div class="phv2-eyebrow">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="8" cy="8" r="7"/><path d="M8 5v3.5l2 2"/></svg>
          เวลาฝึกงาน
        </div>
        <div class="phv2-time">
          <span class="phv2-shift">9:00 – 18:00</span>
          <span class="phv2-or">หรือ</span>
          <span class="phv2-shift">10:00 – 19:00</span>
        </div>
        <p class="phv2-sub">จันทร์ – ศุกร์ · ขึ้นอยู่กับแผนกที่ได้รับมอบหมาย</p>
      </div>
      <div class="phv2-stats">
        <div class="phv2-stat">
          <span class="phv2-num" data-count-to="8">8</span>
          <span class="phv2-unit">ชั่วโมง</span>
          <span class="phv2-desc">ต่อวัน</span>
        </div>
        <div class="phv2-divider"></div>
        <div class="phv2-stat">
          <span class="phv2-num" data-count-to="1">1</span>
          <span class="phv2-unit">ชั่วโมง</span>
          <span class="phv2-desc">พักเที่ยง</span>
        </div>
        <div class="phv2-divider"></div>
        <div class="phv2-stat">
          <span class="phv2-num" data-count-to="15">15</span>
          <span class="phv2-unit">วัน</span>
          <span class="phv2-desc">หยุด/ปี</span>
        </div>
      </div>
    </div>

    <h2>ตารางวันทำงาน (แล้วแต่แผนก)</h2>
    <div class="shift-row anim-up">
      <div class="shift-item">
        <div class="shift-label">บางแผนก</div>
        <div class="shift-time">9:00 – 18:00</div>
        <div class="shift-noon">พักเที่ยง 12:00 – 13:00</div>
      </div>
      <div class="shift-divider">หรือ</div>
      <div class="shift-item">
        <div class="shift-label">บางแผนก</div>
        <div class="shift-time">10:00 – 19:00</div>
        <div class="shift-noon">พักเที่ยง 12:00 – 13:00</div>
      </div>
    </div>
    <div class="callout anim-up" style="margin-bottom:28px;">
      <span class="ic">${I.info}</span>
      <div>
        <h3>เวลาทำงานขึ้นอยู่กับแผนกที่ตัวเองอยู่</h3>
        <p>ถามพี่เลี้ยงหรือ HR ว่าแผนกของตัวเองยึดตามเวลาไหน - ทำงาน 8 ชม. (ไม่รวมพักเที่ยง 1 ชม.) จันทร์ – ศุกร์</p>
      </div>
    </div>

    <h2>ข้อกำหนดสำคัญ</h2>
    <div class="rule-grid">
      <div class="rule-card">
        <div class="rule-icon">${I.door}</div>
        <div class="rule-body">
          <h3>มาออฟฟิศ หรือสถานที่ที่ assign ไว้เท่านั้น</h3>
          <p>ต้องเข้าฝึกงานที่ออฟฟิศ EXZY หรือสถานที่ที่ทีม assign ไว้เท่านั้น <br><strong>ไม่อนุญาต WFH</strong> สำหรับ Intern แต่หากมีความจำเป็น ต้องแจ้งพี่เลี้ยง<br>และติดต่อ HR ก่อนเสมอ</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.clock}</div>
        <div class="rule-body">
          <h3>ลงเวลาเข้า – ออกทุกวัน ✏️</h3>
          <p>กรอก Timesheet ทุกวันที่มาทำงาน — บริษัทจะเซ็นรับรองตามชั่วโมงฝึกงานจริง</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.doc}</div>
        <div class="rule-body">
          <h3>ดูแลชั่วโมงและเอกสารของตัวเองด้วยนะ 🕐</h3>
          <p>บริหารชั่วโมงฝึกงานและรับผิดชอบเอกสารจากมหาวิทยาลัยด้วยตัวเอง <br>หากมีรายงาน แผนการฝึกงาน แบบประเมิน หรือเอกสารที่ต้องให้<br>พี่เลี้ยงและ HR เซ็น ให้ส่งล่วงหน้าอย่างน้อย <strong>1 อาทิตย์ หรือ 5 วันทำการ</strong> เพื่อเผื่อเวลาแก้ไข<br>และส่งทันกำหนดของมหาวิทยาลัย</p>
        </div>
      </div>
      <div class="rule-card">
        <div class="rule-icon">${I.calendar}</div>
        <div class="rule-body">
          <h3>วันหยุดบริษัท 15 วัน/ปี 🗓️</h3>
          <p>Subscribe Staff Holiday Calendar ไว้ได้เลย จะได้ไม่พลาดวันหยุดของบริษัท</p>
        </div>
      </div>
    </div>

  `,
});

export const renderDressCode = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Work Policy", null], ["Dress Code", null]],
  title: "Dress Code",
  lead: "แนวทางการแต่งกายที่ EXZY สามารถปรับตามแต่ละสถานการณ์",
  body: `
    <!-- Dress Hero V2 -->
    <div class="dress-hero-v2 anim-up">
      <div>
        <div class="dress-tag-v2" style="color:#ffffff;">EXZY Core Value · Aesthetic Design</div>
        <h2 style="color:var(--on-dark);">สะอาด เรียบร้อย เหมาะสม</h2>
        <p style="color:rgba(248,249,250,.82);">"สะอาดเรียบร้อย และเตรียมการแต่งกายให้เหมาะสม" — ตาม EXZY Core Values การแต่งกายที่ดี<br>คือส่วนหนึ่งของความเป็นมืออาชีพและสะท้อนค่านิยมของบริษัท</p>
      </div>
      <div class="dress-hero-img dress-hero-img--asset">
        <img src="./static/dress-code-outfits.png" alt="ตัวอย่างเสื้อผ้าและรองเท้าสำหรับแต่งกายแบบ Smart Casual ที่ EXZY" loading="lazy" />
      </div>
    </div>

    <h2>การแต่งกายในแต่ละสถานการณ์</h2>
    <div class="dress-grid-v2">
      <div class="dress-card-v2 anim-up">
        <div class="dress-card-v2-icon" style="background:var(--cyan-soft); color:var(--navy);">${I.shirt}</div>
        <div class="dress-card-v2-style" style="color:var(--navy);">Smart Casual</div>
        <h3>ฝึกงานที่ออฟฟิศ 🏢</h3>
        <ul>
          <li>เสื้อเชิ้ตแขนยาว/แขนสั้น เสื้อโปโล หรือเสื้อยืดสุภาพ</li>
          <li>กางเกงขายาวหรือกระโปรง (สแล็ค ผ้า หรือยีนส์)</li>
          <li>รองเท้าผ้าใบ คัทชู หรือรัดส้น</li>
        </ul>
      </div>
      <div class="dress-card-v2 anim-up" data-delay="80">
        <div class="dress-card-v2-icon" style="background:var(--mist); color:var(--ink);">${I.people}</div>
        <div class="dress-card-v2-style" style="color:var(--ink);">Business Casual</div>
        <h3>ฝึกงานนอกสถานที่ 🚗</h3>
        <ul>
          <li>ชุดนักศึกษา เสื้อเชิ้ตแขนยาว พร้อมสวมเบลเซอร์หรือสูททับ</li>
          <li>กางเกงขายาวหรือกระโปรง (สแล็ค ผ้า หรือยีนส์)</li>
          <li>รองเท้าผ้าใบ คัทชู หรือรัดส้น</li>
        </ul>
      </div>
    </div>

    <h2>สิ่งที่ไม่ควรใส่</h2>
    <div class="dress-dont-grid">
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> เสื้อกล้าม / เสื้อแขนกุด</div>
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> กางเกงขาสั้น (เหนือเข่า)</div>
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> รองเท้าแตะ (สามารถนำมาเปลี่ยนได้หากมีความจำเป็น เช่น ฝนตกหรือบาดเจ็บ)</div>
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> เสื้อผ้ารัดรูป / โป๊เปลือยเกินไป</div>
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> เสื้อที่มีลายไม่เหมาะสมในที่ทำงาน</div>
      <div class="dress-dont-item"><span class="dress-dont-x">✕</span> ชุดออกกำลังกาย</div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.sparkle}</span>
      <div>
        <h4>เมื่อไม่แน่ใจ ให้สังเกตเพื่อนร่วมงานคนอื่นดู 👀</h4>
        <p>ลองดูว่าพี่ ๆ ในออฟฟิศแต่งตัวกันยังไง หากสงสัยสามารถถามพี่เลี้ยงได้เลย</p>
      </div>
    </div>
  `,
});

export const renderLeave = () => {
  const { hr_email: hrEmail = "hr@exzyteam.com" } = loadAdminData();
  return pageWrap({
  crumbs: [["Home", "#/home"], ["Work Policy", null], ["Leave & Absence", null]],
  title: "Leave & Absence",
  lead: "ป่วยหรือมีธุระ — แจ้งพี่เลี้ยงและส่งอีเมล HR ตามขั้นตอนนี้",
  body: `
    <h2>วิธีการลางาน — 3 ขั้นตอน</h2>

    <div class="leave-process">
      <div class="leave-step anim-left" data-delay="0">
        <div class="leave-step-node">1</div>
        <div class="leave-step-card">
          <h4>แจ้งพี่เลี้ยงและทีม 💬</h4>
          <p>แจ้งขอลากับพี่เลี้ยงและทีมก่อนเป็นอันดับแรก ก่อนส่งอีเมลให้ HR</p>
        </div>
      </div>
      <div class="leave-step anim-left" data-delay="100">
        <div class="leave-step-node">2</div>
        <div class="leave-step-card">
          <h4>ส่งอีเมลแจ้งการลาให้ HR ✉️</h4>
          <p>ส่งอีเมลแจ้งลาไปที่ <a href="mailto:${hrEmail}" class="inline-link">${hrEmail}</a> ระบุเหตุผลและจำนวนวันที่จะลา</p>
        </div>
      </div>
      <div class="leave-step anim-left" data-delay="200">
        <div class="leave-step-node">3</div>
        <div class="leave-step-card">
          <h4>CC อีเมลพี่เลี้ยงและทีม 📤</h4>
          <p>CC อีเมลไปหาพี่เลี้ยงและทีมในอีเมลเดียวกันกับ HR เพื่อให้ทุกคนรับทราบ</p>
        </div>
      </div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.info}</span>
      <div>
        <h4>วันที่ลาจะไม่นับเป็นชั่วโมงฝึกงาน</h4>
        <p>บริษัทเซ็นรับรองตามชั่วโมงฝึกงานจริงเท่านั้น หากลาบ่อยอาจส่งผลต่อชั่วโมงฝึกงานที่ต้องยืนยันกับทางมหาวิทยาลัย จัดการวันลาและชั่วโมงฝึกงานให้ดีนะ!</p>
      </div>
    </div>

    <h2>กำหนดเวลาแจ้งลา</h2>
    <div class="leave-deadline-row">
      <div class="leave-dl-card leave-dl-sick anim-up">
        <div class="leave-dl-type">🤒 ลาป่วย</div>
        <div class="leave-dl-time">แจ้ง HR ก่อน 11:00 น.</div>
        <div class="leave-dl-note">ของวันที่ลางาน</div>
      </div>
      <div class="leave-dl-card leave-dl-biz anim-up" data-delay="80">
        <div class="leave-dl-type">📋 ลากิจธุระ</div>
        <div class="leave-dl-time">แจ้ง HR ล่วงหน้า 1 วัน</div>
        <div class="leave-dl-note">วันทำการก่อนวันลา</div>
      </div>
    </div>

    <div class="callout anim-up">
      <span class="ic">${I.shield}</span>
      <div>
        <h4>หากลามากเกินไป จะเกิดอะไรขึ้น?</h4>
        <p>ถ้าลาบ่อยจนเกินไปและทีมเห็นว่าไม่เหมาะสม บริษัทอาจพิจารณายุติการฝึกงานและแจ้งมหาวิทยาลัย หากมีปัญหาอะไรลองปรึกษาพี่เลี้ยงก่อนดีที่สุด</p>
      </div>
    </div>
  `,
});
};
