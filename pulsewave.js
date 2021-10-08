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

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    frameRate(144)

    for (let i=0; i<50; i++) {
        particles.push(new PulseParticle(100+i*10, 100, 0))
    }
}

function draw() {
    background(234, 34, 24)

    particles.forEach(p => p.show())
}