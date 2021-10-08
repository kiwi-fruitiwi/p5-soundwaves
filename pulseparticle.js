class PulseParticle {
    constructor(x, y, phase) {
        this.pos = new p5.Vector(x, y)
        this.vel = new p5.Vector()
        this.acc = new p5.Vector()
        this.phase = phase
        this.r = 3

        this.originalx = this.pos.x
        this.originaly = this.pos.y
        this.colorToggle = true
    }

    update() {

        // gently oscillate our particle in the x direction
        // this our our period. 100 means 100 pixels on the screen
        let period = 100
        let ω = TWO_PI/period

        // we want to modify the amplitude of our sine wave to oscillate...
        // like a sine wave. the magnitude of the amplitude should depend on
        // the original x position of our particle

        let amp = map(sin(ω*this.originalx), -1, 1, 0, 20)

        // this produces a diagonal wave
        // let amp = map(sin(ω*(this.originalx+this.originaly)), -1, 1, 0, 20)

        // we want our particle to oscillate around a fixed point, i.e. its
        // original position
        this.pos.x = this.originalx + amp*sin(frameCount/30)
    }

    show() {
        noStroke()
        if (this.colorToggle) {
            fill(map(this.originalx, 0, width, 0, 360), 80, 100)
        } else fill(0, 0, 100)

        // fill(0, 0, 100, 40)
        circle(this.pos.x, this.pos.y, this.r)
    }
}