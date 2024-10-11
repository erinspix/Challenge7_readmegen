const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (input) => input.trim() !== "" ? true : "Project title cannot be empty!"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project:",
        validate: (input) => input.trim() !== "" ? true : "Project description cannot be empty!"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions:",
        validate: (input) => input.trim() !== "" ? true : "Installation instructions cannot be empty!"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information:",
        validate: (input) => input.trim() !== "" ? true : "Usage information cannot be empty!"
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide contribution guidelines:",
        validate: (input) => input.trim() !== "" ? true : "Contribution guidelines cannot be empty!"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide test instructions:",
        validate: (input) => input.trim() !== "" ? true : "Test instructions cannot be empty!"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "GPLv3", "Apache_2.0", "ISC", "None"],
        validate: (input) => input ? true : "Please select a license option!"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:",
        validate: (input) => input.trim() !== "" ? true : "GitHub username cannot be empty!"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
        validate: (input) => {
            // Basic email validation check
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
            return isValidEmail ? true : "Please enter a valid email address!";
        }
    },
];

// Function to write the generated README content to a file with enhanced error handling
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing file:", err.message); // Log the specific error message
            console.error("Make sure you have write permissions in this directory and the file path is correct.");
        } else {
            console.log('Successfully created README.md!');
        }
    });
}


function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            try {
                const markdownContent = generateMarkdown(answers);
                writeToFile('README.md', markdownContent);
            } catch (error) {
                console.error("An error occurred while generating the README content:", error);
            }
        })
        .catch((error) => {
            console.error("An error occurred during the user prompt phase:", error);
        });
}

init();
