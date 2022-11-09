import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {

    const newData = req.body

    var toAdd = {
        image_path: newData.image_path,
        email: newData.email,
        name: newData.name,
        prompt: newData.prompt,
    };

        const client = await clientPromise;
        const db = client.db("Atlas_Tattoo");

        const result = await db
                .collection("images")
                .insertOne(toAdd);
            console.log(`A document was inserted with the _id: ${result.insertedId}`)

        const update = await db
            .collection("images")
            .remove(
                {image_path: null},
            );
        console.log(`A document was removed with the _id: ${result}`)

         res.json(toAdd);
  }