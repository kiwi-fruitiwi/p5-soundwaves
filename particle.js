class Particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.r = 3

        // each particle exhibits sinusoidal motion
        this.amp = 100
        this.period = 100
        this.angle = 0

        // particles don't move until they are activated
        this.activated = false

        // after a delay of n, the particle will start moving!
        this.delay = 0
    }


    activate(amp, period, delay) {
        this.activated = true
        this.amp = amp
        this.period = period
        this.delay = delay
    }

    update() {
        if (this.activated) {
            if (this.delay>0) {
                this.delay -= 1
            } else {
                // what happens if this particle is activated and the delay
                // period is finished

                
            }
        }
    }

    show() {
        noStroke()
        fill(0, 0, 100, 20)
        circle(this.pos.x, this.pos.y, this.r*2)
    }
}