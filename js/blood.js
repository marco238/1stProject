function Blood() {
  this.canvas = document.getElementById('canvasId');
  this.ctx = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/blood.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
  this.sprite.xframes = 3;
  this.sprite.yframes = 3;
  this.xSprite = -1;
  this.ySprite = 0;
  this.counter = 0;
}

Blood.prototype.draw = function(x, y) {
  this.xSprite = -1;
  this.ySprite = 0;
  this.counter = 0;
  this.x = x;
  this.y = y;
  if (this.isReady) {
    this.ctx.drawImage(
      this.sprite, // Image
      this.xSprite * Math.floor(this.sprite.width / this.sprite.xframes), // source x
      this.ySprite * Math.floor(this.sprite.height / this.sprite.yframes), // source y
      Math.floor(this.sprite.width / this.sprite.xframes), // frame width
      Math.floor(this.sprite.height / this.sprite.yframes), // frame heigth
      x, // destination x
      y, // destination y
      Math.floor(this.sprite.width / this.sprite.xframes) * 0.4, // destination frame width
      Math.floor(this.sprite.height / this.sprite.yframes) * 0.4); // destination frame heigth
  }

  if (this.ySprite < 3) {
  if (this.counter % 7 === 0) {
    this.xSprite += 1;
  }
  if (this.counter === 21) {
    this.xSprite = 0;
    this.counter = 0;
    this.ySprite += 1;
  }
  this.counter += 1;
} else {
  // this.ySprite = 0;
}
this.x -= speed + 0.8;
};
