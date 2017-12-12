window.onload = function() {
  var game = new Game("canvasId");

  document.getElementById("start-button").onclick = function() {
    game.addBird();
    game.addZeppelin();
    game.addHippie();
    game.startGame();
  };

  function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth - 5;
    this.canvas.height = window.innerHeight - 5.1;
    this.world = new World('canvasId');
    this.road = new Road('canvasId');
    this.hero = new Hero('canvasId');
    this.life = [
      new Life('canvasId'),
      new Life('canvasId'),
      new Life('canvasId'),
      new Life('canvasId'),
      new Life('canvasId')
    ];
    this.zeppelin = [];
    this.bird = [];
    this.hippie = [];
    this.blood = new Blood();
    this.theme = new Audio();
    this.theme.src = 'sound/Contra.mp3';
    this.theme.loop = true;
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

  Game.prototype.addHippie = function() {
    setInterval(function() {
      this.hippie.push(new Hippie('canvasId', Math.floor(Math.random() * 3)));
      // this.blood.push(new Blood());
    }.bind(this), 5 * 1000);
  };

  Game.prototype.startGame = function() {
    this.theme.play();
    this.intervalId = setInterval(function() {
      this.clear();
      this.world.draw();
      this.road.draw();
      this.blood.draw();
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
      for(var k = 0; k < this.hippie.length; k++){
        if(this.hippie[k].x > -50){
          this.hippie[k].draw();
          if((this.hero.x + 80) > this.hippie[k].x && this.hippie[k].x > (this.hero.x + 79.3) && !isAttacking){
            this.life.pop();
          }
          if((this.hero.x + 80) > this.hippie[k].x && this.hippie[k].x > (this.hero.x + 78.2) && !isAttacking && isRunning){
            this.life.pop();
          }
          if((this.hero.x + 110) > this.hippie[k].x && (this.hippie[k].x - 50) > this.hero.x && isAttacking){
            this.blood.draw(this.hippie[k].x, this.hippie[k].y);
            this.hippie.splice(this.hippie.indexOf(this.hippie[k]), 1);
          }
          if((this.hero.x + 110) > this.hippie[k].x && (this.hippie[k].x - 50) > this.hero.x && isAttacking && isRunning){
            this.blood.draw(this.hippie[k].x, this.hippie[k].y);
            this.hippie.splice(this.hippie.indexOf(this.hippie[k]), 1);
          }
        }
      }
      for(var h = 0; h < this.life.length; h++){
        this.life[h].draw(h);
      }
    }.bind(this), 1000 / 120);
  };

};
