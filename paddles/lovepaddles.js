var maybe;
var Paddle;
var ball;
var drum;
var evil;

var CHANGE = 5;
function checkCollisions(){
        //distance collison 
    dist = box.distanceTo(character);
    output.innerHTML = dist;
    if (dist - character.width / 2 - box.width / 2 < 0) {
        output.innerHTML = "COLLISON";
        character.dx *= -1;
        character.dy *= -1;
    } else {
        output.innerHTML = "NO COLLISION";
    }
}
function Paddle() {
    tpaddle = new Sprite(scene, "love.png", 100, 19);
    tpaddle.setAngle(180);
    tpaddle.setSpeed(0);

    tpaddle.checkKeys = function() {
        if (keysDown[K_UP]) {
            this.changeYby(-CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }
        }

        if (keysDown[K_DOWN]) {
            this.changeYby(CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - this.width / 2);
            }
        }

    };
    tpaddle.checkKeysINV = function() {
        if (keysDown[K_DOWN]) {
            this.changeYby(-CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }
            
        }

        if (keysDown[K_UP]) {
            this.changeYby(CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - this.width / 2);
            }
        }


    };
    return tpaddle;
}

function init() {

    //creates a scene object, which has its own properties and actions
    scene = new Scene();
      evil = new Sprite(scene, "http://www.textures4photoshop.com/tex/thumbs/space-background-with-starfield-free-download-thumb45.jpg");
    drum = new Sound("bensound-instinct.mp3")
    scene.hideCursor();
    //create a sprite object to represent our ball and paddle
    paddle = new Paddle();
    paddle2 = new Paddle();
    ball = new Sprite(scene, "life.png", 50, 50);
    ball.setMoveAngle(200);
    ball.setSpeed(9);
    paddle2.setSpeed(5);
    paddle2.setBoundAction(BOUNCE);
    ball.setBoundAction(BOUNCE);
    paddle.setPosition(15, scene.height / 2);
    paddle2.setPosition(scene.width - 15, scene.height / 2);

    scene.start();
    drumm.play();
}

function update() {
    scene.clear();
    paddle.checkKeys();
    ball.update();
    paddle.update();
    paddle2.update();

}
