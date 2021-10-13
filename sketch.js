/*
@author Kiwi
@date 2021-10-13

plan
    create particle class: update, show, activate
    make one oscillate with delay 0
        🐞 called particle.activate with no arguments :P
        15min
    fiddle with delay or phase
    add grid of particles
    highlighted row +marker

 */
let font

let ROWS = 18
let COLS = 55
let SPACING = 15
let PADDING = 50

let test
let particles = []

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    frameRate(144)

    // let row
    // for (let r=0; r<ROWS; r++) {
    //     row = []
    //     for (let c=0; c<COLS; c++) {
    //        row.push(new Particle(
    //            SPACING*c,
    //            SPACING*r))
    //     }
    // }

    test = new Particle(width/2, height/2)
}

function draw() {
    background(234, 34, 24)

    test.update()
    test.show()
}

function start() {
    test.activate(
        25, // amplitude
        7, // period
        0 // delay
    )
}

function mousePressed() {
    start()
}