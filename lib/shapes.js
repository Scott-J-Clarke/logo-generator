// 'Shape' is the parent class. It has 'text', 'text color', and 'shape color.' All logos need these values.
// Each of 'Triangle', 'Square', and 'Circle' have their own 'render()' method to make their actual shape.

class Shape {
    constructor() {
        this.text = ""; // Each value is empty because it will be entered by the user. 
        this.textColor = "";
        this.shapeColor = "";
    }
    getText(text) { // Don't need to declare a function (method) inside an object. Object recognizes method.
        this.text = text;
    }
    getTextColor(textColor) {
        this.textColor = textColor; // How will textColor be converted to a value computer can use? Hexadecimal? 
    }
    getShapeColor(shapeColor) {
        this.shapeColor = shapeColor; // Same thing with shapeColor.
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

module.exports = { Triangle, Square, Circle };