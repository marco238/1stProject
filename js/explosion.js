function Explosion(canvas, x) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = x - 430;
  this.y = 297;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/explosion.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
  this.sprite.xframes = 5;
  // this.sprite.xframeIndex = 1;
  this.sprite.yframes = 3;
  // this.sprite.yframeIndex = ySprite;
  this.xSprite = 0;
  this.ySprite = 0;
  this.counter = 0;
}

Explosion.prototype.draw = function(x) {
  if (this.isReady) {
    this.ctx.drawImage(
      this.sprite, // Image
      this.xSprite * Math.floor(this.sprite.width / this.sprite.xframes), // source x
      this.ySprite * Math.floor(this.sprite.height / this.sprite.yframes), // source y
      Math.floor(this.sprite.width / this.sprite.xframes), // frame width
      Math.floor(this.sprite.height / this.sprite.yframes), // frame heigth
      x - 50, // destination x
      this.y, // destination y
      Math.floor(this.sprite.width / this.sprite.xframes) + 100, // destination frame width
      Math.floor(this.sprite.height / this.sprite.yframes) + 100); // destination frame heigth
  }

  if(this.ySprite < 4){
    if(this.counter % 15 === 0){
      this.xSprite += 1;
      console.log('hola');
    }
    if(this.counter === 60){
      this.xSprite = 0;
      this.counter = 0;
      this.ySprite += 1;
    }
    this.counter += 1;
    this.x -= speed;
  }
};
