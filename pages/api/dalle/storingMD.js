import { Configuration, OpenAIApi } from "openai";
import clientPromise from "../../../lib/mongodb";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import S3 from 'aws-sdk/clients/s3'
import { buffer } from "micro";

export default async function handler(req, res) {

    console.log('made it to Mongo');
  const newData = req.body

    var toAdd = {
        image_path: ('https://atlastattoo.s3.amazonaws.com/' + newData.glob_id),
        email: newData.email,
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

      //res.json(console.log(`A document was inserted with the _id: ${result.insertedId}`));
  }