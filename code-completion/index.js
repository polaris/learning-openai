require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async () => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "Write a JavaScript function that accepts first name, second name, and birth date in string format as a parameter values and returns the full name, and the number of days from the birth date to today",
    temperature: 0,
    max_tokens: 1256,
  });

  response.data.choices.forEach((element) => {
    console.log(element.text);
  });
})();
