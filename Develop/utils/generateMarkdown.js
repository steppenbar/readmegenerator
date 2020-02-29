function generateMarkdown(data) {
  return `# ${data.title}
  [![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)
  [![ForTheBadge built-with-science](http://ForTheBadge.com/images/badges/built-with-science.svg)](https://GitHub.com/Naereen/)]
  [![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)
  
  ## Description
  * ${data.description}
  ![Questions](utils/images/example.gif)]
   ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Questions](#Questions)

    # ${data.Username}
    ${data["number of repos"]}
    ${data["User location"]}
`;
}

module.exports = generateMarkdown;
