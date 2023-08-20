const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg"
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = Circle;