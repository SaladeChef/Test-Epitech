/* ── Theme toggle ────────────────────────────────── */
const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.checked = true;
}

toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
});
