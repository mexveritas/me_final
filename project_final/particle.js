class Particle {
  constructor(x, y, size) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255.0;
    this.size = 4;
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }

  checkEdge() {
    if (this.position.y > height) {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = height;
    }

    if (this.position.y < 0) {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = 0;
    }

    if (this.position.x < 0) {
      this.velocity.x = this.velocity.x * -1;
      this.position.x = 0;
    }

    if (this.position.x > width) {
      this.velocity.x = this.velocity.x * -1;
      this.position.x = width;
    }
  }

  // Method to display
  show() {
    stroke(0, this.lifespan);
    strokeWeight(0);
    fill(0, this.lifespan);
    circle(this.position.x, this.position.y, this.size);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}
