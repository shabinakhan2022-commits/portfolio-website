// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseMsg = document.getElementById("responseMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
      responseMsg.textContent = "✅ Your message has been received!";
      responseMsg.classList.add("text-green-400");
      form.reset();
    } else {
      responseMsg.textContent = "⚠️ Please fill in all fields.";
      responseMsg.classList.add("text-red-400");
    }
  });
});
