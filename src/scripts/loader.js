addEventListener("DOMContentLoaded", () => {
  document.querySelector(".loader").classList.add("loaded");
  setTimeout(() => {
    document.querySelector("main").classList.add("loaded-content");
    document.querySelector(".drake").classList.add("from-left");
  }, 1600);
});
