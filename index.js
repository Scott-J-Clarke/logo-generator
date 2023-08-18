const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require("./lib/shapes.js"); // Desconstructed syntax
// Use "require('fs')"" because writeFile is needed to create "logo.svg"?
const fs = require('fs');

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

// Based on Module 9 Challenge, 'writeToFile()' function and 'init()' function work together. 

// writeToFile function take its call from inside the 'init()' function:
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log('Generated logo.svg'); // Changed string output for Module 10 Challenge.
    }); 
}

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
          } 
        
        // This writeToFile function invocation creates the logo.svg and puts it in 'examples' folder:
        writeToFile('./examples/logo.svg', generateLogo(userResponses)); // 'generateLogo' function in separte file.

        // console.log(userResponses); // Test to see what user input ('userResponses').
        // Is there a way for the user tor review their logo choices (shape, text, textColor, shapeColor) before generating the logo? 
    } catch (error) {
        console.log(error);
    }
}

init();

// Will need to create a template with a particular SVG string.
// This is similar to Module 9 Challenge where we created the README file.