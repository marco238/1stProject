function Car(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = "http://spiralforums.biz/uploads/post-53-1139607373.jpg";
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
}
