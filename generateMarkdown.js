const licenseBadges = {
    "Apache_2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "ISC": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    // Add more badges for other licenses as needed
};

function renderLicenseBadge(license) {
    return license !== "None" ? licenseBadges[license] : '';
}

function renderLicenseLink(license) {
    return license !== "None" ? `[${license}](${licenseBadges[license]})` : '';
}

function renderLicenseSection(license) {
    return license !== "None" ? `## License\n\nThis project is licensed under the ${license} license.` : '';
}

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

module.exports = generateMarkdown;
