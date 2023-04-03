require("dotenv").config();

const OpenAIApi = require("openai").OpenAIApi;
const Configuration = require("openai").Configuration;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

(async () => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say hello world!",
    temperature: 0.6,
    max_tokens: 100,
  });

  console.log(completion.data.choices[0].text);
})();
