function Zeppelin(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = (Math.random() * 1000) + this.canvas.width + lastZeppelinX;
  this.y = -300;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/zeppelin.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
  this.bomb = new Bomb('canvasId');
}

Zeppelin.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.drawImage(this.sprite, this.x, this.y, this.sprite.width * 0.2, this.sprite.height * 0.2);
  }
  this.x -= speed + 0.2;
  if (this.x < 900) {
    this.bomb.draw();
  }

  lastZeppelinX = this.x;
};
