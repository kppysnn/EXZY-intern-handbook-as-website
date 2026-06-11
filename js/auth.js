const ADMIN_STORE_KEY = "exzy_admin_data_v1";
const ADMIN_SESSION_KEY = "exzy_admin_session";
export const ADMIN_PASSWORD = "hr@exzy";

export const DEFAULT_ADMIN_DATA = {
  wifi_staff_ssid: "ExzyUniFi",
  wifi_staff_pass: "maetyzxe",
  wifi_guest_ssid: "Exzy_Guest",
  wifi_guest_pass: "imaguest",
  hr_email: "hr@exzyteam.com",
  hr_name: "Ninan A. (นินัน)",
  hr_phone: "0926244471",
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

export function saveAdminData(data) {
  try {
    localStorage.setItem(ADMIN_STORE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("save failed", e);
    return false;
  }
}

export function isAdmin() {
  try {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
  } catch (e) {
    return false;
  }
}

export function setAdmin(state) {
  try {
    if (state) sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
    else sessionStorage.removeItem(ADMIN_SESSION_KEY);
  } catch (e) {}
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
