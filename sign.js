const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function go() {
  var email = document.myform.email.value;
  var password = document.myform.password.value;

  if (email == "" || password == "") {
    alert("Enter Email and Password");
    return false;
  }

}
