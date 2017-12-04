function World(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.isReady = false;
  this.sprite = new Image();
  this.sunSprite = new Image();
  this.sprite.src = 'img/map.jpg';
  this.sunSprite.src = 'img/sun.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
}

World.prototype.draw = function() {
  if (this.isReady) {
    if (this.x < -this.canvas.width) {
        this.x = 0;
      }

    this.ctx.drawImage(this.sprite, this.x + this.canvas.width, this.y, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(this.sprite, this.x, this.y, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.sunSprite, this.canvas.width * 4/6, this.canvas.height * -2/20, this.sunSprite.width * 0.5, this.sunSprite.height * 0.5);

    this.x -= speed/20;
  }
};
