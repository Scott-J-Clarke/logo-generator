// The parent class Shape has 3 values. Each of 'Triangle', 'Square', and 'Circle' have their own render() methods:

class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor; 
    }
}

class Square extends Shape {
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg"
            <rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

class Circle extends Shape {
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg"
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = Shape;

// These methods were part of Trinh's suggested code. Put a method on each of the Parent class values in order to collect them from the user.

// getText(text) { // Don't need to declare a function (method) inside an object. Object recognizes method.
//     this.text = text;
// }
// getTextColor(textColor) {
//     this.textColor = textColor; // How will textColor be converted to a value computer can use? Hexadecimal? 
// }
// getShapeColor(shapeColor) {
//     this.shapeColor = shapeColor; // Same thing with shapeColor.
// }