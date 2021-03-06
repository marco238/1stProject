document.addEventListener("keydown", function(event) {
  if (event.keyCode == RIGHT_KEY) {
    if(!isJumping && !isAttacking){
      isRunning = true;
      speed = 3.5;
      state = 'R';
      ySprite = 2;
    }
  }

  if (event.keyCode == UP_KEY) {
    if(!isJumping && !isAttacking){
      xSprite = 4;
      jump();
      state = 'U';
    }
  }

  if (event.keyCode == CTRL_KEY) {
    if(!isAttacking && !isJumping){
      isAttacking = true;
      xSprite = 5;
      attack();
      state = 'A';
    }
  }
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode == RIGHT_KEY) {
    if(!isJumping){
      isRunning = false;
      speed = 0;
      state = 'C';
      ySprite = 0;
    }
  }
});

jump = function () {
  isJumping = true;
  ySprite = 1;
  heroSpeed = -4.5;
  setTimeout(function(){
    heroSpeed = 2.6;
  }, 250);
  setTimeout(function(){
    // yCanvasPosition = window.innerHeight * 0.61;
    yCanvasPosition = 320;
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
  punch.play();
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
