import clientPromise from "../../lib/mongodb";
import axios from "axios";


export default async (req, res) => {

    const newData = req.query;

    var url = decodeURIComponent(newData.image_path);

    //var url = newData.image_path

    const response = await axios.get(url, {
      responseType: "arraybuffer",
    },
/*     {headers: {
        Authorization: "Bearer sess-yGcqdrc8VaZTJyUnz2L2JHlrW0067vnkBDSWocE0"}
    } */);
  
    const base64 = Buffer.from(response.data, "binary").toString("base64");

    //console.log(base64);

    //res.status(200).json({ result: base64 });

    var toAdd = {
        created: newData.created,
        image_path: newData.image_path,
        image_id: newData.id,
        task_id: newData.task_id,
        email: newData.email,
        name: newData.name,
        base64: 'data:application/octet-stream;base64,'+base64
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