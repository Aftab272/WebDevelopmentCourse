var numbersOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numbersOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();
  makeSound(key);
  buttonAnimation(key);
});

function play(src) {
  var audio = new Audio(src);
  audio.currentTime = 0;
  audio.play();
}

function makeSound(key) {
  switch (key) {
    case "w":
      play("sounds/tom-1.mp3");
      break;
    case "a":
      play("sounds/tom-2.mp3");
      break;
    case "s":
      play("sounds/tom-3.mp3");
      break;
    case "d":
      play("sounds/tom-4.mp3");
      break;
    case "j":
      play("sounds/snare.mp3");
      break;
    case "k":
      play("sounds/crash (1).mp3");
      break;
    case "l":
      play("sounds/kick-bass.mp3");
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (!activeButton) return;
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 120);
}