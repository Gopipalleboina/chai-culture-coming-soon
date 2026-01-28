const emailInput = document.getElementById("email");
const notifyBtn = document.getElementById("notifyBtn");

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  notifyBtn.disabled = !emailRegex.test(email);
});

notifyBtn.addEventListener("click", () => {
  
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = "Thank you for joining Chai Culture ☕ You’ll be notified when we launch.";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);


  emailInput.value = "";
  notifyBtn.disabled = true;
});
