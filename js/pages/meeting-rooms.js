import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';

export const renderMeetingRooms = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Getting Started", null], ["Meeting Rooms", null]],
  title: "Meeting Rooms",
  lead: "ห้องประชุมในออฟฟิศ EXZY มีทั้งหมด 4 ห้อง โดยจะอยู่ที่ชั้น 1 และชั้น 2",
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
        <div class="mr-ov-icon-wrap"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <span class="mr-ov-num">2–8</span>
        <span class="mr-ov-lbl">ท่าน/ห้อง</span>
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
          <img class="mr-room-photo" src="./static/meeting-room-xcellent.jpg" alt="ภายในห้องประชุม Xcellent พร้อมโต๊ะประชุมและจอ" loading="lazy" style="object-position: center 70%;" />
          <div class="mr-v2-vis-cap">${I.people}&ensp;6–8 ท่าน</div>
        </div>
        <div class="mr-v2-info">
          <div class="mr-v2-head">
            <div class="mr-v2-name"><span>X</span>cellent</div>
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
            <img class="mr-room-photo mr-room-photo-sm" src="./static/meeting-room-xpert-area.jpg" alt="พื้นที่ประชุม Xpert Area พร้อมโต๊ะประชุม จอ และเก้าอี้" loading="lazy" />
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>pert Area</div>
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
            <div class="mr-room-gallery" aria-label="รูปห้อง Xtream Room">
              <img class="mr-room-photo mr-room-photo-sm" src="./static/meeting-room-xtream-front.jpg" alt="มุมหน้าห้อง Xtream Room พร้อมป้ายห้องและจอจองห้อง" loading="lazy" />
              <img class="mr-room-photo mr-room-photo-sm" src="./static/meeting-room-xtream-inside.jpg" alt="ภายในห้อง Xtream Room พร้อมโต๊ะประชุม จอ และเก้าอี้" loading="lazy" />
            </div>
            <div class="mr-room-gallery-dots" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>tream Room</div>
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
            <div class="mr-room-gallery" aria-label="รูปห้อง Xtra Room">
              <img class="mr-room-photo mr-room-photo-sm" src="./static/meeting-room-xtra.jpg" alt="มุมหน้าห้อง Xtra Room พร้อมป้ายห้องและจอจองห้อง" loading="lazy" />
              <img class="mr-room-photo mr-room-photo-sm" src="./static/meeting-room-xtra-inside.jpg" alt="ภายในห้อง Xtra Room" loading="lazy" />
            </div>
            <div class="mr-room-gallery-dots" aria-hidden="true">
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="mr-v2-card-body">
            <div class="mr-v2-card-head">
              <div class="mr-v2-card-name"><span>X</span>tra Room</div>
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

    <div class="callout anim-up">
      <span class="ic">${I.people}</span>
      <div>
        <h4>การจองห้องประชุม</h4>
        <p>Intern ไม่สามารถจองห้องประชุมได้เอง หากต้องการใช้ห้องประชุม ให้แจ้งพี่เลี้ยงของตัวเองเพื่อให้พี่เลี้ยงจองห้องให้</p>
      </div>
    </div>

    <div class="callout anim-up" style="margin-top:12px;">
      <span class="ic">${I.info}</span>
      <div>
        <h4>ก่อนออกจากห้อง</h4>
        <p>เก็บอุปกรณ์ ปิดไฟ ปิดจอ และทิ้งขยะก่อนออกทุกครั้ง</p>
      </div>
    </div>

  `,
});
