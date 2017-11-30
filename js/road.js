function Map(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/map.jpg';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
}

Map.prototype.draw = function() {
  if (this.isReady) {
    if (this.x < -this.canvas.width) {
        this.x = 0;
      }

      if (this.x < 0) {
        this.ctx.drawImage(this.sprite, this.sprite.width - this.x, this.y, this.canvas.width, this.canvas.height);
      } else if (this.x - this.sprite.width > 0) {
        ctx.drawImage(this.sprite, this.sprite.width * 2 - this.x, this.y, this.canvas.width, this.canvas.height);
      }

    this.ctx.drawImage(this.sprite, this.x, this.y, this.canvas.width, this.canvas.height);

    this.x -= 0.5;
  }
};
