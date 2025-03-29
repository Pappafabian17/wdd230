  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirmPassword");
  const message = document.querySelector("#passwordError");
  const form = document.querySelector("#form");

  confirmPassword.addEventListener("focusout", checkPasswords);
  form.addEventListener("submit", function (e) {
    if (password.value !== confirmPassword.value) {
      e.preventDefault(); 
      showError();
    }
  });

  function checkPasswords() {
    if (password.value !== confirmPassword.value) {
      showError();
    } else {
      message.style.display = "none";
      confirmPassword.style.backgroundColor = "#fff";
      password.style.backgroundColor = "#fff";
    }
  }

  function showError() {
    message.textContent = "❗Passwords do not match. Please try again.";
    message.style.display = "block";
    password.style.backgroundColor = "#fff0f3";
    confirmPassword.style.backgroundColor = "#fff0f3";
    password.value = "";
    confirmPassword.value = "";
    password.focus();
  }
