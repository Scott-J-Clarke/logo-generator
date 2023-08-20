const inquirer = require('inquirer');
// Unsure if this line is needed in 'index.js' since it is being sent to 'createShape.js' for processing:
const { Triangle, Square, Circle } = require("./lib/shapes.js"); // Desconstructed syntax
// "require('fs')" needed for writeToFile and create "logo.svg":
const fs = require('fs');
// Not sure if 'generateLogo' function is still necessary, so commented it out:
// const generateLogo = require('./lib/generateLogo.js'); // Brings in 'generateLogo()' function from 'generateLogo.js':
// Brings in createShape function from '':
const createShape = require('./lib/createShape.js');

const questions = [
    // It seems like "shape" should be the last question because it has the 'render()' function.

    // Commented out first 3 questions to focus on generating the shape points in 'logo.svg':

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

// generateLogo function is invoked from inside the 'init()' function:
function generateLogo(response) {
    // Invokes createShape function (from another file) on user 'response' and creates 'logo.svg' in 'examples' folder.
    fs.writeFile('./examples/logo.svg', createShape(response), (error) => {
        if (error) {
            return console.log(error);
        }
        console.log('Generated logo.svg');
    });
}

// Initalize the application, ask the user questions, then take responses and generate a logo (or throw an error).
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      generateLogo(response);
    }) 
    .catch(error => {
      console.log(error);
    }) 
}

init();

// Initial code based off of Module 9 Challenge:
// Trinh suggested 'switch statement' but I can't figure out how to gain access to the 'render()' function through 'generateLogo.js'

// async function init() {
//   try {
//       const userResponses = await inquirer.prompt(questions);
//       let shape;
//       switch (userResponses.shape) {
//           case "triangle":
//             shape = new Triangle();
//             // console.log(shape.render()); // Test if triangle '.svg' is returned with 'text', 'textColor', and 'shapeColor.'
//                                             // Test returns '.svg' but it does not have any of the 3 user inputs.
//             // console.log(shape.getText("abc")); // Test to see if it returns 'abc' but it is 'undefined.'
//             break;
//           case "square":
//             shape = new Square();
//           // console.log(shape.render()); 
//             break;
//           case "circle":
//             shape = new Circle();
//           // console.log(shape.render()); 
//             break;
//         } 
      
//       // writeToFile function creates 'logo.svg' and puts it in 'examples' folder:
//       writeToFile('./examples/logo.svg', generateLogo(userResponses)); 

// // console.log(userResponses); // Test to see what user input ('userResponses').
        
//         // Could user review their logo choices (shape, text, textColor, shapeColor) before generating the logo? 
//     } catch (error) {
//         console.log(error);
//     }
// }