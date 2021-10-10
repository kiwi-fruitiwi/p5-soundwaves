class PulseParticle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.r = 3

        this.originalx = this.pos.x
        this.rainbowColorToggle = false

        // we need something external to offset all particle movement;
        // otherwise every particle will move together at the same rate
        this.activated = false

        this.angle = 0
        this.delay = 0
        this.amp = 100
        this.period = TAU
    }


    // gently oscillate our particle in the x direction
    update() {
        // a period of 100 means 100 pixels on the screen equals a full cycle
        let ω = TWO_PI/this.period

        // we want our particle to oscillate around a fixed point, i.e. its
        // original position

        // this is how much our independent variable increases per frame
        const DELTA = 0.03

        if (this.activated) {
            // our delay allows particles to not move in unison, thus
            // expressing longitudinal wave characteristics

            // delay acts as a buffer; when it runs out, we start oscillating!
            if (this.delay > 0) {
                this.delay -= 1
            } else {
                // oscillate around our original x coordinate :3
                this.pos.x = this.originalx + this.amp*sin(ω*this.angle)
                this.angle += DELTA

                // this code is here to made it stop after half a period
                // if (this.angle > PI/ω)
                //     this.activated = false
            }
        } else {
            // if we stop activation, we could reset the angle and delay if
            // needed
            this.angle = 0
            this.delay = 60
        }
    }

    // tell this particle to start oscillating with the given amplitude and
    // period, given a delay in frames :D
    activate(delay, amp, period) {
        this.activated = true
        this.delay = delay
        this.amp = amp
        this.period = period
    }


    show() {
        noStroke()
        if (this.rainbowColorToggle) {
            fill(map(this.originalx, 0, width, 0, 360), 80, 100)
        } else fill(0, 0, 100, 20)

        // fill(0, 0, 100, 40)
        circle(this.pos.x, this.pos.y, this.r*2)
    }
}