

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateHTML(data) {
    return `<h1>List of Employees</h1>
<div>
${data.description}

## Installation Instructions {#installation}

${data.installation}

## Examples for use {#examples}

${data.examples}

## Collaborator Credits {#collab}

${data.collab}

## License Badge and Link {#license}

${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

## Features {#features}

${data.features}

## How can others contribute? {#contribute}

${data.contribute}

## Questions, comments concerns? {#questions}

Please get in touch with me via github or my email below.

[Github](https://www.github.com/${data.github})

${data.email}


`;
}

module.exports = generateMarkdown;
