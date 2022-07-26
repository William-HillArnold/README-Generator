// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([

    { type: 'input',
    name: 'title',
    message: 'What is the title of your project?' },
    { type: 'input',
    name: 'description',
    message: 'Please describe your project.' },
    { type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?' },
    { type: 'input',
    name: 'usage',
    message: 'Please describe how to use your project.' },
    { type: 'input',
    name: 'credits',
    message: 'Please list your collaborators.' },
    { type: 'input',
    name: 'license',
    message: 'Please list your license.' },
]);
}

 const gernerateREADME = ({title, description, installation, usage, credits, license}) =>
    `
     ${title}
    -- Description -- 
    ${description}
    -- Installation --
    ${installation}
    -- Usage --
    ${usage}
    -- Credits --
    ${credits}
    -- License --
    ${license}
    `;

    const init = () => {
   promptUser()

    .then((answers) => fs.writeFileSync('README.md', gernerateREADME(answers)))
    .then(() => console.log('Successfully created README.md'))
    .catch((err) => console.log(err));

   };

 init();

/*
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/  