class Repeller {
  constructor(x, y, power, alpha) {
    this.position = createVector(x, y);

    this.power = 150;
    this.power = power || 150;
    this.alpha = alpha;
    this.setSize();
  }

  setSize(size) {
    this.size = size || map(this.power, 1, 200, 5, 50);
  }
  
  show() {
    stroke(0);
    strokeWeight(0);
    fill(0, 0, 200, this.alpha);
    circle(this.position.x, this.position.y, this.size);
  }

  repel(particle) {
 
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
