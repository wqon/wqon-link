function killHash() {
  if (location.hash.length <= 1) {
    history.replaceState(
      null,
      document.title,
      location.pathname + location.search,
    );
  }

  if (location.hash === "#subscribed") {
    setTimeout(() => {
      history.replaceState(
        null,
        document.title,
        location.pathname + location.search,
      );
      document.getElementById("subscribed").style.display = "none";
      document.querySelector(".subscribe").style.display = "block";
    }, 8000);
  }
}

killHash();

window.addEventListener("hashchange", killHash);
