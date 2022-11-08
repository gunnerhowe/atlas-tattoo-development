import aws from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {

    const region = "us-east-1";
    const bucketName = "atlastattoo";
    const accessKeyId = process.env.AW_USER_KEY;
    const secretAccessKey = process.env.AW_USER_SECRET;

    const s3 = new aws.S3({
        region,
        accessKeyId,
        secretAccessKey,
        signatureVersion: 'v4'
    })

    const imageName = uuidv4();

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 120
    });

    const uploadURL = await s3.getSignedUrlPromise('putObject', params);
    console.log(uploadURL);

    res.json(uploadURL)
}