class PulseParticle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.r = 3

        this.originalx = this.pos.x
        this.colorToggle = false

        this.activated = false // when activated, animate one cycle and stop
        this.angle = 0
        this.delay = 0
        this.amp = 100
        this.period = TAU
    }


    update() { // pass in the current frameCount?

        // gently oscillate our particle in the x direction
        // this our our period. 100 means 100 pixels on the screen
        let ω = TWO_PI/this.period

        // we want to modify the amplitude of our sine wave to oscillate...
        // like a sine wave. the magnitude of the amplitude should depend on
        // the original x position of our particle

        // let amp = map(sin(ω*this.originalx), -1, 1, 0, 20)

        // we want our particle to oscillate around a fixed point, i.e. its
        // original position

        const DELTA = 0.03

        if (this.activated) {
            if (this.delay > 0) {
                this.delay -= 1
            } else {
                this.pos.x = this.originalx + this.amp*sin(ω*this.angle)
                this.angle += DELTA
                if (this.angle > PI/ω)
                    this.activated = false
            }
        } else {
            this.angle = 0
            this.delay = 60
        }
    }


    activate(delay, amp, period) {
        this.activated = true
        this.delay = delay
        this.amp = amp
        this.period = period
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