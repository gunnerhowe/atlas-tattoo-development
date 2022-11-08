import { Configuration, OpenAIApi } from "openai";
import clientPromise from "../../../lib/mongodb";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import S3 from 'aws-sdk/clients/s3'
import { buffer } from "micro";

export default async function handler(req, res) {

  const newData = req.body
  console.log(newData.url)

    ///////////Convert to base64
    const getBase = await axios.get(newData.url, {
    responseType: "arraybuffer",
    });
    const base64 = Buffer.from(getBase.data, "binary").toString("base64");
    const baseData = ('data:image/png;base64,' + base64);
    const buf = Buffer.from(baseData.replace(/^data:image\/\w+;base64,/, ""),'base64');

    //////////AWS//////////
    var data = {
    Key: newData.glob_id, 
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
    Tagging: `email=${newData.email}`,
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
            console.log(`succesfully uploaded the image ${newData.glob_id}`);
        }
    });

    if (!requesting.signedAt) {
        ///////////Convert to base64
    const getBase = await axios.get(newData.url, {
        responseType: "arraybuffer",
        });
        const base64 = Buffer.from(getBase.data, "binary").toString("base64");
        const baseData = ('data:image/png;base64,' + base64);
        const buf = Buffer.from(baseData.replace(/^data:image\/\w+;base64,/, ""),'base64');
    
        //////////AWS//////////
        var data = {
        Key: newData.glob_id, 
        Body: buf,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
        Tagging: `email=${newData.email}`,
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
                console.log(`succesfully uploaded the image ${newData.glob_id}`);
            }
        });    
    } else {
        res.json(requesting.signedAt);
    }
  }