import { Configuration, OpenAIApi } from "openai";
import clientPromise from "../../../lib/mongodb";
import axios from "axios";

export default async function handler(req, res) {

  const newData = req.body

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





    const files = (response.data.data);

    const loadIt = async (files) => {
      for (const file of files) {
        //console.log(file.url)
  
        const response = await axios.get(file.url, {
          responseType: "arraybuffer",
        });
      
        const base64 = Buffer.from(response.data, "binary").toString("base64");

        var toAdd = {
          image_path: file.url,
          email: newData.user,
          name: newData.name,
          prompt: newData.prompt,
          base64: 'data:application/octet-stream;base64,'+base64
        };

        try {
          const client = await clientPromise;
          const db = client.db("Atlas_Tattoo");
  
          const result = await db
                  .collection("images")
                  .insertOne(toAdd);
              console.log(`A document was inserted with the _id: ${result.insertedId}`)
  
          //res.json(result);
      } catch (e) {
          console.error(e);
      }
      };
    };

    loadIt(files);

}
