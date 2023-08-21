const inquirer = require('inquirer');
const fs = require('fs');
// const createShape = require('./lib/createShape');
// Can be written directly into 'writeFile' function:
// const fileName = './examples/logo.svg';

const questions = [
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

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor; 
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

function createShape(response) {
    if (response.shape === 'triangle') {
        let logoShape = new Triangle (response.text, response.textColor, response.shapeColor);
        return logoShape.render();
    }
}

function init() {
    return inquirer.prompt(questions)
    .then(response => {
        return writeToFile('./examples/logo.svg', createShape(response)); 
    })    
    .catch(error => {
            console.log(error);
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log("File created!"));
}

init();


// 'data' argument needs to be an instance of 'string.'

// .then(svgLogoFile => { // 'svgLogoFile' is a 'function.'
        // 'svgLogoFile' needs to be an instance of 'string.'
        // When the entire svg string is put in as a parameter, file 'logo.svg' is generated.
        // So the problem seems to be somewhere between calling 'svgLogoFile' and receiving the string.
        // '${this.shapeColor}', '${this.textColor}', and '${this.text}' are not being passed either (all 'undefined').
        // return writeToFile('./examples/logo.svg', svgLogoFile); 
    // })

// return createShape(response);
        // console.log(createShape(response));

        // let data = createShape(response);
        // console.log('Success! Your logo.svg file has been generated!');
//     }) 
// }

// fs.writeFile('./examples/logo.svg', createShape(response), (error) => {
//     if (error) {
//         return console.log(error);
//     }
// })

// const init = () => {
//     return inquirer.prompt(questions)
//       .then(response => {
//         return createShape(response);
//       })
//       .then(readmeFile => {
//         return writeToFile("./dist/README.md", readmeFile);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//       err ? console.error(err) : console.log('README created!'));
//   }

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (error) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Success! Your logo.svg file has been generated!');
//     }); 
// }

// Initalize the application, ask the user questions, then take responses and generate a logo (or throw an error).

// Function to initialize README generator app:
// async function init() {
//     try {
//         const userResponses = await inquirer.prompt(questions);
//         // Inside 'init' function 'writeToFile' needs to take a string as its second argument:
//         // createShape(userResponses) is not a string. What is it?
//         writeToFile('./examples/logo.svg', createShape(userResponses));
//         // try-catch syntax requires a catch or to work properly:
//     } catch (error) {
//         console.log(error);
//     }
// }

// Invoke the function:


// // Does 'response' need to be insde 'generateLogo' function?
// function generateLogo(response) {
//     // const svg = createShape(response);
//     fs.writeFile('./examples/logo.svg', createShape(response), (error) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Generated logo.svg');
//     });
// }

// // Initalize the application, ask the user questions, then take responses and generate a logo (or throw an error).
// function init() {
//   inquirer
//     .prompt(questions)
//     .then((response) => {
//       generateLogo(response);
//     }) 
//     .catch(error => {
//       console.log(error);
//     }) 
// }

// init();

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