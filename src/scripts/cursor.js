const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("[data-cursor]").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add(el.dataset.cursor);
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove(el.dataset.cursor);
  });
});
