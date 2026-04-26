document
  .querySelector(".subscribeForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const res = await fetch(form.action, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      window.location.hash = "subscribed";
    } else {
      alert(data.error || "An error occurred. Try again later.");
    }
  });
