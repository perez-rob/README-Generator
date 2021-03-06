
const inquirer = require('inquirer');
const fs = require('fs');
// imports functions for rendering the README components
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName'
    },
    // simple validation algorithm requires "@" in the email input
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (input) => {
            if (!input.includes('@')) {
                return 'Please enter a valid email address...';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectName'
    },
    {
        type: 'list',
        message: "What kind of license should you project have?",
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none']
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description'
    },
    {
        type: 'confirm',
        message: "Would you like to add a 'Features' section to your README?",
        name: 'featureConfirm'
    },
    // only prompts user if they said 'y' (true) to the last question, uses editor so user can format section how they want given they may have multiple features
    {
        type: 'editor',
        message: "Use the editor to describe your project\'s features (close the editor when finished and click 'Save'):",
        name: 'features',
        when(answers) {
            return answers.featureConfirm;
        }
    },
    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage'
    },
    // added credits section since it was listed as a required section in the 'Professional README Guide' attached to the project instructions
    {
        type: 'input',
        message: "Who deserves to be credited for this project's development?",
        name: 'credits'
    },
    {
        type: 'input',
        message: "What command should be run to install dependencies?",
        name: 'installCMD',
        default: 'npm ci' 
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testCMD',
        default: 'npm test' 
    },
    {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'contributing'
    }

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        err ? console.error(err) : console.log('Generating README.md...');     
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // writes generated README to a subdirectory to avoid confusion with the project's README
            writeToFile('./new-README/README.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
