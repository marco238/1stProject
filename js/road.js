function Road(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 50;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/map-ground.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
}

Road.prototype.draw = function() {
  if (this.isReady) {
    if (this.x < -this.canvas.width) {
        this.x = 0;
      }

    this.ctx.drawImage(this.sprite, this.x + this.canvas.width, this.y, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(this.sprite, this.x, this.y, this.canvas.width, this.canvas.height);

    this.x -= speed;
  }
};
