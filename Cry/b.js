var ship;
var game;
var starfield;
var missile;
var missiles = [];
var mothership;
var bad;
var cri;
function Bads() {
    //sets a temporary sprite object
    tBad = new Sprite(game, "1.png", 20, 20);
    //sets the speed of the sprite object
    tBad.setSpeed(50);
    //create a function to simulate a fly's flight pattern.
    tBad.wriggle = function() {
        //random fly angle--improve this later
        newDir = (Math.random() * 90) - 45;
        this.changeAngleBy(newDir);
    };
    tBad.reset = function() {
        //set new random position
        newX = Math.random() * this.cWidth;
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);
    };
    tBad.reset();
    return tBad;
}

function checkCollisions() {
    if (ship.collidesWith(Bad)) {
        Bad.reset();
        score += 10;
    }
      if (ship.collidesWith(Cri)) {
        Cri.reset();
        score += 10;
    }
}

function Missile() {

    tMissile = new Sprite(game, 'http://aharrisbooks.net/h5g/h5g_8/missile.png', 30, 20);

    tMissile.hide();

    tMissile.fire = function() {

        missiles.push(this);
        this.show();
        this.setSpeed(15);
        this.setPosition(ship.x, ship.y);
        this.setAngle(ship.getImgAngle());
        this.setBoundAction(DIE);

    };

    return tMissile;

}
//copy for other enemies

function MotherShip() {
    tMother = new Sprite(game, "mothership.png", 500, 500);
    tMother.setAngle(90);
     tMother.setSpeed(100);
    return tMother;
}

function Ship() {
    tShip = new Sprite(game, 'you.png', 30, 30);
    tShip.checkKeys = function() {
        if (keysDown[K_LEFT]) {
            this.changeImgAngleBy(-5);
        }
        if (keysDown[K_RIGHT]) {
            this.changeImgAngleBy(5);
        }
        if (keysDown[K_UP]) {
            this.addVector(this.getImgAngle(), 0.5);
        }

        if (keysDown[K_SPACE]) {

            if (timer.getElapsedTime() >= 0.5) {
                missile = new Missile();
                missile.fire();
                timer.reset();

            }

        }

        this.addVector(this.getImgAngle(), (this.speed / 10));

    };

    tShip.checkDrag = function() {

        speed = this.getSpeed();
        speed *= 0.95;
        this.setSpeed(speed);

    };

    return tShip;
}

function init() {
    game = new Scene();
    var cri=new Sound("BallsofSteel.wav")
    starfield = new Sprite(game, 'https://c2.staticflickr.com/6/5062/5647855669_3f144666c0_b.jpg', 2000, 2000);
    starfield.setSpeed(0);
    timer = new Timer();
    times = new Timer();
    ship = new Ship();
    bad = new Bads();
    mother = new MotherShip();
    game.start();
    cri.play()

}

function update() {
    game.clear();
    starfield.update();
    ship.checkKeys();
    ship.checkDrag();
    ship.update();
    mother.update();
    bad.update();
    bad.wriggle();
    checkCollisions();
    //FOR EACH LOOP WILL ITERATE THROUGH EACH OBJECT IN AN ARRAY

    //right thing
    missiles.forEach(function(element) {

        element.update();

    })




}