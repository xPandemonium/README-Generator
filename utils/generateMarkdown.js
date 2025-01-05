// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

  ## Contact

  - **Github:** [github.com/${data.username}](github.com/${data.username})
  - **Email:** ${data.email}
`;
}

export default generateMarkdown;