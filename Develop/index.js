const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Username",
      message: "What is your Github username?"
    },
    
    {
      type: 'input',
      name: 'title',
      message: 'Enter a project title?'
  },
  {
      type: 'input',
      name: 'description',
      message: 'Enter a description?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Are there any installations required?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage?'
  },
  {
    type: 'input',
    name: 'license',
    message: 'Are there any license?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who is contributing?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Are there any tests?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Are there any questions?'
  }
    
  ]);
}



promptUser()
  .then(function(answers) {
    const gitHub = api.getUser(answers.Username)
    const markdown = generateMarkdown(answers);
    console.log(answers)
    console.log(gitHub)

    return writeFileAsync("ReadMe.md", markdown);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });





// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

