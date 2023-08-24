const Shape = require('./shape');

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="300" height="200" fill="${this.shapeColor}"/>
            <text x="50%" y="50%" font-size="70" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Square;
