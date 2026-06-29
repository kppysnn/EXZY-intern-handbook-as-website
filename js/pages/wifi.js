import { I } from '../icons.js';
import { pageWrap } from '../helpers.js';
import { loadAdminData } from '../auth.js';

export const renderWifi = () => {
  const { hr_email: hrEmail = "hr@exzyteam.com" } = loadAdminData();
  return pageWrap({
  crumbs: [["Home", "#/home"], ["Company & Office", null], ["Office Wi-Fi", null]],
  title: "Office Wi-Fi",
  lead: "เชื่อมต่อ Wi-Fi และรหัสผ่านสำหรับพนักงานและแขก พร้อมวิธีติดต่อ HR หากต้องการความช่วยเหลือในการเชื่อมต่อ",
  body: `
    <!-- Network cards -->
    <div class="wifi-net-cards">
      <div class="wifi-net-card wifi-net-staff anim-up">
        <div class="wifi-net-badge">พนักงาน / Intern</div>
        <div class="wifi-net-label">Network (SSID)</div>
        <div class="wifi-net-ssid-row">
          <code class="wifi-net-ssid" data-text="wifi_staff_ssid">ExzyUniFi</code>
          <button type="button" class="wn-copy wifi-net-copy" data-copy="wifi_staff_ssid" title="คัดลอก SSID">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </button>
        </div>
        <div class="wifi-net-pass-row">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>ติดต่อ HR</span>
        </div>
      </div>

      <div class="wifi-net-card wifi-net-guest anim-up" data-delay="80">
        <div class="wifi-net-badge wifi-net-badge-guest">แขก (Guest)</div>
        <div class="wifi-net-label">Network (SSID)</div>
        <div class="wifi-net-ssid-row">
          <code class="wifi-net-ssid" data-text="wifi_guest_ssid">Exzy_Guest</code>
          <button type="button" class="wn-copy wifi-net-copy" data-copy="wifi_guest_ssid" title="คัดลอก SSID">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </button>
        </div>
        <div class="wifi-net-pass-row">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>ติดต่อ HR</span>
        </div>
      </div>
    </div>

    <!-- HR contact -->
    <div class="wifi-hr-block anim-up">
      <div class="wifi-hr-icon">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </div>
      <div class="wifi-hr-copy">
        <div class="wifi-hr-title">ติดต่อ HR</div>
        <p class="wifi-hr-sub">หากไม่ทราบรหัสผ่าน ติดต่อ HR ทางอีเมล</p>
        <a href="mailto:${hrEmail}" class="btn btn-primary wifi-hr-btn">${I.mail} ส่งอีเมลหา HR</a>
      </div>
    </div>

    <div class="callout anim-up" style="margin-top:8px;">
      <span class="ic">${I.shield}</span>
      <div>
        <h4>รหัส Staff Wi-Fi ห้ามแชร์นะ</h4>
        <p>ใช้ได้เฉพาะพนักงานและ Intern — ถ้าเชื่อมต่อไม่ได้ให้แจ้ง HR หรือพี่เลี้ยง</p>
      </div>
    </div>
  `,
});
};
