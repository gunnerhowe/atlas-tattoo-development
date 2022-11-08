import { Configuration, OpenAIApi } from "openai";
import clientPromise from "../../../lib/mongodb";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import S3 from 'aws-sdk/clients/s3'
import { buffer } from "micro";

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

  const files = (response.data.data);

    for (const file of files) {
        ///////////Convert to base64
        const response = await axios.get(file.url, {
          responseType: "arraybuffer",
        });
        const base64 = Buffer.from(response.data, "binary").toString("base64");
        const baseData = ('data:image/png;base64,' + base64);
        const buf = Buffer.from(baseData.replace(/^data:image\/\w+;base64,/, ""),'base64');
          
          ///////GLOB///////////
          const glob_id = uuidv4();
          
          //////////AWS///////////

          if (!buf.length) {
            const response = await axios.get(file.url, {
              responseType: "arraybuffer",
            });
            const base64 = Buffer.from(response.data, "binary").toString("base64");
            const baseData = ('data:image/png;base64,' + base64);
            const buf = Buffer.from(baseData.replace(/^data:image\/\w+;base64,/, ""),'base64');
            var data = {
              Key: glob_id, 
              Body: buf,
              ContentEncoding: 'base64',
              ContentType: 'image/jpeg',
              Tagging: `email=${newData.user}`,
              ACL: 'public-read'
            };
            var AWS = require('aws-sdk');
        
            AWS.config.update(
              {
                region: 'us-east-1',
                accessKeyId: process.env.AW_ACCESS_KEY_ID,
                secretAccessKey: process.env.AW_SECRET_ACCESS_KEY
              })
    
            var s3Bucket = new AWS.S3( { params: {Bucket: 'atlastattoo'} } );
    
            const requesting = s3Bucket.putObject(data, function(err, data){
                if (err) { 
                  console.log(err);
                  console.log('Error uploading data: ', data); 
                } else {
                  console.log(`succesfully uploaded the image ${glob_id}`);
                }
            });

            var toAdd = {
              image_path: ('https://atlastattoo.s3.amazonaws.com/' + glob_id),
              email: newData.user,
              name: newData.name,
              prompt: newData.prompt,
              //base64: 'data:application/octet-stream;base64,'+base64
            };
    
              const client = await clientPromise;
              const db = client.db("Atlas_Tattoo");
      
              const result = await db
                      .collection("images")
                      .insertOne(toAdd);
                  console.log(`A document was inserted with the _id: ${result.insertedId}`)

                  console.log('ending the Mongo')
          } else if (!base64.length) {
            const response = await axios.get(file.url, {
              responseType: "arraybuffer",
            });
            const base64 = Buffer.from(response.data, "binary").toString("base64");
            const baseData = ('data:image/png;base64,' + base64);
            const buf = Buffer.from(baseData.replace(/^data:image\/\w+;base64,/, ""),'base64');
            var data = {
              Key: glob_id, 
              Body: buf,
              ContentEncoding: 'base64',
              ContentType: 'image/jpeg',
              Tagging: `email=${newData.user}`,
              ACL: 'public-read'
            };
            var AWS = require('aws-sdk');
        
            AWS.config.update(
              {
                region: 'us-east-1',
                accessKeyId: process.env.AW_ACCESS_KEY_ID,
                secretAccessKey: process.env.AW_SECRET_ACCESS_KEY
              })
    
            var s3Bucket = new AWS.S3( { params: {Bucket: 'atlastattoo'} } );
    
            const requesting = s3Bucket.putObject(data, function(err, data){
                if (err) { 
                  console.log(err);
                  console.log('Error uploading data: ', data); 
                } else {
                  console.log(`succesfully uploaded the image ${glob_id}`);
                }
            });

            var toAdd = {
              image_path: ('https://atlastattoo.s3.amazonaws.com/' + glob_id),
              email: newData.user,
              name: newData.name,
              prompt: newData.prompt,
              //base64: 'data:application/octet-stream;base64,'+base64
            };
    
              const client = await clientPromise;
              const db = client.db("Atlas_Tattoo");
      
              const result = await db
                      .collection("images")
                      .insertOne(toAdd);
                  console.log(`A document was inserted with the _id: ${result.insertedId}`)

                  console.log('ending the Mongo')
          } else if (!baseData.length) {
            const response = await axios.get(file.url, {
              responseType: "arraybuffer",
            });
            const base64 = Buffer.from(response.data, "binary").toString("base64");
            const baseData = ('data:image/png;base64,' + base64);
            const buf = Buffer.from(baseData.replace(/^data:image\/\w+;base64,/, ""),'base64');
            var data = {
              Key: glob_id, 
              Body: buf,
              ContentEncoding: 'base64',
              ContentType: 'image/jpeg',
              Tagging: `email=${newData.user}`,
              ACL: 'public-read'
            };
            var AWS = require('aws-sdk');
        
            AWS.config.update(
              {
                region: 'us-east-1',
                accessKeyId: process.env.AW_ACCESS_KEY_ID,
                secretAccessKey: process.env.AW_SECRET_ACCESS_KEY
              })
    
            var s3Bucket = new AWS.S3( { params: {Bucket: 'atlastattoo'} } );
    
            const requesting = s3Bucket.putObject(data, function(err, data){
                if (err) { 
                  console.log(err);
                  console.log('Error uploading data: ', data); 
                } else {
                  console.log(`succesfully uploaded the image ${glob_id}`);
                }
            });

            var toAdd = {
              image_path: ('https://atlastattoo.s3.amazonaws.com/' + glob_id),
              email: newData.user,
              name: newData.name,
              prompt: newData.prompt,
              //base64: 'data:application/octet-stream;base64,'+base64
            };
    
              const client = await clientPromise;
              const db = client.db("Atlas_Tattoo");
      
              const result = await db
                      .collection("images")
                      .insertOne(toAdd);
                  console.log(`A document was inserted with the _id: ${result.insertedId}`)

                  console.log('ending the Mongo')
          } else if (!response) {
            const response = await axios.get(file.url, {
              responseType: "arraybuffer",
            });
            const base64 = Buffer.from(response.data, "binary").toString("base64");
            const baseData = ('data:image/png;base64,' + base64);
            const buf = Buffer.from(baseData.replace(/^data:image\/\w+;base64,/, ""),'base64');
            var data = {
              Key: glob_id, 
              Body: buf,
              ContentEncoding: 'base64',
              ContentType: 'image/jpeg',
              Tagging: `email=${newData.user}`,
              ACL: 'public-read'
            };
            var AWS = require('aws-sdk');
        
            AWS.config.update(
              {
                region: 'us-east-1',
                accessKeyId: process.env.AW_ACCESS_KEY_ID,
                secretAccessKey: process.env.AW_SECRET_ACCESS_KEY
              })
    
            var s3Bucket = new AWS.S3( { params: {Bucket: 'atlastattoo'} } );
    
            const requesting = s3Bucket.putObject(data, function(err, data){
                if (err) { 
                  console.log(err);
                  console.log('Error uploading data: ', data); 
                } else {
                  console.log(`succesfully uploaded the image ${glob_id}`);
                }
            });

            var toAdd = {
              image_path: ('https://atlastattoo.s3.amazonaws.com/' + glob_id),
              email: newData.user,
              name: newData.name,
              prompt: newData.prompt,
              //base64: 'data:application/octet-stream;base64,'+base64
            };
    
              const client = await clientPromise;
              const db = client.db("Atlas_Tattoo");
      
              const result = await db
                      .collection("images")
                      .insertOne(toAdd);
                  console.log(`A document was inserted with the _id: ${result.insertedId}`)

                  console.log('ending the Mongo')
          } else {
          var data = {
            Key: glob_id, 
            Body: buf,
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg',
            Tagging: `email=${newData.user}`,
            ACL: 'public-read'
          };

          var AWS = require('aws-sdk');
        
            AWS.config.update(
              {
                region: 'us-east-1',
                accessKeyId: process.env.AW_ACCESS_KEY_ID,
                secretAccessKey: process.env.AW_SECRET_ACCESS_KEY
              })
    
            var s3Bucket = new AWS.S3( { params: {Bucket: 'atlastattoo'} } );
    
            const requesting = s3Bucket.putObject(data, function(err, data){
                if (err) { 
                  console.log(err);
                  console.log('Error uploading data: ', data); 
                } else {
                  console.log(`succesfully uploaded the image ${glob_id}`);
                }
            });

            var toAdd = {
              image_path: ('https://atlastattoo.s3.amazonaws.com/' + glob_id),
              email: newData.user,
              name: newData.name,
              prompt: newData.prompt,
              //base64: 'data:application/octet-stream;base64,'+base64
            };
    
              const client = await clientPromise;
              const db = client.db("Atlas_Tattoo");
      
              const result = await db
                      .collection("images")
                      .insertOne(toAdd);
                  console.log(`A document was inserted with the _id: ${result.insertedId}`)

                  console.log('ending the Mongo')
        }}

      res.json(response.data.data);
  }