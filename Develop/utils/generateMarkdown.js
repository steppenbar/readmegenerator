function generateMarkdown(data) {
  return `# ${data.title}
  [![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)
  [![ForTheBadge built-with-science](http://ForTheBadge.com/images/badges/built-with-science.svg)](https://GitHub.com/Naereen/)]
  [![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)
 
    # ${data.Username}
    ${data["number of repos"]}
    ${data["User location"]}
`;
}

module.exports = generateMarkdown;
