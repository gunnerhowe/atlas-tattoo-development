import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {

  const newData = req.body

  console.log('starting the image generation')

  //////////TEST///////////
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: newData.prompt,
    n: newData.n,
    //n: 1,
    size: newData.size,
    user: newData.user
  });

      res.json(response.data.data);
  }