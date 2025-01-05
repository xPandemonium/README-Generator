// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'runTest',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'infoRepo',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'infoContribute',
        message: 'What does the user need to know about contributing to the repo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response)
        const fileName = 'README.md';
        writeToFile(fileName, generateMarkdown(response))
    })
}

// Function call to initialize app
init();