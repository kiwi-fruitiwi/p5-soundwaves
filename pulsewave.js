/*
@author Kiwi
@date 2021-10-08

For this second project, I'm going to try to get pulse waves working. I
imagine this is as simple as giving each particle an oscillateOnce feature
and activating each particle as our x counter value goes from 0 to width.

coding plans:
.   pulseParticle class, modify and remove vel, acc, etc.
.   create a particle grid
    oscillateOnce
    fire oscillateOnce as an x-value counter increases from 0 to width

 */

let font
let particles = []
let started = false

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    frameRate(144)

    let row
    let X_OFFSET = 50
    let Y_OFFSET = 100
    let PARTICLE_HORIZONTAL_SPACING = 10
    let PARTICLE_VERTICAL_SPACING = 10

    // populate rows
    for (let r=0; r<18; r++) {
        row = []
        // this populates an entire row of particles
        for (let c=0; c<55; c++) {
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
}


function mousePressed() {
    // set up a delay in frames for each

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

    // 10*c, 55, 8 was great and provides overlap. r:18
}