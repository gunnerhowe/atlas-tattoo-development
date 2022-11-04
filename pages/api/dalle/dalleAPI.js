import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
      prompt: req.query.q,
      n: 2,
      size: "1024x1024",
    });

    res.json(response);
}
