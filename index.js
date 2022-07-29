//***** Packages needed for this application *****

const inquirer = require("inquirer");
const fs = require("fs");
renderLicenseBadge('');
// *****  Array of questions for user input *****

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe how to use your project.",
    },
    {
      type: "input",
      name: "credits",
      message: "Please list your collaborators.",
    },
    {
      type: "list",
      name: "licence",
      message: "Please list your license.",
      choices: ['MIT', 'ISC', 'GNUPLv3']
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your github username for questions.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email for questions.",
    },
  ]);
};

// ***** function to render README licence badge *****

function renderLicenseBadge(license) {
  const badges = {
    mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    isc: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
    gungplv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    }
  return badges[license];
}

// ***** function to write README file *****

const gernerateREADME = (answers) =>
  `
# ${answers.title}

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Content
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)


## Description 
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits 
${answers.credits}

## License
${answers.license}

## Questions 
- Github: ${answers.github}
- Email: ${answers.email}

Video link https://app.castify.com/view/1d2716d9-31d8-457a-8cbf-8734269c419d
`;
//*****  Function call to initialize app *****

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync("README.md", gernerateREADME(answers)))
    .then(() => console.log("Successfully created README.md"))
    .catch((err) => console.log(err));
};

init();