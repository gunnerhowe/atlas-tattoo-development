import clientPromise from "../../../lib/mongodb";
import axios from "axios";

export default async (req, res) => {

    const newData = req.query;

    console.log('Made it to store')

      try {
        //establish connection
        const client = await clientPromise;
        const db = client.db("Atlas_Tattoo");

        const update = await db
        .collection("images")
        .remove(
            {email: 'openai_test@example.com'},
        )
        res.json(update);
        
        } catch (e) {
        console.error(e);
    }
};