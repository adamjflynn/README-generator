// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    if (license == "MIT") {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else if (license == "Apache 2.0") {
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
} else if (license == "GNU GPL v3") {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
} else if (license == "Mozilla Public License 2.0") {
        return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
} else if (license == "No License") {
        return ''
  }  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
    if (license == "MIT") {
        return `(https://opensource.org/licenses/MIT)`
      } else if (license == "Apache 2.0") {
        return `(https://opensource.org/licenses/Apache-2.0)`
      } else if (license == "GNU GPL v3") {
        return `(https://www.gnu.org/licenses/gpl-3.0)`
      } else if (license == "Mozilla Public License 2.0") {
        return `(https://opensource.org/licenses/MPL-2.0)`
      } else if (license == "No License") {
        return ''
      }
    }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
        
      This project uses the [${license}]` + renderLicenseLink(license) + ' license.'
      }
      return ''
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [GitHub](#github)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}  
  ![Screenshot of Application]("./dist/screenshot.jpg")
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}  
  ## Tests
  ${data.test}
  ## Questions
  Reach out via email or GitHub.  
  ${data.email}  
  [${data.github}](https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;