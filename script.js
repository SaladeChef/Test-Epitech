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

/* ── Scroll nav ──────────────────────────────────── */
const container  = document.getElementById("snap-container");
const navBars    = document.querySelectorAll(".nav-bar");
const sections   = document.querySelectorAll(".snap-section");

// Clic sur une barre → scroll vers la section correspondante
navBars.forEach(bar => {
    bar.addEventListener("click", () => {
        const idx = parseInt(bar.dataset.index);
        sections[idx].scrollIntoView({ behavior: "smooth" });
    });
});

// Mise à jour de la barre active selon la section visible
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id  = entry.target.id;
            const idx = parseInt(id.replace("section-", ""));
            navBars.forEach(b => b.classList.remove("active"));
            navBars[idx].classList.add("active");
        }
    });
}, { threshold: 0.5 });

sections.forEach(s => observer.observe(s));
