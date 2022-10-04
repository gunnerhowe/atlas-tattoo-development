import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("sample_mflix");
       const dalleJson = result.generation.image_path;

       const result = await db
            .collection("movies")
            .insertOne(dalleJson);
        console.log('A document was inserted with the _id: {result.insertedId}')

       res.json(result);
   } catch (e) {
       console.error(e);
   }
};