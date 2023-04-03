require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

(async () => {
  const response = await openai.createEdit({
    model: "text-davinci-edit-001",
    input: "What day of the wek is it?",
    instruction: "Fix the spelling mistakes",
  });

  console.log(response.data.choices[0].text);
})();
