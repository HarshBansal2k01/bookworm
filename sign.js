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
  } else {
    document.getElementById("btnS").setAttribute("href", "/main.html");
  }
}

function go1() {
  var name = document.myform1.name.value;
  var email = document.myform1.email.value;
  var password = document.myform1.password.value;

  if (email == "" || password == "" || name == " ") {
    alert("Enter Name, Email and Password");
    return false;
  }
  else{
    document.getElementById("btn1").setAttribute("href", "/main.html");
  }

}
