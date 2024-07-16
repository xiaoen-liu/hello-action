const core = require('@actions/core');
const github = require('@actions/github');

function extractScore(text) {
    const startTag = "<code_review_score>";
    const endTag = "</code_review_score>";
    const startIndex = text.indexOf(startTag) + startTag.length;
    const endIndex = text.indexOf(endTag);
    if (startIndex !== -1 && endIndex !== -1) {
        return parseInt(text.slice(startIndex, endIndex));
    }
    return null;
}

try {
  // Fetch the value of the input 'who-to-greet' specified in action.yml
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  
  // Record the time of greeting as an output
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);



} catch (error) {
  // Handle errors and indicate failure
  core.setFailed(error.message);
  return;
}
