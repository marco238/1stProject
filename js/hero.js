function Hero(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = 200;
  this.y = yCanvasPosition;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = 'img/hero2.png';
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
  this.sprite.xframes = 6;
  // this.sprite.xframeIndex = 1;
  this.sprite.yframes = 4;
  // this.sprite.yframeIndex = ySprite;
  this.counter = 0;
  this.life = [5];
}

Hero.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.drawImage(
      this.sprite, // Image
      xSprite * Math.floor(this.sprite.width / this.sprite.xframes), // source x
      ySprite * Math.floor(this.sprite.height / this.sprite.yframes), // source y
      Math.floor(this.sprite.width / this.sprite.xframes), // frame width
      Math.floor(this.sprite.height / this.sprite.yframes), // frame heigth
      this.x, // destination x
      yCanvasPosition, // destination y
      Math.floor(this.sprite.width / this.sprite.xframes) + 30, // destination frame width
      Math.floor(this.sprite.height / this.sprite.yframes) + 30); // destination frame heigth
  }

  if(state === 'C'){
    if(xSprite > 4){
      xSprite = 1;
    }
    this.counter += 1;

    if (this.counter % 30 === 0) {
      xSprite += 1;
      this.counter = 0;
    }
  }

  if(state === 'R'){
    if(xSprite < 1){
      xSprite = 5;
    }
    this.counter += 1;

    if (this.counter % 20 === 0) {
      xSprite -= 1;
      this.counter = 0;
    }
  }

  if(state === 'A'){
    if(xSprite < 2){
      xSprite = 5;
    }
    this.counter += 1;

    if (this.counter % 20 === 0) {
      xSprite -= 1;
      this.counter = 0;
    }
  }

  if(state === 'U'){
    if(xSprite < 1){
      xSprite = 4;
    }
    this.counter += 1;
    yCanvasPosition += 1.5 * heroSpeed;

    if (this.counter % 30 === 0) {
      xSprite -= 1;
      this.counter = 0;
    }
  }

  // for(var i = 0; i < hippie.length; i++){
  //   if(hippie[i].x == this.x){
  //     hippie[i].ySprite = 2;
  //   }
  // }
};
