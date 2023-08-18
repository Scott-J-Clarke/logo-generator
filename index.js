const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require("./lib/shapes.js"); // Desconstructed syntax
// Need "require('fs')" to use writeToFile. writeToFile will create "logo.svg":
const fs = require('fs');
const generateLogo = require('./lib/generateLogo.js'); // Brings in 'generateLogo()' function from 'generateLogo.js':

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

// writeToFile function is invoked from inside the 'init()' function:
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log('Generated logo.svg'); // String output tells user in terminal that log has been made for them.
    }); 
}

async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        let shape;
        switch (userResponses.shape) {
            case "triangle":
              shape = new Triangle();
              console.log(shape.render()); // Test to check if triangle points are returned.
            //   console.log(shape.getText("abc")); // Test to see if it returns 'abc' but it is 'undefined.'
              break;
            case "square":
              shape = new Square();
              console.log(shape.render()); // Test to check if square points are returned.
              break;
            case "circle":
              shape = new Circle();
              console.log(shape.render()); // Test to check if circle points are returned.
              break;
          } 
        
        // writeToFile function creates 'logo.svg' and puts it in 'examples' folder:
        writeToFile('./examples/logo.svg', generateLogo(userResponses)); 

        // console.log(userResponses); // Test to see what user input ('userResponses').
        
        // Could user review their logo choices (shape, text, textColor, shapeColor) before generating the logo? 
    } catch (error) {
        console.log(error);
    }
}

init();

// Will need to create a template with a particular SVG string.
