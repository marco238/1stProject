function Bomb(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = 950;
  this.y = 0;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/bomb.gif';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
  this.speed = 1;
  this.explosion = new Explosion('canvasId');
  this.isExplouded = false;
}

Bomb.prototype.draw = function() {
  if (this.isReady && !this.isExplouded) {
    this.ctx.drawImage(this.sprite, this.x, this.y, this.sprite.width * 0.2, this.sprite.height * 0.2);
    if(this.y < 390){
      this.speed *= 1.02;
      this.y += this.speed;
    } else {
      setTimeout(function(){
        this.isExplouded = true;
      }.bind(this), 1200);
      this.explosion.draw();
    }
  }
};
