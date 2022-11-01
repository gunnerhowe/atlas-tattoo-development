import clientPromise from "../../../lib/mongodb";
import axios from "axios";

export default async (req, res) => {

    const newData = req.query;

      try {
        //establish connection
        const client = await clientPromise;
        const db = client.db("Atlas_Tattoo");

        const newer = await db
        .collection("credits")
        .updateOne(
            {email: newData.newEmail},
            {
                $set: {name_id: ""},
                $set: {email: newData.email},
                $set: {payment_id: ""},
                $inc: {credits: Number(newData.credits)}
            },
            {
                upsert: true
            }
        )

        const old = await db
        .collection("credits")
        .updateOne(
            {email: newData.email},
            {
                $set: {name_id: newData.name_id},
                $set: {email: newData.email},
                $set: {payment_id: newData.payment_id},
                $inc: {credits: 0}
            },
            {
                upsert: true
            }
        )

        res.json(newer, old);
        
        } catch (e) {
        console.error(e);
    }
};