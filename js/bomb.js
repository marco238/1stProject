function Bomb(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = 1000;
  this.y = 100;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/bomb.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
  this.speed = 1;
  this.explosion = new Explosion('canvasId', this.x);
  this.sound = new Audio();
  this.sound.src = 'sound/blast.mp3';
  this.isExplouded = false;
}

Bomb.prototype.draw = function() {
  if (this.isReady && !this.isExplouded) {
    this.ctx.drawImage(this.sprite, this.x, this.y, this.sprite.width * 0.2, this.sprite.height * 0.2);
    if(this.y < /*window.innerHeight * 0.73*/430){
      this.speed *= 1.02;
      this.y += this.speed;
    } else {
      setTimeout(function(){
        this.isExplouded = true;
      }.bind(this), 1450);
      this.explosion.draw(this.x);
      this.sound.play();
    }
  }

  this.x -= speed;
};
