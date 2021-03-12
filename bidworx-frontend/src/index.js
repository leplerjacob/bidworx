import {
  getAllClients,
  postNewUser,
  logInUser,
  postNewProject,
} from "./fetch.js";
import Notification from "./Notification.js";
import DisplayContracts from "./DisplayContracts.js";
import checkIfLoggedIn from "./session.js";
import SignUpForm from "./SignupForm.js";
import ToggleInitDisplay from "./ToggleInitDisplay.js";
import renderContractFullDetails from "./RenderContractFullDetails.js";
import MakeProjectForm from "./MakeProjectForm.js";
import ViewProjects from "./ViewProjects.js";
import ViewBids from "./ViewBids.js";
import LogUserOut from "./Logout.js";

// Initial render of webpage
document.addEventListener("DOMContentLoaded", () => {
  init();
});

// Components
function init() {
  ToggleInitDisplay(checkIfLoggedIn);
  signUpForm();
  login();
  DisplayContracts(renderContractFullDetails);
  navigation();
}

function signUpForm() {
  document.querySelector(".signup-button").addEventListener("click", () => {
    // Grabs display and makes the two sides (login & signup) invisible
    const card = document.querySelector(".card");
    const loginSide = document.querySelector(".login");
    const signupSide = document.querySelector(".signup");
    loginSide.style.display = "none";
    signupSide.style.display = "none";

    // Changes card css to accomodate single form-card
    card.className = "inner-card";
    // Inserts signUpForm. CHANGE
    card.innerHTML += SignUpForm();

    // Adds event listener to sign up form
    const form = document.querySelector(".form-register");
    console.log(form);
    form.addEventListener("submit", handleSignupSubmit);

    // If login is successful, toggle dashboard & logins visibility
  });
}

function handleSignupSubmit(e) {
  e.preventDefault();
  const newUser = {
    client: {
      name: e.target.name.value,
      username: e.target.username.value,
    },
  };

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
      signUpForm();
      setTimeout(() => {
        const el = document.querySelector(".notify");
        el.remove();
      }, 5000);
    });
  });
}

function login() {
  const loginButton = document.querySelector(".login-user");
  loginButton.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    logInUser(username).then((res) => {
      console.log(res.user_id);
      if (res.type == "success") {
        window.localStorage.setItem("user_id", res.user_id);
        setTimeout(() => {
          window.localStorage.clear();
          init()
        }, 1000000);
        ToggleInitDisplay(checkIfLoggedIn);
      } else {
        Notification(res).forEach((notify) => {
          const body = document.querySelector("body");
          body.innerHTML += notify;
          setTimeout(() => {
            const el = document.querySelector(".notify");
            el.remove();
          }, 5000);
        });
      }
    });
  });
}

function navigation() {
  const nav = document.querySelector(".client .navigation");
  nav.addEventListener("click", (e) => {
    switch (e.target.className.split(" ")[1]) {
      case "view-contracts": {
        clearDash();
        DisplayContracts(renderContractFullDetails);
        break;
      }
      case "make-project": {
        clearDash();
        MakeProjectForm(postNewProject, window.localStorage.getItem("user_id"));
        break;
      }
      case "view-projects": {
        clearDash();
        ViewProjects();
        break;
      }
      case "view-bids": {
        clearDash();
        ViewBids();
        break;
      }
      default:
        break;
    }
  });
  const headerNav = document.querySelector(".content-header .navigation");
  headerNav.addEventListener("click", (e) => {
    switch (e.target.className.split(" ")[1]) {
      case "messaged": {
        // clearDash();
        console.log("message");
        break;
      }
      case "profile": {
        // clearDash();
        console.log("profile");
        break;
      }
      case "chat-box": {
        // clearDash();
        console.log("chat-box");
        break;
      }
      case "logout": {
        // clearDash();
        LogUserOut()
        init()
        break;
      }
      default:
        break;
    }
  });
}

function clearDash() {
  const el = document.querySelector(".content.container > div:nth-child(2)");
  console.log(el);
  el.innerHTML = "";
}
