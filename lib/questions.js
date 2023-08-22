const colorKeywords = require('./colorKeywords');

const questions = [
    {
        name: "text",
        type: "input",
        message: "You can have a maximum of three characters on your logo. Enter your characters:",
        validate: (userResponse) => {
            if (userResponse.length > 3) {
                return console.log("\nYour logo text must be 3 characters or less. Please try again!");
            }
            return true;
        }
    },
    {
        name: "textColorChoice",
        type: "list",
        message: "Choose how you will enter the color of your logo characters:",
        choices: ["color keyword", "hexadecimal code"]
    },
    {
        name: "textColor",
        type: "input",
        message: "Enter the color keyword for your logo characters:",
        when: (userResponse) => {
            if (userResponse.textColorChoice === "color keyword") {
                return true;
            }
            return false;
        },
        validate: (userResponse) => {
            const userResponseLowercase = userResponse.toLowerCase();
            for (let i = 0; i < colorKeywords.length; i++) {
                if (userResponseLowercase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }
                return console.log("\n Please enter a valid color keyword.");
            }
        }
    },
    {
        name: "textColor",
        type: "input",
        message: "Enter the hexadecimal code (#CCCCCC) for your logo characters:",
        when: (userResponse) => {
            if (userResponse.textColorChoice === "hexadecimal code") {
                return true;
            }
            return false;
        },
        validate: (userResponse) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!userResponse.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal code.");
            }
            return true;
        }
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

module.exports = questions;