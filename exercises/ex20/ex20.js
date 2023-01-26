// Write a JavaScript program to get the volume of a Cylinder using object classes.

class Cylinder {
    constructor(radius, height) {
        this.pi = 3.14,
            this.radius = radius,
            this.height = height
    }

    area() {
        let area = ((this.pi) * ((this.radius * this.radius) * this.height));
        console.log(`\nThe area of cylinder inputted is approximately ${area}!`);
    }
}

let c = new Cylinder(2, 1);
c.area();
