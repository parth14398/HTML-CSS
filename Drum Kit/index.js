for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    mysound(buttonInnerHtml);
    addAnimation(buttonInnerHtml);

  })

}
document.addEventListener('keydown', logKey);

function logKey(e) {
  mysound(e.key);
  addAnimation(e.key);
}

function mysound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('sounds\\tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds\\tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds\\tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds\\tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds\\crash.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds\\kick-bass.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds\\snare.mp3');
      audio.play();
      break;

    default:
      console.log(key);

  }

}

function addAnimation(currentkey){
  document.querySelector("." + currentkey).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + currentkey).classList.remove("pressed");
  }, 100);
}
