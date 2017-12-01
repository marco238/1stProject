document.addEventListener("keydown", function(event) {
  if (event.keyCode == RIGHT_KEY) {
    speed = 3.5;
    state = 'R';
    ySprite = 2;
  }

  if (event.keyCode == LEFT_KEY) {

  }

  if (event.keyCode == UP_KEY) {
    jump();
    state = 'U';
  }

  if (event.keyCode == DOWN_KEY) {

  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode == RIGHT_KEY) {
    speed = 0;
    state = 'C';
    ySprite = 0;
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
  setTimeout(function(){
    ySprite = 0;
  }, 650);
};
