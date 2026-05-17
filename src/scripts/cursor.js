const cursor = document.querySelector(".cursor");
const offsetX = 6;
const offsetY = 6;

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + offsetX + "px";
  cursor.style.top = e.clientY + offsetY + "px";
});

document.querySelectorAll("[data-cursor]").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add(el.dataset.cursor);
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove(el.dataset.cursor);
  });
});
