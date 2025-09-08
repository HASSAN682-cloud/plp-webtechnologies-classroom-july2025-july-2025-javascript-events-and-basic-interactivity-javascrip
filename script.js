// ===== Feature 1: Button Click =====
const colorBtn = document.getElementById("colorBtn");
const colorMessage = document.getElementById("colorMessage");
const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];

colorBtn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  colorMessage.textContent = `Background changed to ${randomColor}`;
});

// ===== Feature 2: Hover Box =====
const hoverBox = document.getElementById("hoverBox");
const hoverInfo = document.getElementById("hoverInfo");

hoverBox.addEventListener("mouseover", () => {
  hoverInfo.textContent = "You are hovering!";
  hoverBox.classList.add("highlight");
});

hoverBox.addEventListener("mouseout", () => {
  hoverInfo.textContent = "";
  hoverBox.classList.remove("highlight");
});

// ===== Feature 3: Toggle Content =====
const toggleBtn = document.getElementById("toggleBtn");
const toggleContent = document.getElementById("toggleContent");

toggleBtn.addEventListener("click", () => {
  toggleContent.classList.toggle("hidden");
});

// ===== Feature 4: Custom Form Validation =====
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop normal form submission

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  if (username.length < 3) {
    errors.push("Username must be at least 3 characters.");
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errors.push("Enter a valid email address.");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  if (errors.length > 0) {
    formMessage.style.color = "red";
    formMessage.innerHTML = errors.join("<br>");
  } else {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
    form.reset();
  }
});