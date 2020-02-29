function generateMarkdown(data) {

  return `
    # ${data.Username}
    ${data["number of repos"]}
    ${data["User location"]}
`;
}

module.exports = generateMarkdown;
