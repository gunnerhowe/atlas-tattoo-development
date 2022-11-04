import { IncomingForm } from 'formidable'
import fs from 'fs'


 
export default async (req, res) => {
    const image = req.body.data
    console.log(image);
    const re = fs.createReadStream(image)
    res.json(re);
}