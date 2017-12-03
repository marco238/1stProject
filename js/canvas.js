window.onload = function() {
  var game = new Game("canvasId");

  document.getElementById("start-button").onclick = function() {
    game.startGame();
  };

  function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth - 5;
    this.canvas.height = window.innerHeight - 5.1;
    this.map = new Map('canvasId');
    this.hero = new Hero('canvasId');
    this.zeppelin = new Zeppelin('canvasId');
    this.bird = new Bird('canvasId');
  }

  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.startGame = function() {
    this.intervalId = setInterval(function() {
      this.clear();
      this.map.draw();
      this.bird.draw();
      this.hero.draw();
      this.zeppelin.draw();
    }.bind(this), 1000 / 120);
  };

};
