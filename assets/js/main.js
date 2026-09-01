const form = document.querySelector("#quoteForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const d = new FormData(form);

    const msg = `Hello Udumalai Prince Packers and Movers,

I need a moving quote.

Name: ${d.get("name") || ""}
Phone: ${d.get("phone") || ""}
Moving From: ${d.get("from") || ""}
Moving To: ${d.get("to") || ""}
Service: ${d.get("service") || ""}
Move Date: ${d.get("date") || ""}
Message: ${d.get("message") || ""}`;

    const whatsappUrl =
      "https://wa.me/919442249180?text=" + encodeURIComponent(msg);

    window.open(whatsappUrl, "_blank");
  });
}