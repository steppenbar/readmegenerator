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
      type: "number",
      name: "number of repos",
      message: "How many repositories do you have?"
    },
    
    {
      type: "input",
      name: "User location",
      message: "Where are you located?"
    },
    
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

