const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require("./lib/shapes.js"); // Desconstructed syntax

// Depending on what shape we are importing, we will create an object from that class.

const questions = [
    // It seems like "shape" should be the last question because it has the 'render()' function.
    {
        name: "text",
        type: "input",
        message: "You can have a maximum of three letters on your logo. Enter your letters:"
    },
    {
        name: "textColor",
        type: "input",
        message: "What color do you want your letters to be?"
    },
    {
        name: "shapeColor",
        type: "input",
        message: "What color do you want your logo shape to be?"
    },
    {
        name: "shape",
        type: "list",
        message: "What shape do you want your logo to be?",
        choices: ["triangle", "square", "circle"]
    }
]

async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        let shape;
        switch (userResponses.shape) {
            case "triangle":
              shape = new Triangle();
              console.log(shape.render()); // Testing to see if triangle points are returned.
            //   console.log(shape.getText("abc")); // Testing to see if getText console.logs text.
              break;
            case "square":
              shape = new Square();
              console.log(shape.render()); // Testing to see if square points are returned.
              break;
            case "circle":
              shape = new Circle();
              console.log(shape.render()); // Testing to see if circle points are returned.
              break;
          } // It would be nice to put in something where the user could review their logo choices (shape, text, textColor, shapeColor).
        
        // console.log(userResponses); // Old code (from Module 9 Challenge?).
    } catch (error) {
        console.log(error);
    }
}

init();

// Will need to create a template with a particular SVG string.
// This is similar to Module 9 Challenge where we created the README file.