const ADMIN_STORE_KEY = "exzy_admin_data_v1";

export const DEFAULT_ADMIN_DATA = {
  wifi_staff_ssid: "ExzyUniFi",
  wifi_staff_pass: "",
  wifi_guest_ssid: "Exzy_Guest",
  wifi_guest_pass: "",
  hr_email: "hr@exzyteam.com",
  orientation_slides_url: "./static/Mini-Internship-Orientation.pdf",
  orientation_pdf_url: "./static/Mini-Internship-Orientation.pdf",
};

export function loadAdminData() {
  try {
    const raw = localStorage.getItem(ADMIN_STORE_KEY);
    if (!raw) return { ...DEFAULT_ADMIN_DATA };
    const stored = JSON.parse(raw);
    const merged = { ...DEFAULT_ADMIN_DATA };
    for (const key of Object.keys(stored)) {
      // don't let empty strings override URL defaults
      if (stored[key] === "" && DEFAULT_ADMIN_DATA[key] !== "") continue;
      merged[key] = stored[key];
    }
    return merged;
  } catch (e) {
    return { ...DEFAULT_ADMIN_DATA };
  }
}

export function showToast(msg) {
  let t = document.getElementById("__toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "__toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t.__hideTimer);
  t.__hideTimer = setTimeout(() => t.classList.remove("show"), 2500);
}
