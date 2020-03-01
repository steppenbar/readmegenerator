function generateMarkdown(answers) {
  return `# ${answers.title}
  [![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)
  [![ForTheBadge built-with-science](http://ForTheBadge.com/images/badges/built-with-science.svg)](https://GitHub.com/Naereen/)]
  [![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)
  
  ## Description
  * ${answers.description}
  ![animated gif](utils/images/Untitled_ Feb 29, 2020 11_06 PM (1).gif)
   
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Questions](#Questions)

  ## Installation
  * The following installations are required: ${answers.installation}
  ## Usage
  * ${answers.usage}
  ## License
  * ${answers.license}
  ## Contributing
  * ${answers.contributing}
  ## Tests
  * ${answers.tests}
  ## Questions
  * ${answers.questions}
  ## Github Profile Avatar
  ![Profile Picture](${answers.avatar}=250x)
 
    # ${answers.Username}
 




`;
}

module.exports = generateMarkdown;
