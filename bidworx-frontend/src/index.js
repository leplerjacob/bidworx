import { getAllClients, postNewUser } from "./fetch.js";
import Notification from "./Notification.js";
import checkIfLoggedIn from "./session.js";
import SignUpForm from "./SignupForm.js";
// const getAllClients = require('./fetch');

// Initial render of webpage
document.addEventListener("DOMContentLoaded", () => {
  toggleInitDisplay();
  init();
});

// Toggles display according to whether or not user is logged in. Before init(0)
function toggleInitDisplay() {
  if (checkIfLoggedIn()) {
    document.querySelector("section.login-signup").style.display = "none";
  } else {
    document.querySelector("section.dashboard").style.display = "none";
  }
}
// Components
function init() {
  signUpForm();
}

function signUpForm() {
  document.querySelector(".signup-button").addEventListener("click", () => {
    // const logSign = document.querySelector('section.login-signup')
    // logSign.style.display = 'none'

    const card = document.querySelector(".card");
    const loginSide = document.querySelector(".login");
    const signupSide = document.querySelector(".signup");
    loginSide.style.display = "none";
    signupSide.style.display = "none";
    card.className = "inner-card";
    card.innerHTML += SignUpForm();

    const form = document.querySelector(".form-register");
    console.log(form);
    form.addEventListener("submit", handleSignupSubmit);
    // Add event listener for submit of form
    // make fetch POST request to create new user
    // redirect to login-sign up form
    // login to start using dashboard
  });
}

function handleSignupSubmit(e) {
  e.preventDefault();
  e.target.disabled = true;
  const newUser = {
    client: {
      name: e.target.name.value,
      username: e.target.username.value,
    },
  };

  console.log(newUser, e, "hi");

  const postReq = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(newUser),
  };
  postNewUser(postReq).then((res) => {
    Notification(res).forEach((notify) => {
      const body = document.querySelector("body");
      body.innerHTML += notify;
      setTimeout(() => {
        const el = document.querySelector('.notify')
        el.remove()
      },5000);
    });
  });
}
