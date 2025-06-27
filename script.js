document.getElementById("auth-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Compila tutti i campi!");
    return;
  }

  // Salva nel localStorage come simulazione di login
  localStorage.setItem("nerdside_user", JSON.stringify({ username }));

  document.getElementById("welcome-message").textContent =
    `Benvenuto, ${username}!`;
  document.getElementById("auth-form").style.display = "none";
});

// Se l'utente è già loggato
const user = JSON.parse(localStorage.getItem("nerdside_user"));
if (user) {
  document.getElementById("welcome-message").textContent =
    `Bentornato, ${user.username}!`;
  document.getElementById("auth-form").style.display = "none";
}
