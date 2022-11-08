// Title Effect

var message = "Projects";
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

// Swiper Effect

const swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
