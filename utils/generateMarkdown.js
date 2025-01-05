// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }else if (license == 'APACHE 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  }else if (license == 'GPL 3.0'){
    return  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }else if (license == 'BSD 3'){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]'
  }else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT'){
    return '(https://opensource.org/licenses/MIT)'
  }else if (license == 'APACHE 2.0'){
    return '(https://opensource.org/licenses/Apache-2.0)'
  }else if (license == 'GPL 3.0'){
    return  '(https://www.gnu.org/licenses/gpl-3.0)'
  }else if (license == 'BSD 3'){
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  }else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None'){
    return ''
  }else {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Installation

  To install all necessary files, use the following command on the CLI;
  
  \`\`\`
  ${data.install}
  \`\`\`

  ## Tests

  To run tests, use the following command on the CLI;
  
  \`\`\`
  ${data.runTest}
  \`\`\`

  ## Knowledge required to use the repo

  ${data.infoRepo}

  ## Contribution

  ${data.infoContribute}

  ## Lisence

  ${renderLicenseSection(data.license)}

  ## Contact

  - **Github:** [github.com/${data.username}](github.com/${data.username})
  - **Email:** ${data.email}
`;
}

export default generateMarkdown;