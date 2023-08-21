const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle.js'); 

function createShape(response) {
    if (response.shape === 'Triangle') {
        let logoShape = new Triangle (response.text, response.textColor, response.shapeColor)
        return logoShape.render;
    }
    if (response.shape === 'Square') {
        let logoShape = new Square (response.text, response.textColor, response.shapeColor)
        return logoShape.render;
    }
    if (response.shape === 'Circle') {
        let logoShape = new Circle (response.text, response.textColor, response.shapeColor)
        return logoShape.render;
    }
}

module.exports = createShape;