// Title Effect

var message = "Contact";
var msgCount = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2;
var messageLabel = document.querySelector(".title-effect");

function textFunc() {
  messageLabel.innerHTML = message.substring(0, msgCount);

  if (msgCount == message.length) {
    // Stop Timer
    clearInterval(timer1);
  } else {
    msgCount++;
  }
}

timer1 = setInterval("textFunc()", 150); // Every 150 milliseconds

// modal contact icones

const imgPhone = document.querySelector(".img-phone");
const imgEmail = document.querySelector(".img-email");
const modalPhone = document.querySelector(".phone-modal");
const modalEmail = document.querySelector(".email-modal");

imgPhone.addEventListener("click", () => {
  console.log("click on phone");
  modalPhone.classList.toggle("show");
});

imgEmail.addEventListener("click", () => {
  modalEmail.classList.toggle("show");
});
