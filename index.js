let canvasHeight = innerHeight -30;
let canvasWidth = innerWidth -30;
let sewerslvt;
let amp;
let myLevels = [];
let started = false;
let loaded = false;
let vHist = [];

function setLoaded (){
    loaded = true;
}

function preload() {
    console.log (loaded);
    sewerslvt = loadSound('sewerslvt.mp3', setLoaded);
}

// setup
function setup() {

 createCanvas(canvasWidth, canvasHeight);
//  background(0,0,0, 250);

 angleMode(DEGREES);
//  background (10);
//  stroke(0);
 amp = new p5.Amplitude();
}

function drawStartScreen (){
    fill(0, 0, 0);
    textSize(30);
    text('click screen to start sound', 10 ,100);
}

// draw
function draw() {

    if(!started){
        drawStartScreen();
    } else {
        if(loaded){
            drawAmplitude();
        }
    }

    // var vol = amp.getLevel();
    // fill(1),
    // ellipse (canvasWidth/2, canvasHeight /2, vol, vol);

    function drawAmplitude(){

        let vol = amp.getLevel();
        // let diam = map(vol, 0, 1, 10, 1000);
        vHist.push(vol);
        strokeWeight(3);
        stroke(0, 80, 255);
        noFill();

        translate(canvasWidth / 2, canvasHeight/2);
        beginShape();
        for (let i = 0; i < 36000; i++) {
            // let r = 100;
            let r = map(vHist[i], 0, 1, 10, canvasHeight);

            let x = r * cos(i);
            let y = r * sin(i);
            vertex(x, y);
        }
        endShape();

        // if (vHist.length > 1) {
        //     vHist.pop ();
        // }
        translate(-canvasWidth / 2, -canvasHeight/2);
        fill(0, 40);
        noStroke();
        ellipse(canvasWidth/2, canvasHeight/2, canvasHeight);
        // fill(1);
        // ellipse (canvasWidth/2, canvasHeight /2, diam, diam);

    }
    // background(0, 0, 0, 50);
}

function mousePressed (){
    started = true;
    sewerslvt.play();
}