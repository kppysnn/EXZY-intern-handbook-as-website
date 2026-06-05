import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';

export const renderMeetingRooms = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Getting Started", null], ["Meeting Rooms", null]],
  title: "Meeting Rooms",
  lead: "ห้องประชุมในออฟฟิศ EXZY มีทั้งหมด 4 ห้องกระจายอยู่ใน 2 ชั้น — จองได้หลายช่องทางตามสะดวก",
  body: `
    <!-- Overview Stats -->
    <div class="mr-overview anim-up">
      <div class="mr-ov-item">
        <div class="mr-ov-icon-wrap">${I.door}</div>
        <span class="mr-ov-num" data-count-to="4">4</span>
        <span class="mr-ov-lbl">ห้องประชุม</span>
      </div>
      <div class="mr-ov-sep"></div>
      <div class="mr-ov-item">
        <div class="mr-ov-icon-wrap"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/></svg></div>
        <span class="mr-ov-num" data-count-to="2">2</span>
        <span class="mr-ov-lbl">ชั้น</span>
      </div>
      <div class="mr-ov-sep"></div>
      <div class="mr-ov-item">
        <div class="mr-ov-icon-wrap">${I.calendar}</div>
        <span class="mr-ov-num">3</span>
        <span class="mr-ov-lbl">วิธีการจอง</span>
      </div>
    </div>

    <!-- Floor 1 -->
    <div class="mr-v2-section">
      <div class="mr-v2-floor-label anim-left">
        <span class="mr-v2-floor-badge">ชั้น 1</span>
        <div class="mr-v2-floor-line"></div>
        <span class="mr-v2-floor-cnt">1 ห้อง</span>
      </div>

      <div class="mr-v2-main anim-up" data-delay="80">
        <div class="mr-v2-vis">
          <svg class="mr-room-plan" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="224" height="144" rx="10" stroke="rgba(102,197,197,0.45)" stroke-width="2" fill="rgba(102,197,197,0.04)"/>
            <rect x="58" y="46" width="124" height="68" rx="6" stroke="rgba(0,64,129,0.35)" stroke-width="2" fill="rgba(0,64,129,0.07)"/>
            <rect x="38" y="57" width="12" height="10" rx="2" fill="rgba(0,64,129,0.22)"/><rect x="38" y="74" width="12" height="10" rx="2" fill="rgba(0,64,129,0.22)"/>
            <rect x="190" y="57" width="12" height="10" rx="2" fill="rgba(0,64,129,0.22)"/><rect x="190" y="74" width="12" height="10" rx="2" fill="rgba(0,64,129,0.22)"/>
            <rect x="70" y="28" width="12" height="11" rx="2" fill="rgba(0,64,129,0.22)"/><rect x="100" y="28" width="12" height="11" rx="2" fill="rgba(0,64,129,0.22)"/><rect x="130" y="28" width="12" height="11" rx="2" fill="rgba(0,64,129,0.22)"/><rect x="160" y="28" width="12" height="11" rx="2" fill="rgba(0,64,129,0.22)"/>
            <rect x="70" y="121" width="12" height="11" rx="2" fill="rgba(0,64,129,0.22)"/><rect x="100" y="121" width="12" height="11" rx="2" fill="rgba(0,64,129,0.22)"/><rect x="130" y="121" width="12" height="11" rx="2" fill="rgba(0,64,129,0.22)"/><rect x="160" y="121" width="12" height="11" rx="2" fill="rgba(0,64,129,0.22)"/>
            <rect x="18" y="56" width="6" height="48" rx="3" fill="rgba(102,197,197,0.55)"/>
            <circle cx="120" cy="80" r="22" stroke="rgba(102,197,197,0.18)" stroke-width="1.5" fill="none"/>
          </svg>
          <div class="mr-v2-vis-cap">${I.people}&ensp;6–8 ท่าน</div>
        </div>
        <div class="mr-v2-info">
          <div class="mr-v2-head">
            <div class="mr-v2-name"><span>X</span>cellent</div>
            <span class="mr-room-badge mr-room-closed">ห้องปิด</span>
          </div>
          <p class="mr-v2-desc">ห้องประชุมหลักของออฟฟิศ เหมาะสำหรับการประชุมภายในทีม และการรับรองลูกค้าหรือแขกจากภายนอก</p>
          <div class="mr-v2-meta">
            <div class="mr-v2-meta-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              6–8 คน
            </div>
            <div class="mr-v2-meta-item">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
              ชั้น 1
            </div>
          </div>
          <div class="mr-v2-tags">
            <span class="mr-v2-tag">ประชุมภายใน</span>
            <span class="mr-v2-tag">รับรองลูกค้า / แขก</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Floor 2 -->
    <div class="mr-v2-section">
      <div class="mr-v2-floor-label anim-left" data-delay="80">
        <span class="mr-v2-floor-badge">ชั้น 2</span>
        <div class="mr-v2-floor-line"></div>
        <span class="mr-v2-floor-cnt">3 ห้อง</span>
      </div>

      <div class="mr-v2-grid">
        <div class="mr-v2-card anim-up" data-delay="100">
          <div class="mr-v2-card-vis">
            <svg viewBox="0 0 160 96" fill="none">
              <rect x="5" y="5" width="150" height="86" rx="6" stroke="rgba(102,197,197,0.4)" stroke-width="1.5" fill="rgba(102,197,197,0.04)"/>
              <rect x="20" y="26" width="34" height="20" rx="3" stroke="rgba(0,64,129,0.3)" stroke-width="1.5" fill="rgba(0,64,129,0.06)"/>
              <rect x="63" y="26" width="34" height="20" rx="3" stroke="rgba(0,64,129,0.3)" stroke-width="1.5" fill="rgba(0,64,129,0.06)"/>
              <rect x="106" y="26" width="34" height="20" rx="3" stroke="rgba(0,64,129,0.3)" stroke-width="1.5" fill="rgba(0,64,129,0.06)"/>
              <rect x="42" y="58" width="76" height="16" rx="3" stroke="rgba(0,64,129,0.3)" stroke-width="1.5" fill="rgba(0,64,129,0.06)"/>
            </svg>
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>pert Area</div>
              <span class="mr-room-badge mr-room-open">พื้นที่เปิด</span>
            </div>
            <div class="mr-v2-cap">${I.people}<span>6–8 ท่าน</span></div>
            <p class="mr-v2-card-desc">พื้นที่โต๊ะประชุมแบบเปิดโล่ง เหมาะสำหรับระดมความคิดและประชุมกลุ่ม</p>
            <div class="mr-v2-tags">
              <span class="mr-v2-tag">ประชุมกลุ่ม</span>
              <span class="mr-v2-tag">ระดมความคิด</span>
            </div>
          </div>
        </div>

        <div class="mr-v2-card anim-up" data-delay="200">
          <div class="mr-v2-card-vis">
            <svg viewBox="0 0 160 96" fill="none">
              <rect x="5" y="5" width="150" height="86" rx="6" stroke="rgba(102,197,197,0.4)" stroke-width="1.5" fill="rgba(102,197,197,0.04)"/>
              <rect x="42" y="32" width="76" height="38" rx="4" stroke="rgba(0,64,129,0.3)" stroke-width="1.5" fill="rgba(0,64,129,0.06)"/>
              <rect x="24" y="39" width="10" height="9" rx="2" fill="rgba(0,64,129,0.22)"/>
              <rect x="126" y="39" width="10" height="9" rx="2" fill="rgba(0,64,129,0.22)"/>
              <rect x="52" y="18" width="10" height="8" rx="2" fill="rgba(0,64,129,0.22)"/>
              <rect x="75" y="18" width="10" height="8" rx="2" fill="rgba(0,64,129,0.22)"/>
              <rect x="98" y="18" width="10" height="8" rx="2" fill="rgba(0,64,129,0.22)"/>
            </svg>
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>tream Room</div>
              <span class="mr-room-badge mr-room-closed">ห้องปิด</span>
            </div>
            <div class="mr-v2-cap">${I.people}<span>3–5 ท่าน</span></div>
            <p class="mr-v2-card-desc">ห้องขนาดกลาง เหมาะสำหรับประชุมกลุ่มเล็กหรือ Workshop</p>
            <div class="mr-v2-tags">
              <span class="mr-v2-tag">ประชุมกลุ่มเล็ก</span>
              <span class="mr-v2-tag">Workshop</span>
            </div>
          </div>
        </div>

        <div class="mr-v2-card anim-up" data-delay="300">
          <div class="mr-v2-card-vis">
            <svg viewBox="0 0 160 96" fill="none">
              <rect x="5" y="5" width="150" height="86" rx="6" stroke="rgba(102,197,197,0.4)" stroke-width="1.5" fill="rgba(102,197,197,0.04)"/>
              <rect x="54" y="32" width="52" height="30" rx="4" stroke="rgba(0,64,129,0.3)" stroke-width="1.5" fill="rgba(0,64,129,0.06)"/>
              <rect x="35" y="37" width="10" height="9" rx="2" fill="rgba(0,64,129,0.22)"/>
              <rect x="115" y="37" width="10" height="9" rx="2" fill="rgba(0,64,129,0.22)"/>
              <rect x="63" y="18" width="10" height="8" rx="2" fill="rgba(0,64,129,0.22)"/>
              <rect x="87" y="18" width="10" height="8" rx="2" fill="rgba(0,64,129,0.22)"/>
            </svg>
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>tar Room</div>
              <span class="mr-room-badge mr-room-closed">ห้องปิด</span>
            </div>
            <div class="mr-v2-cap">${I.people}<span>2–3 ท่าน</span></div>
            <p class="mr-v2-card-desc">ห้องขนาดเล็ก เหมาะสำหรับ 1:1 หรือประชุมสั้นเฉพาะกิจ</p>
            <div class="mr-v2-tags">
              <span class="mr-v2-tag">1:1</span>
              <span class="mr-v2-tag">Quick Sync</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="callout callout-warn anim-up">
      <span class="ic">${I.info}</span>
      <div>
        <h4>⚠️ Intern ไม่สามารถจองห้องประชุมเองได้โดยตรง</h4>
        <p>หากต้องการใช้ห้องประชุม ให้แจ้งพี่เลี้ยงเพื่อให้พี่เลี้ยงจองแทน — ระบบการจองสงวนสิทธิ์เฉพาะพนักงาน EXZY เท่านั้น</p>
      </div>
    </div>

    <!-- Booking Methods V2 -->
    <h2>วิธีการจอง (สำหรับพนักงาน)</h2>
    <p class="mr-book-lead">พี่เลี้ยงสามารถจองผ่าน 3 ช่องทางนี้ได้ตามสะดวก</p>
    <div class="book-method-grid">
      <div class="book-method-card anim-up" data-delay="0">
        <div class="book-method-num">01</div>
        <div class="book-method-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <h4>Website</h4>
        <p><a href="https://exzyoffice.exzycloud.com" target="_blank" rel="noopener" class="inline-link">exzyoffice.exzycloud.com</a><br/>จองผ่านเว็บไซต์ได้ทุกอุปกรณ์</p>
      </div>
      <div class="book-method-card anim-up" data-delay="100">
        <div class="book-method-num">02</div>
        <div class="book-method-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M3 9h6M3 15h6"/></svg>
        </div>
        <h4>จองหน้าห้อง</h4>
        <p>แตะที่แผงหน้าจอหน้าห้อง เพื่อดูตารางและจองช่วงว่างได้เลย</p>
      </div>
      <div class="book-method-card anim-up" data-delay="200">
        <div class="book-method-num">03</div>
        <div class="book-method-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/></svg>
        </div>
        <h4>App W+</h4>
        <p>ดาวน์โหลดแอป W+ บนมือถือ — จองและดูตารางห้องได้ทุกที่ทุกเวลา</p>
      </div>
    </div>

    <div class="callout" style="margin-top:28px;">
      <span class="ic">${I.info}</span>
      <div>
        <h4>ก่อนออกจากห้อง</h4>
        <p>เก็บอุปกรณ์ ปิดไฟ ปิดจอ และทิ้งขยะก่อนออกทุกครั้ง — ถ้าเจออุปกรณ์มีปัญหาแจ้ง IT ได้เลย</p>
      </div>
    </div>

    <div class="page-cta-strip">
      <div>
        <h4>ดูได้เลยว่าแต่ละทีมทำอะไร</h4>
        <p>โครงสร้างองค์กร EXZY — รู้ไว้จะได้รู้ว่าติดต่อใครตอนไหน</p>
      </div>
      <div class="cta-btns">
        <a href="#/employee/org-chart" class="btn btn-primary" data-link>โครงสร้างองค์กร ${I.arrow}</a>
      </div>
    </div>
  `,
});
