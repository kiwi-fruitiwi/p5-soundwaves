/*
@author Kiwi
@date 2021-10-04

I'm trying to simulate sound waves. They are longitudinal waves that
compress air molecules into high- and low-density regions. How do we model
these?

coding plans:
.   create particle class
.   create grid of particles
    assign varying sinusoidal motion to every particle based on its position.x

 */

let font
let particles

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    particles = []

    let PADDING = 40
    let SPACING = 15
    // create a grid of particles
    for (let i=PADDING; i<=width-PADDING; i+=SPACING) {
        for (let j=PADDING; j<=height-PADDING; j+=SPACING) {
            particles.push(new Particle(i, j))
        }
    }
}

function draw() {
    background(209, 80, 30)

    particles.forEach(p => p.update())
    particles.forEach(p => p.show())
}