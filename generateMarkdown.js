// Object containing license badges with their respective links.
// Each key represents a license type, and the value is a Markdown string
// that includes a badge and a link to the license information.
const licenseBadges = {
    "Apache_2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "ISC": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    // Add more badges for other licenses as needed
};

/**
 * Function to generate the license badge for a given license type.
 * @param {string} license - The license type selected by the user.
 * @returns {string} - Markdown-formatted license badge if a license is selected, otherwise an empty string.
 */
function renderLicenseBadge(license) {
    return license !== "None" ? licenseBadges[license] : '';
}

/**
 * Function to generate a link to the license details.
 * @param {string} license - The license type selected by the user.
 * @returns {string} - Markdown-formatted link to the license details if a license is selected, otherwise an empty string.
 */
function renderLicenseLink(license) {
    return license !== "None" ? `[${license}](https://opensource.org/licenses/${license.replace('_', '-')})` : '';
}

/**
 * Function to generate the license section for the README file.
 * Includes the license type and a link to more details about the license.
 * @param {string} license - The license type selected by the user.
 * @returns {string} - Markdown-formatted license section if a license is selected, otherwise an empty string.
 */
function renderLicenseSection(license) {
    return license !== "None" ? `## License\n\nThis project is licensed under the ${license} license.\nFor more details, see: ${renderLicenseLink(license)}` : '';
}

/**
 * Function to generate the complete Markdown content for the README file.
 * Constructs the README using user-provided data, including sections for
 * title, description, installation, usage, license, contributing, tests, and questions.
 * @param {object} data - User input data collected from the prompts.
 * @returns {string} - Full Markdown content for the README file.
 */
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${data.license !== "None" ? '- [License](#license)' : ''}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me with the information below:

GitHub: [${data.github}](https://github.com/${data.github})  
Email: ${data.email}
`;
}

// Exports the generateMarkdown function so it can be used in other files (like index.js).
module.exports = generateMarkdown;
