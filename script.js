function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("toggle-btn");

  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️"; 
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "🌙"; 
    localStorage.setItem("theme", "light");
  }
}

// Apply saved theme on page load
window.onload = function() {
  const savedTheme = localStorage.getItem("theme");
  const btn = document.getElementById("toggle-btn");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
};
