// Navigation is native anchor scrolling; this file adds a small touch-friendly
// toggle so package cards can reveal their details on tap as well as hover.
document.querySelectorAll(".package-card").forEach((card) => {
  card.addEventListener("click", () => {
    const wasActive = card.classList.contains("is-active");
    document.querySelectorAll(".package-card.is-active").forEach((item) => {
      item.classList.remove("is-active");
    });
    if (!wasActive) card.classList.add("is-active");
  });
});
