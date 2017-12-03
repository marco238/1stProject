document.addEventListener("keydown", function(event) {
  if (event.keyCode == RIGHT_KEY) {
    isRunning = true;
    speed = 3.5;
    state = 'R';
    ySprite = 2;
  }

  if (event.keyCode == UP_KEY) {
    if(!isJumping){
      xSprite = 4;
      jump();
      state = 'U';
    }
  }

  if (event.keyCode == CTRL_KEY) {
    if(!isAttacking){
      xSprite = 5;
      attack();
      state = 'A';
    }
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode == RIGHT_KEY) {
    isRunning = false;
    speed = 0;
    state = 'C';
    ySprite = 0;
  }

  if (event.keyCode == LEFT_KEY) {
    speed = 0;
  }
});

jump = function () {
  isJumping = true;
  ySprite = 1;
  heroSpeed = -2.5;
  setTimeout(function(){
    heroSpeed = 1;
  }, 250);
  setTimeout(function(){
    yCanvasPosition = 565;
    isJumping = false;
    if(isRunning){
      state = 'R';
      ySprite = 2;
    } else {
      state = 'C';
      ySprite = 0;
    }
  }, 750);
};

attack = function () {
  isAttacking = true;
  ySprite = 3;
  if(isRunning){
    speed = 3.5;
  }

  setTimeout(function(){
    isAttacking = false;
    if(isRunning){
      state = 'R';
      ySprite = 2;
    } else {
      state = 'C';
      ySprite = 0;
      speed = 0;
    }
  }, 650);
};
