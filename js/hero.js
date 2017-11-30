function Hero(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = 50;
  this.y = 290;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/hero.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
  this.sprite.xframes = 6;
  this.sprite.xframeIndex = 1;
  this.sprite.yframes = 4;
  this.sprite.yframeIndex = 0;
  this.counter = 0;
}

Hero.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.drawImage(
      this.sprite, // Image
      this.sprite.xframeIndex * Math.floor(this.sprite.width / this.sprite.xframes), // source x
      this.sprite.yframeIndex * Math.floor(this.sprite.height / this.sprite.yframes), // source y
      Math.floor(this.sprite.width / this.sprite.xframes), // frame width
      Math.floor(this.sprite.height / this.sprite.yframes), // frame heigth
      this.x, // destination x
      this.y, // destination y
      Math.floor(this.sprite.width / this.sprite.xframes) + 30, // destination frame width
      Math.floor(this.sprite.height / this.sprite.yframes) + 30); // destination frame heigth
  }

  if(this.sprite.xframeIndex > 4){
    this.sprite.xframeIndex = 1;
  }
  this.counter += 1;

  if (this.counter % 30 === 0) {
    this.sprite.xframeIndex += 1;
    this.counter = 0;
  }
};
