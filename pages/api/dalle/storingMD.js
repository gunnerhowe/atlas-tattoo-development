import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {

    console.log('made it to Mongo');
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

            console.log('ending the Mongo')

         res.json(toAdd);
  }