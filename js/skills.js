// Title Effect

var message = "Skills";
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
