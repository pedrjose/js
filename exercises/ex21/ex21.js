// Create an object called shape that has the type property and a getType() method.

function getType (data) {
    return typeof data;
}

const shape = {
    typeShape: 'Circle',
    shapeProperties: function () {
        console.log(`The property of shape is ${getType(this.typeShape)}!`)
    }
}

const s = Object.create(shape); s.typeShape = 'Triangle';
s.shapeProperties();