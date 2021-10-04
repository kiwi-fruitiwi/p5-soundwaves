class Particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.vel = new p5.Vector()
        this.acc = new p5.Vector()
        this.r = 3
    }

    update() {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.setMag(0)
    }

    show() {
        stroke(0, 0, 100, 70)
        strokeWeight(1)
        fill(0, 0, 100, 40)
        circle(this.pos.x, this.pos.y, this.r)
    }
}