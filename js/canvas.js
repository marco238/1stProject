window.onload = function() {
  var game = new Game("canvasId");

  document.getElementById("start-button").onclick = function() {
    game.addBird();
    game.addZeppelin();
    game.startGame();
  };

  function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth - 5;
    this.canvas.height = window.innerHeight - 5.1;
    this.world = new World('canvasId');
    this.map = new Map('canvasId');
    this.hero = new Hero('canvasId');
    this.zeppelin = [];
    this.bird = [];
  }

  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.addBird = function() {
    setInterval(function() {
      this.bird.push(new Bird('canvasId'));
    }.bind(this), 2 * 1000);
  };

  Game.prototype.addZeppelin = function() {
    setInterval(function() {
      this.zeppelin.push(new Zeppelin('canvasId'));
    }.bind(this), 10 * 1000);
  };

  Game.prototype.startGame = function() {
    this.intervalId = setInterval(function() {
      this.clear();
      this.world.draw();
      this.map.draw();
      for(var i = 0; i < this.bird.length; i++){
        if(this.bird[i].x > -50){
          this.bird[i].draw();
        }
      }
      this.hero.draw();
      for(var j = 0; j < this.zeppelin.length; j++){
        if(this.zeppelin[j].x > -500){
          this.zeppelin[j].draw();
        }
      }
    }.bind(this), 1000 / 120);
  };

};
