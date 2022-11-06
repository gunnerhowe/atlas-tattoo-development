import { Configuration, OpenAIApi } from "openai";
import clientPromise from "../../../lib/mongodb";
import axios from "axios";
import fs from 'fs';

export default async function handler(req, res) {

  const newData = req.body

  const url = 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-8uKaOs2C3OwX6IFoYHOp3x5v/user-It0WVtFiDOVII6H6ibVsnZaY/img-cuyjbx0U10WWN5qn4XL4ipVT.png?st=2022-11-06T18%3A52%3A05Z&se=2022-11-06T20%3A52%3A05Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-11-06T01%3A54%3A28Z&ske=2022-11-07T01%3A54%3A28Z&sks=b&skv=2021-08-06&sig=%2BOcIUvcNhPQwjA6sTcSHqBkftbkepXCd8uCtSePZNFk%3D'

  /* const test = await axios.get(url, {
    responseType: "arraybuffer",
  });

  const base64 = Buffer.from(test.data, "binary").toString("base64");

  const base = ('data:application/octet-stream;base64,' + base64) */

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createImageVariation(
        //fs.createReadStream(selectedFile),
        //selectedFile,
        fs.createReadStream(url),
        1,
        "1024x1024"
      );

    res.json(response.data.data);





/*     const files = (response.data.data);

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

    loadIt(files); */

}
