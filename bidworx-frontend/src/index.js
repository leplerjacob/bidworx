import { getAllClients, postNewUser, logInUser } from "./fetch.js";
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
    console.log("Logged in");
    document.querySelector("section.login-signup").style.display = "none";
  } else {
    console.log("Not logged in");
    document.querySelector("section.dashboard").style.display = "none";
  }
}
// Components
function init() {
  signUpForm()
  login()
  displayContracts()

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
    console.log(username);
    logInUser(username).then((res) => {
      console.log(res.user_id);
      if (res.type == "success") {
        window.localStorage.setItem("user_id", res.user_id);
        toggleInitDisplay();
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

function displayContracts(){
// This function renders grid of contracts. 
  const container = document.querySelector('.content.container > .client')
  
  console.log(container)

  const cardContainer = document.createElement('div')
  cardContainer.style.display = 'grid'
  cardContainer.style.gridTemplateColumns = "repeat(3, 1fr)"
  cardContainer.style.gridTemplateRows = "repeat(3, 1fr)"

  const contractCard = document.createElement('div')
  
  
  fetch('http://localhost:3000/1/contracts').then(res => res.json()).then(contracts => {
    contracts.forEach(contract => {
      
      // Create elements for each card in the grid
      contractCard.innerText = contract.project.title
      // cardContainer.append(contractCard)

      contractCard.addEventListener('click', () => renderContractCard(contract))

      cardContainer.append(contractCard)
    })
  })

  container.append(cardContainer)
}
    
function renderContractCard(contract) {

  console.log(contract.title, contract.project.title)

// This function renders the single contract on click. 
const card = document.createElement('div') 

const cardBody = document.createElement('div')

const projectName = document.createElement('h2')
  projectName.innerText = contract.project.title

const projectDescription = document.createElement('p')
  projectDescription.innerText = contract.project.description

const freelancerBody = document.createElement('div')

const freelancerName = document.createElement('h2')
  freelancerName.innerText = contract.freelancer.name

const freelancerSkills = document.createElement('p')
  freelancerSkills.innerText = contract.freelancer.skills

const projectDuration = document.createElement('h2')
  projectDuration.innerText = contract.project.duration 

const projectCost = document.createElement('h2')
  projectCost.innerText = contract.project_bid.price


freelancerBody.append(freelancerName, freelancerSkills,)

cardBody.append(projectName, projectDescription, freelancerBody, projectDuration, projectCost)

card.append(cardBody)

const contractSelector = document.querySelector(".content.container > .client")
contractSelector.innerHTML = ""
contractSelector.append(card)

  






// NOTES ON HOW TO RENDER SINGLE CARD
  // Grab existing cards and change their style display to 'none'
  // or expand the clicked card to full screen and container: z-index: 0, card: z-index: 1 => card would show above container

}
