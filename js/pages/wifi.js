import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';

export const renderWifi = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Company & Office", null], ["Office Wi-Fi", null]],
  title: "Office Wi-Fi",
  lead: "เลือกเครือข่ายที่ต้องใช้ — คัดลอกชื่อ SSID ได้เลย รหัสผ่านขอจาก HR ได้โดยตรง 📶",
  body: `
    <!-- Network type selector -->
    <div class="wn-selector">
      <button type="button" class="wn-sel-btn wn-sel-active" data-wifi-tab-v2="staff">
        <span class="wn-sel-pip"></span>
        <div class="wn-sel-info">
          <span class="wn-sel-title">พนักงาน / Intern</span>
          <span class="wn-sel-ssid">ExzyUniFi</span>
        </div>
      </button>
      <button type="button" class="wn-sel-btn wn-sel-guest" data-wifi-tab-v2="guest">
        <span class="wn-sel-pip wn-pip-guest"></span>
        <div class="wn-sel-info">
          <span class="wn-sel-title">แขก (Guest)</span>
          <span class="wn-sel-ssid">Exzy_Guest</span>
        </div>
      </button>
    </div>

    <!-- Staff panel -->
    <div class="wn-panel" data-wifi-panel-v2="staff">
      <div class="wn-main">
        <!-- Info side (full width — no QR since password is not stored here) -->
        <div class="wn-info-side" style="flex:1;">
          <div class="wn-network-badge">STAFF NETWORK</div>
          <div class="wn-cred">
            <div class="wn-cred-row">
              <span class="wn-cred-k">Network (SSID)</span>
              <div class="wn-cred-v">
                <code data-text="wifi_staff_ssid">ExzyUniFi</code>
                <button type="button" class="wn-copy" data-copy="wifi_staff_ssid" title="คัดลอก">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="wn-cred-row">
              <span class="wn-cred-k">Password</span>
              <div class="wn-cred-v wn-pass-hr-row">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;opacity:.55;"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span class="wn-pass-hr-label">ติดต่อ HR เพื่อขอรหัสผ่าน</span>
              </div>
            </div>
          </div>
          <p class="wn-note">สำหรับพนักงาน / Intern เท่านั้น — ติดต่อ HR เพื่อขอรหัสผ่าน</p>
        </div>
      </div>
    </div>

    <!-- Guest panel -->
    <div class="wn-panel wn-panel-guest" data-wifi-panel-v2="guest" hidden>
      <div class="wn-main">
        <div class="wn-info-side" style="flex:1;">
          <div class="wn-network-badge wn-badge-guest">GUEST NETWORK</div>
          <div class="wn-cred">
            <div class="wn-cred-row">
              <span class="wn-cred-k">Network (SSID)</span>
              <div class="wn-cred-v">
                <code data-text="wifi_guest_ssid">Exzy_Guest</code>
                <button type="button" class="wn-copy" data-copy="wifi_guest_ssid" title="คัดลอก">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="wn-cred-row">
              <span class="wn-cred-k">Password</span>
              <div class="wn-cred-v wn-pass-hr-row">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;opacity:.55;"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span class="wn-pass-hr-label">ติดต่อ HR เพื่อขอรหัสผ่าน</span>
              </div>
            </div>
          </div>
          <p class="wn-note">สำหรับแขกที่มาที่ออฟฟิศ — ติดต่อพนักงานเพื่อขอรหัสผ่าน</p>
        </div>
      </div>
    </div>

    <!-- How to connect steps -->
    <div class="wn-how-v2">
      <div class="wn-how-v2-head">
        <span class="wn-how-v2-label">วิธีเชื่อมต่อ</span>
        <p class="wn-how-v2-sub">2 ขั้นตอน เสร็จในไม่กี่นาที ✅</p>
      </div>
      <div class="wn-how-v2-tracks">
        <div class="wn-how-v2-track wn-how-v2-qr">
          <div class="wn-how-v2-track-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div class="wn-how-v2-track-title">ขั้นตอนที่ 1 — ขอรหัสผ่านจาก HR 🔑</div>
          <ol class="wn-how-v2-steps">
            <li>ทักหา HR ผ่าน Line หรือถามตรง ๆ ที่ออฟฟิศ</li>
            <li>แจ้งว่าต้องการรหัส Wi-Fi สำหรับ Intern</li>
          </ol>
        </div>
        <div class="wn-how-v2-divider">
          <span>แล้ว</span>
        </div>
        <div class="wn-how-v2-track wn-how-v2-manual">
          <div class="wn-how-v2-track-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
          </div>
          <div class="wn-how-v2-track-title">ขั้นตอนที่ 2 — เชื่อมต่อ 📡</div>
          <ol class="wn-how-v2-steps">
            <li>ไปที่ตั้งค่า Wi-Fi</li>
            <li>เลือกชื่อเครือข่าย (SSID) จากด้านบน</li>
            <li>ใส่รหัสผ่านที่ได้จาก HR แล้วกดเชื่อมต่อ</li>
          </ol>
        </div>
      </div>
    </div>

    <div class="callout" style="margin-top:28px;">
      <span class="ic">${I.shield}</span>
      <div>
        <h4>รักษาความปลอดภัย</h4>
        <p>รหัส Staff Wi-Fi สำหรับพนักงานและ Intern เท่านั้น — ห้ามแชร์ให้บุคคลภายนอก ถ้าเชื่อมต่อไม่ได้ให้แจ้ง HR หรือพี่ในทีม</p>
      </div>
    </div>
  `,
});
