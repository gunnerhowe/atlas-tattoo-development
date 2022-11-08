import { Configuration, OpenAIApi } from "openai";
import clientPromise from "../../../lib/mongodb";
import axios from "axios";
import fs from 'fs';
import got from 'got';
import request from 'request';

export default async function handler(req, res) {

  const newData = req.body

  //////////Store in S3
  AWS.config.update(
    {
      region: 'us-east-1',
      accessKeyId: process.env.AW_ACCESS_KEY_ID,
      secretAccessKey: process.env.AW_SECRET_ACCESS_KEY
    })

  var s3Bucket = new AWS.S3( { params: {Bucket: 'atlastattoo'} } );

  const buf = new Buffer.from(newData.base64.replace(/^data:image\/\w+;base64,/, ""),'base64');

  const glob_id = uuidv4();

   var data = {
    Key: glob_id, 
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
    Tagging: `email=${newData.user}`,
    ACL: 'public-read'
  };

  s3Bucket.putObject(data, function(err, data){
      if (err) { 
        console.log(err);
        console.log('Error uploading data: ', data); 
      } else {
        console.log('succesfully uploaded the image!');
        //console.log(data);
      }
  });

  ///////////////////Open AI
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createImageVariation(
        request('https://atlastattoo.s3.amazonaws.com/'+glob_id),
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
