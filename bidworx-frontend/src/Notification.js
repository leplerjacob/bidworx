export default function Notification({ type, message }) {
  const msgElementArray = [];
  console.log(type, typeof type);
  if (type != "success") {
    const msgs = message[0];
    for (const key of Object.keys(msgs)) {
      msgElementArray.push(
        `<div class="notify ${type}"><span>${key}: ${msgs[key]}</span></div>`
      );
    }
  } else {
    const card = document.querySelector(".inner-card");
    const loginSide = document.querySelector(".login");
    const signupSide = document.querySelector(".signup");
    const signupForm = document.querySelector(".signup-form");
    signupForm.style.display = "none";
    loginSide.style.display = "grid";
    signupSide.style.display = "grid";
    card.className = "card";

    msgElementArray.push(
      `<div class="notify ${type}"><span>${message}</span></div>`
    );
  }
  return msgElementArray;
}
