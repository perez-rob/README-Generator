
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

    default:
      return '';
  }
}


function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';

    case 'APACHE 2.0':
      return '[APACHE 2.0 License](https://opensource.org/licenses/Apache-2.0)';

    case 'GPL 3.0':
      return '[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)';

    case 'BSD 3':
      return '[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)';

    default:
      return '';
  }
}


function renderLicenseSection(license) {
  if (license == 'none') {
    return `## License
This software is not licensed for open source use.`;
  } else {
  
  return `## License

This project is licensed under the ${renderLicenseLink(license)}.`
  }
}

// called in Table of Contents section and only renders if user responded 'yes' to the featureConfirm prompt
function renderFeatureLink(featureConfirm) {
  if (!featureConfirm) {
    return '';
  } else {
    return '- [Features](#features)'
  }
}

// called in main README section and only renders if user responded 'yes' to the featureConfirm prompt
function renderFeatures(featureConfirm, features) {
  if (!featureConfirm) {
    return '';
  } else {
    return `## Features  
${features}`;
  }
}

function generateMarkdown(data) {
  return `# ${data.projectName}

${renderLicenseBadge(data.license)}  



## Description

${data.description}  



## Table of Contents

- [Installation](#installation)

${renderFeatureLink(data.featureConfirm)}

- [Usage](#usage)

- [Credits](#credits)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

- [License](#license)  



## Installation

To install required dependencies, run the following command(s):

\`\`\`
${data.installCMD}
\`\`\`  

${renderFeatures(data.featureConfirm, data.features)}

## Usage

${data.usage}  

## Credits

${data.credits}

## Contributing

${data.contributing}  



## Tests

To run tests, run the following command(s):

\`\`\`
${data.testCMD}
\`\`\`  



## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [github/${data.userName}](https://github.com/${data.userName}).  


${renderLicenseSection(data.license)}  


`;
}

module.exports = generateMarkdown;
