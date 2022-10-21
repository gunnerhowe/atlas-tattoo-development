import clientPromise from "../../lib/mongodb";
import axios from "axios";


export default async function handler(req, res) {

    const newData = req.body;

    var toAdd = {
        created: newData.created,
        image_path: newData.image_path,
        image_id: newData.image_id,
        task_id: newData.task_id,
        email: newData.email,
        name: newData.name,
        base64: newData.base64
      };

      try {
        const client = await clientPromise;
        const db = client.db("Atlas_Tattoo");

        const result = await db
                .collection("images")
                .insertOne(toAdd);
            console.log(`A document was inserted with the _id: ${result.insertedId}`)

        res.json(result);
    } catch (e) {
        console.error(e);
    }
};