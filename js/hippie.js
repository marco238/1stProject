function Hippie(canvas, ySprt) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = (Math.random() * 1000) + this.canvas.width;
  this.y = 645;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/hippie_sprites2.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
  this.sprite.xframes = 8;
  this.sprite.yframes = 2;
  this.xSprite = 0;
  this.ySprite = ySprt;
  this.counter = 0;
}

Hippie.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.drawImage(
      this.sprite, // Image
      this.xSprite * Math.floor(this.sprite.width / this.sprite.xframes), // source x
      this.ySprite * Math.floor(this.sprite.height / this.sprite.yframes), // source y
      Math.floor(this.sprite.width / this.sprite.xframes), // frame width
      Math.floor(this.sprite.height / this.sprite.yframes), // frame heigth
      this.x, // destination x
      this.y, // destination y
      Math.floor(this.sprite.width / this.sprite.xframes) * 0.7, // destination frame width
      Math.floor(this.sprite.height / this.sprite.yframes) * 0.7); // destination frame heigth
  }

if (this.counter % 20 === 0) {
  if(this.xSprite > 6){
    this.xSprite = 0;
  }
  this.xSprite += 1;
  this.counter = 0;
}

this.counter += 1;

this.x -= speed + 0.8;
};
