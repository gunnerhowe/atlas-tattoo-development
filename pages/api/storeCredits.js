import clientPromise from "../../lib/mongodb";
import axios from "axios";


export default async (req, res) => {

    const newData = req.query;

    var toAdd = {
        email: newData.email,
        name: newData.name,
        payment_id: newData.payment_id,
        credits: newData.credits,
      };

      try {
        //establish connection
        const client = await clientPromise;
        const db = client.db("Atlas_Tattoo");

        //check to see if there is a record already in the database
        const check = await db
            .collection("credits")
            .findOne({email: toAdd.email})
            res.json(check)
            
        if (check === null) {
            const result = await db
                .collection("credits")
                .insertOne(toAdd)
                res.json(result)

        } else {
            const record = { email: toAdd.email};
            const newRecord = { $set: { credits: (Number(check.credits) + Number(newData.credits)) }};
            const update = db
            .collection("credits")
            .updateOne(record, newRecord)
            res.json(update);
        }

        /* if (check < 1) {
            //if not, insert the a record
            const result = await db
                    .collection("credits")
                    .insertOne(toAdd)
            //res.json(result);

        } else {
            //if there is a record, update the credits field
            const record = { email: toAdd.email};
            const newRecord = { $set: { credits: (check.credits + newData.credits) }};
            const update = await db
                .collection("credits")
                .updateOne(record, newRecord);
            //res.json(update);
        } */
        } catch (e) {
        console.error(e);
    }
};