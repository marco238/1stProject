function Bird(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = (Math.random() * 4000) + 2000;
  this.y = Math.random() * window.innerHeight * 0.5;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/bird.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
  this.sprite.xframes = 5;
  this.sprite.yframes = 5;
  this.xSprite = 0;
  this.ySprite = 0;
  this.counter = 0;
  this.sound = new Audio();
  this.sound.src = 'sound/bird.mp3';
}

Bird.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.drawImage(
      this.sprite, // Image
      this.xSprite * Math.floor(this.sprite.width / this.sprite.xframes), // source x
      this.ySprite * Math.floor(this.sprite.height / this.sprite.yframes), // source y
      Math.floor(this.sprite.width / this.sprite.xframes), // frame width
      Math.floor(this.sprite.height / this.sprite.yframes), // frame heigth
      this.x, // destination x
      this.y, // destination y
      Math.floor(this.sprite.width / this.sprite.xframes) * 0.2, // destination frame width
      Math.floor(this.sprite.height / this.sprite.yframes) * 0.2); // destination frame heigth
  }

  if(this.ySprite < 4){
    if(this.counter % 5 === 0){
      this.xSprite += 1;
    }
    if(this.counter === 20){
      this.xSprite = 0;
      this.counter = 0;
      this.ySprite += 1;
    }
    this.counter += 1;
  } else {
    this.ySprite = 0;
  }

  if(this.x < 1000 && this.x > 900){
    this.sound.play();
  }

  this.x -= speed + 2;
};
