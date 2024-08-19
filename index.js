const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide contribution guidelines:",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide test instructions:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "GPLv3", "Apache_2.0", "ISC", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}

init();
