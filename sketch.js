/*
@author Kiwi
@date 2021-10-04

I'm trying to simulate sound waves. They are longitudinal waves that
compress air molecules into high- and low-density regions. How do we model
these?

coding plans:
.   create particle class
.   create grid of particles
.   assign varying sinusoidal motion to every particle based on its position.x
    optimize by creating an array of particles and just displaying copies of
        them through some height instead of doing calculations on every
        particle. this is possible because every particle follows the particle
        above and below.
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

    // create a grid of particles!
    let PADDING = 40
    let SPACING = 8
    for (let i=PADDING; i<=width-PADDING; i+=SPACING) {
        for (let j=height/2-50; j<=height/2+50; j+=SPACING) {
            particles.push(new Particle(i, j, 0))
        }
    }
}

function draw() {
    background(209, 80, 30)

    particles.forEach(p => p.update())
    particles.forEach(p => p.show())

    // apply sinusoidal motion to each particle in the x direction
}