require("dotenv").config();

const OpenAIApi = require("openai").OpenAIApi;
const Configuration = require("openai").Configuration;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

function generatePrompt(commandLineTool) {
  const capitalizedcommandLineTool =
    commandLineTool[0].toUpperCase() + commandLineTool.slice(1).toLowerCase();
  return `What are the basic commands for using the '${capitalizedcommandLineTool}' command line tool?"`;
}

(async () => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt("less"),
    temperature: 0.6,
    max_tokens: 2048,
  });

  console.log(completion.data.choices[0].text);
})();
