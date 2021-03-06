var scene;
var fly;
var frog;
var ribbit;
var flies;
var MAXTIME = 10;
var NUMFLIES = 3;
var timer;
var time;
var gui;
var score = 0;

function checkCollisions(indexFly) {
    if (frog.collidesWith(flies[indexFly])) {
        ribbit.play();
        flies[indexFly].reset();
        score += 10;
    }
}

function setupFlies() {
    flies = [];
    for (var i = 0; i < NUMFLIES; i++) {
        flies.push(new Fly());
    }
}

function checkTime() {
    time = timer.getElapsedTime();
    if (time > MAXTIME) {
        scene.stop();
    }
}

function updateGUI() {
    gui.innerHTML = "Score: " + score + " Time: " + time;
}

function restart() {
    //document.location.href="";
    time = 0;
    timer.reset();
    score = 0;
    scene.start();
}
//sets the scene,calls the update function,creates the sprites

function init() {
    gui = document.getElementById('gui');
    timer = new Timer();
    scene = new Scene();
    scene.setBG("green");
    scene.setSize(300, 400);
    setupFlies();
    frog = new Frog();
    leaves = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/leaves.png", 450, 450);
    ribbit = new Sound("http://jlaw21.githhub.io/Resources/ribbit.mp3");
    leaves.setSpeed(0);
    scene.start();
}
//makes things move,draws things to the canvas,

function update() {
    scene.clear();
    checkTime();
    updateGUI();
    //move things
    leaves.update();
    for (var i = 0; i < flies.length; i++) {
        flies[i].wriggle();
        checkCollsions(i);
        flies[i].update();
    }
    frog.checkKeys();
    //redraw things  
    frog.update();
}