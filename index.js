const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
const createShape = require('./lib/createShape');

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
