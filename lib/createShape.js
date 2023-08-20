const { Triangle, Square, Circle } = require("./lib/shapes.js"); // Desconstructed syntax

function createShape(response) {
    if (response.shape === 'Triangle') {
        let logoShape = new Triangle (response.text, response.textColor, response.shapeColor)
        return logoShape.render;
    }
    if (response.shape === 'Square') {
        let logoShape = new Square (reponse.text, response.textColor, response.shapeColor)
        return logoShape.render;
    }
    if (response.shape === 'Circle') {
        let logoShape = new Circle (reponse.text, response.textColor, response.shapeColor)
        return logoShape.render;
    }
}

module.exports = createShape;