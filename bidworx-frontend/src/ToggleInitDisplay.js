// Toggles display according to whether or not user is logged in. Before init(0)
export default function toggleInitDisplay(checkIfLoggedIn) {

    if (checkIfLoggedIn()) {
      console.log("Logged in");
      document.querySelector("section.login-signup").style.display = "none";
      document.querySelector("section.dashboard").style.display = "grid";
    } else {
      console.log("Not logged in");
      document.querySelector("section.dashboard").style.display = "none";
      document.querySelector("section.login-signup").style.display = "grid";
    }
  }