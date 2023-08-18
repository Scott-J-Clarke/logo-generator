// Each shape needs to return the code to create the shape.
// 'Shape' should have 'text', 'text color', and 'shape color.'
// 'Triangle', 'Square', and 'Circle' will define 'shape.'

/*{ <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  </svg> }*/ // This will be added later to wrap the shapes.

class Shape {
    constructor() {
        this.text = ""; // Each value will be entered by the user. Pass data through properties or methods.
        this.textColor = "";
        this.shapeColor = "";
    }
    getText(text) { // Method can be created inside an object. Don't need to declare a function. Object recognizes method.
        this.text = text;
    }
    getTextColor(textColor) {
        this.textColor = textColor; // What will we do with textColor?
    }
    getShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
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