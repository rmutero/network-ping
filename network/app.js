// Mock Authentication
const DEMO_USER = {
  email: "user@example.com",
  password: "password123",
  name: "Polite Makamanzi"
};

// Login Form Handler
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", DEMO_USER.name);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Use: user@example.com / password123");
  }
});

// Protect Authenticated Pages
function requireAuth() {
  if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "index.html";
  }
}

// Logout Function
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  window.location.href = "index.html";
}

// Auto-run auth check on protected pages
if (window.location.pathname !== "/index.html" && !window.location.pathname.includes("index.html")) {
  requireAuth();
}