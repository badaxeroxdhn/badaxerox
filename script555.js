const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener('click', () => {
  // Show loader on button click
  loginBtn.classList.add("loading");
  // Hide loader after success/failure - here it will hide after 2seconds
  setTimeout(() => loginBtn.classList.remove("loading"), 3000);
});