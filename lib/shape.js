// Shape parent class has 3 values ('text', 'texColor', and 'shapeColor'). 
// Each of 'Triangle', 'Square', and 'Circle' will inherit these 3 values.
// 'Triangle', 'Square', and 'Circle' each has its own 'render()' method because the '.svg' file for each is different.

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor; 
    }
};

module.exports = Shape;
