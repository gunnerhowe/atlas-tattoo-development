import { Configuration, OpenAIApi } from "openai";
import clientPromise from "../../../lib/mongodb";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { setUncaughtExceptionCaptureCallback } from "process";

export default async function handler(req, res) {
  //const [baseData1, setbaseData1] = useState("");
  //const [Glob, setGlob] = useState("");

  const newData = req.body

  const Amazon = async (buf, glob_id) => {

    var AWS = require('aws-sdk');

        AWS.config.update(
          {
            region: 'us-east-1',
            accessKeyId: process.env.AW_ACCESS_KEY_ID,
            secretAccessKey: process.env.AW_SECRET_ACCESS_KEY
          })

        var s3Bucket = new AWS.S3( { params: {Bucket: 'atlastattoo'} } );

        var data = {
          Key: glob_id, 
          Body: buf,
          //Body: url,
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

  
  }


  //generate the Dalle Images
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

        //////////Store in S3
/*         var AWS = require('aws-sdk');

        AWS.config.update(
          {
            region: 'us-east-1',
            accessKeyId: process.env.AW_ACCESS_KEY_ID,
            secretAccessKey: process.env.AW_SECRET_ACCESS_KEY
          })

        var s3Bucket = new AWS.S3( { params: {Bucket: 'atlastattoo'} } ); */


    const loadIt = async (files) => {

      for (const file of files) {

  
        ///////////Convert to base64
        const response = await axios.get(file.url, {
          responseType: "arraybuffer",
        });
      
        const base64 = Buffer.from(response.data, "binary").toString("base64");
        const baseData = ('data:image/png;base64,' + base64);


        //////////Store in S3
/*          var AWS = require('aws-sdk');

        AWS.config.update(
          {
            region: 'us-east-1',
            accessKeyId: process.env.AW_ACCESS_KEY_ID,
            secretAccessKey: process.env.AW_SECRET_ACCESS_KEY
          })  */

        //var s3Bucket = new AWS.S3( { params: {Bucket: 'atlastattoo'} } );

        const buf = new Buffer.from(baseData.replace(/^data:image\/\w+;base64,/, ""),'base64');

        //setbaseData1(buf);

        const glob_id = uuidv4();

        //setGlob(glob_id);

        await Amazon(buf, glob_id);

         /* var data = {
          Key: glob_id, 
          Body: buf,
          //Body: url,
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
        }); */


        ///////////////Store in Mongodb
        var toAdd = {
          image_path: ('https://atlastattoo.s3.amazonaws.com/' + glob_id),
          email: newData.user,
          name: newData.name,
          prompt: newData.prompt,
          //base64: 'data:application/octet-stream;base64,'+base64
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
