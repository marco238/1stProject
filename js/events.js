document.addEventListener("keydown", function(event) {
  if (event.keyCode == RIGHT_KEY) {
    speed = 2;
  }

  if (event.keyCode == LEFT_KEY) {
    speed = -2;
  }

  if (event.keyCode == UP_KEY) {
    jump();
  }

  if (event.keyCode == DOWN_KEY) {

  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode == RIGHT_KEY) {
    speed = 0;
  }

  if (event.keyCode == LEFT_KEY) {
    speed = 0;
  }

  if (event.keyCode == UP_KEY) {

  }

  if (event.keyCode == DOWN_KEY) {

  }
});

jump = function () {
  ySprite = 1;
  yCanvasPosition = 230;
  setTimeout(function(){
    ySprite = 0;
    yCanvasPosition = 290;
    xSprite = 1;
  }, 600);
};
