import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';

export const renderWifi = () => pageWrap({
  crumbs: [["Home", "#/home"], ["Company & Office", null], ["Office Wi-Fi", null]],
  title: "Office Wi-Fi",
  lead: "เลือกเครือข่ายที่ใช้งาน แล้วสแกน QR หรือคัดลอกรหัสผ่านได้เลย",
  body: `
    <!-- Network type selector -->
    <div class="wn-selector">
      <button class="wn-sel-btn wn-sel-active" data-wifi-tab-v2="staff">
        <span class="wn-sel-pip"></span>
        <div class="wn-sel-info">
          <span class="wn-sel-title">พนักงาน / Intern</span>
          <span class="wn-sel-ssid">ExzyUniFi</span>
        </div>
      </button>
      <button class="wn-sel-btn wn-sel-guest" data-wifi-tab-v2="guest">
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
        <!-- QR side -->
        <div class="wn-qr-side">
          <div class="wn-qr-box">
            <div class="wn-qr" data-qr="staff"></div>
          </div>
          <p class="wn-qr-tip">เปิดกล้อง → ชี้ที่ QR → กด เชื่อมต่อ</p>
        </div>
        <!-- Info side -->
        <div class="wn-info-side">
          <div class="wn-network-badge">STAFF NETWORK</div>
          <div class="wn-cred">
            <div class="wn-cred-row">
              <span class="wn-cred-k">Network (SSID)</span>
              <div class="wn-cred-v">
                <code data-text="wifi_staff_ssid">ExzyUniFi</code>
                <button class="wn-copy" data-copy="wifi_staff_ssid" title="คัดลอก">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="wn-cred-row">
              <span class="wn-cred-k">Password</span>
              <div class="wn-cred-v">
                <code class="wifi-pass-dots" id="v2-staff-pass-display">••••••••</code>
                <button class="wn-copy" id="v2-staff-pass-toggle" title="แสดง">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
                <button class="wn-copy" data-copy="wifi_staff_pass" title="คัดลอก">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
          </div>
          <button class="wn-connect-btn wf2-connect-btn" data-wifi="staff">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
            คัดลอกรหัสผ่าน
          </button>
          <p class="wn-note">สำหรับพนักงาน / Intern เท่านั้น — ไม่แชร์กับบุคคลภายนอก</p>
        </div>
      </div>
    </div>

    <!-- Guest panel -->
    <div class="wn-panel wn-panel-guest" data-wifi-panel-v2="guest" hidden>
      <div class="wn-main">
        <div class="wn-qr-side">
          <div class="wn-qr-box wn-qr-box-guest">
            <div class="wn-qr" data-qr="guest"></div>
          </div>
          <p class="wn-qr-tip">เปิดกล้อง → ชี้ที่ QR → กด เชื่อมต่อ</p>
        </div>
        <div class="wn-info-side">
          <div class="wn-network-badge wn-badge-guest">GUEST NETWORK</div>
          <div class="wn-cred">
            <div class="wn-cred-row">
              <span class="wn-cred-k">Network (SSID)</span>
              <div class="wn-cred-v">
                <code data-text="wifi_guest_ssid">Exzy_Guest</code>
                <button class="wn-copy" data-copy="wifi_guest_ssid" title="คัดลอก">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
            <div class="wn-cred-row">
              <span class="wn-cred-k">Password</span>
              <div class="wn-cred-v">
                <code class="wifi-pass-dots" id="v2-guest-pass-display">••••••••</code>
                <button class="wn-copy" id="v2-guest-pass-toggle" title="แสดง">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
                <button class="wn-copy" data-copy="wifi_guest_pass" title="คัดลอก">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
            </div>
          </div>
          <button class="wn-connect-btn wn-connect-guest wf2-connect-btn" data-wifi="guest">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
            คัดลอกรหัสผ่าน
          </button>
          <p class="wn-note">สำหรับแขกที่มาที่ออฟฟิศ — แชร์เฉพาะกับคนที่มาพบกันจริง ๆ</p>
        </div>
      </div>
    </div>

    <!-- How to connect steps redesign -->
    <div class="wn-how-v2">
      <div class="wn-how-v2-head">
        <span class="wn-how-v2-label">วิธีเชื่อมต่อ</span>
        <p class="wn-how-v2-sub">ทำได้ 2 วิธี เลือกวิธีที่สะดวกได้เลย</p>
      </div>
      <div class="wn-how-v2-tracks">
        <div class="wn-how-v2-track wn-how-v2-qr">
          <div class="wn-how-v2-track-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h.01M14 18h3M17 14v4M20 14v.01M20 18v.01"/></svg>
          </div>
          <div class="wn-how-v2-track-title">วิธีที่ 1 — สแกน QR</div>
          <ol class="wn-how-v2-steps">
            <li>เปิดกล้องมือถือ</li>
            <li>ชี้ที่ QR ด้านบน</li>
            <li>กดลิงก์ที่ขึ้นมา — เชื่อมต่อทันที</li>
          </ol>
        </div>
        <div class="wn-how-v2-divider">
          <span>หรือ</span>
        </div>
        <div class="wn-how-v2-track wn-how-v2-manual">
          <div class="wn-how-v2-track-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </div>
          <div class="wn-how-v2-track-title">วิธีที่ 2 — ใส่รหัสเอง</div>
          <ol class="wn-how-v2-steps">
            <li>ไปที่ตั้งค่า Wi-Fi</li>
            <li>เลือกชื่อเครือข่าย (SSID)</li>
            <li>กด "คัดลอกรหัสผ่าน" แล้ววาง</li>
          </ol>
        </div>
      </div>
    </div>

    <div class="callout" style="margin-top:28px;">
      <span class="ic">${I.shield}</span>
      <div>
        <h4>รักษาความปลอดภัย</h4>
        <p>รหัส Staff Wi-Fi ใช้ภายในบริษัทเท่านั้น — ถ้าเชื่อมต่อไม่ได้ให้แจ้ง IT หรือพี่ในทีม</p>
      </div>
    </div>
  `,
});
