const Shape = require('./shape');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="50%" y="50%" font-size="70" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = Circle;
