// Shape parent class has 3 values ('shapeColor', 'text', and 'texColor'). 
// Each of 'Triangle', 'Square', and 'Circle' will inherit these 3 values.
// 'Triangle', 'Square', and 'Circle' each has its own 'render()' method as well.

class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor; 
    }
}

module.exports = Shape;
