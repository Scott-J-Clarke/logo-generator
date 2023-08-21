const Triangle = require('./triangle');
const Square = require('./square');
const Circle = require('./circle'); 

function createShape(response) {
    if (response.shape === 'triangle') {
        let logoShape = new Triangle (response.text, response.textColor, response.shapeColor)
        return logoShape.render();
    }

    if (response.shape === 'square') {
        let logoShape = new Square (response.text, response.textColor, response.shapeColor)
        return logoShape.render();
    }
    
    if (response.shape === 'circle') {
        let logoShape = new Circle (response.text, response.textColor, response.shapeColor)
        return logoShape.render();
    }
}

module.exports = createShape;