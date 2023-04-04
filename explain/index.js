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
      "class Car {\npublic:\n  string brand;\n  string model;\n  int year;\n};\n\n// Here's what the above class is doing, explained in a concise way:\n// 1.",
    temperature: 0,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ['"""'],
  });

  console.log(response.data.choices[0].text);
})();
