import clientPromise from "../../lib/mongodb";


export default async (req, res) => {

    const newData = req.query;

    try {
        const client = await clientPromise;
        const db = client.db("Atlas_Tattoo");


        const result = await db
                .collection("images")
                .insertOne(newData);
            console.log(`A document was inserted with the _id: ${result.insertedId}`)

        res.json(result);
    } catch (e) {
        console.error(e);
    }
};