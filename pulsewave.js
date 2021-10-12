/*
@author Kiwi
@date 2021-10-08

For this second project, I'm going to try to get pulse waves working. I
imagine this is as simple as giving each particle an oscillateOnce feature
and activating each particle as our x counter value goes from 0 to width.

coding plans:
.   pulseParticle class, modify and remove vel, acc, etc.
.   create a particle grid
.   oscillateOnce
.   fire oscillateOnce as an x-value counter increases from 0 to width
.   longitudinal wave working with delay
.   add highlighted column + dot marker
    can we do this with phase changes instead of delays?

 */

let font
let particles = []
let started = false
let startButton

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}


function start() {
    if (!started) {
        started = true
        particles.forEach(row => {
            for (let c=0; c<row.length; c++) {
                row[c].activate(
                    c*10, // delay based on what column we're in
                    25, // amplitude
                    7) // period
            }
        })
    }
}

let ROWS = 18
let COLS = 55

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    frameRate(144)
    // startButton = createButton('start');
    // startButton.position(0, 0);
    // startButton.mousePressed(start);

    // temp variable for populating our 2D array with rows of PulseParticles
    let row
    let X_OFFSET = 50
    let Y_OFFSET = 100
    let PARTICLE_HORIZONTAL_SPACING = 10
    let PARTICLE_VERTICAL_SPACING = 10

    // populate rows
    for (let r=0; r<ROWS; r++) {
        row = []
        // this populates an entire row of particles
        for (let c=0; c<COLS; c++) {
            row.push(new PulseParticle(
                X_OFFSET+c*PARTICLE_HORIZONTAL_SPACING,
                Y_OFFSET+r*PARTICLE_VERTICAL_SPACING))
        }
        // add the freshly formed row to particles array
        particles.push(row)
    }
}


function draw() {
    background(234, 34, 24)
    particles.forEach(row => {
        row.forEach(p => p.update())
    })

    particles.forEach(row => {
        row.forEach(p => p.show())
    })

    let lastRow = particles[ROWS-1]
    // let's draw a marker below the 36th column
    let x_pos = lastRow[36].pos.x
    let y_pos = lastRow[36].pos.y

    noStroke()
    fill(210, 100, 80, 100)

    // 9 pixels below the center of the particle; this is better done with .r
    circle(x_pos, y_pos+9, 3)

}


function mousePressed() {
    // set up a delay in frames for each

    start()

    // 10*c, 55, 8 was great and provides overlap. r:18
}

function keyPressed() {
    if (key === 's')
        noLoop()
}