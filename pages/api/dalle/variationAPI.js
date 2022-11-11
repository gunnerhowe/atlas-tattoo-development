import { Configuration, OpenAIApi } from "openai";
import clientPromise from "../../../lib/mongodb";
import axios from "axios";
import request from 'request';

export default async function handler(req, res) {

  const newData = req.body

  ///////////////////Open AI
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);


      try {

        const response = await openai.createImageVariation(
          request(newData.url),
          4,
          "1024x1024",
            //newData.user
        );

        res.json(response.data.data);

        //const file = (response.data.data);

        //for (const file of files) {
          /* var toAdd = {
            image_path: file.url,
            email: newData.user,
            name: newData.name,
            prompt: 'Variation',
          };

          const client = await clientPromise;
          const db = client.db("Atlas_Tattoo");
  
          const result = await db
                  .collection("images")
                  .insertOne(toAdd);
              console.log(`A document was inserted with the _id: ${result.insertedId}`) */

      } catch (e) {
          console.error(e);
/*           const response = await openai.createImageVariation(
            request(newData.url),
            1,
            "1024x1024",
              //newData.user
          );
  
          res.json(response.data.data); */
  
          //const file = (response.data.data);
  
          //for (const file of files) {
            /* var toAdd = {
              image_path: file.url,
              email: newData.user,
              name: newData.name,
              prompt: 'Variation',
            };
  
            const client = await clientPromise;
            const db = client.db("Atlas_Tattoo");
    
            const result = await db
                    .collection("images")
                    .insertOne(toAdd);
                console.log(`A document was inserted with the _id: ${result.insertedId}`) */
      }
      //};

}
