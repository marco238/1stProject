// var canvas = document.getElementById('canvas');
//
// var sec = 1000;
//
// var fps = 60;

var speed = 0;
var heroSpeed = 1;
var life = 5;
var punch = new Audio();
punch.src = 'sound/Punch.mp3';

var RIGHT_KEY = 39;
var LEFT_KEY = 37;
var UP_KEY = 38;
var DOWN_KEY = 40;
var CTRL_KEY = 17;

var ySprite = 0;
var xSprite = 1;
var yCanvasPosition = window.innerHeight * 0.61;
var isRunning = false;
var isJumping = false;
var isAttacking = false;

var state = 'C';
var lastZeppelinX = 0;
