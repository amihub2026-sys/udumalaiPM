/* =========================
   MOBILE MENU
========================= */

const btn = document.querySelector(".hamb");
const menu = document.querySelector(".menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");

    const isOpen = menu.classList.contains("open");

    btn.setAttribute("aria-expanded", isOpen);
    btn.textContent = isOpen ? "✕" : "☰";
  });

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "☰";
    });
  });

  document.addEventListener("click", (e) => {
    const clickedInsideMenu = menu.contains(e.target);
    const clickedButton = btn.contains(e.target);

    if (!clickedInsideMenu && !clickedButton) {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "☰";
    }
  });
}


/* =========================
   REVEAL SECTIONS
========================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("show");
  });
}


/* =========================
   FOOTER CURRENT YEAR
========================= */

const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================
   WHATSAPP QUOTE FORM
========================= */

const form = document.querySelector("#quoteForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const movingFrom = data.get("from") || "";
    const movingTo = data.get("to") || "";
    const service = data.get("service") || "";
    const moveDate = data.get("date") || "";
    const message = data.get("message") || "";

    const whatsappMessage = `Hello Udumalai Prince Packers and Movers,

I need a moving quote.

Name: ${name}
Phone: ${phone}
Moving From: ${movingFrom}
Moving To: ${movingTo}
Service: ${service}
Move Date: ${moveDate}
Additional Details: ${message}`;

    const whatsappNumber = "919442249180";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
  });
}


/* =========================
   CLOSE MENU ON RESIZE
========================= */

window.addEventListener("resize", () => {
  if (window.innerWidth > 980 && menu && btn) {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    btn.textContent = "☰";
  }
});