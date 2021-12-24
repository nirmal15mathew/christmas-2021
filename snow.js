function Snow() {
    this.particles = []
    
    this.show = function() {
        for (let item of this.particles) {
            item.show()
            item.update()
        }
    }

    this.populate = function(count) {
        for (let i = 0; i < count;i++) {
            this.particles.push(new Particle(random(0, width - 300)))
        }
    }
}

function Particle(x) {
    this.pos = createVector(x, random(0, height - 100));
    this.vel = createVector(random(-2, 4), random(3, 7));

    this.show = function() {
        point(this.pos.x, this.pos.y);
        stroke("white")
    }
    this.update = function() {
        this.pos.add(this.vel)
        this.respawn()
    }
    this.respawn = function() {
        if (this.pos.x > width) {
            this.pos.x = random(0, width - 300)
        }
        if (this.pos.y > height) {
            this.pos.y = 0
        }
    }
}