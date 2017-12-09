function Life(canvas){
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = this.canvas.width * 1/40;
  this.y = this.canvas.height * 1/20;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/heart.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
}

Life.prototype.draw = function(h) {
  if (this.isReady) {
    this.ctx.drawImage(this.sprite, this.x + (40 * h), this.y, this.sprite.width * 0.15, this.sprite.height * 0.15);
  }
};
