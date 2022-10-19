import clientPromise from "../../lib/mongodb";
import axios from "axios";

export default async (req, res) => {

    const newData = req.query;

/*     var toAdd = {
        name: newData.name,
        email: newData.email,
        payment_id: newData.payment_id,
        credits: Number(newData.credits),
      }; */

      try {
        //establish connection
        const client = await clientPromise;
        const db = client.db("Atlas_Tattoo");

        //check to see if there is a record already in the database
/*         const check = await db
            .collection("credits")
            .findOne({email: toAdd.email})
            res.json(check)
            
        if (check === null) {
            const result = await db
                .collection("credits")
                .insertOne(toAdd)
                res.json(result)

        } else {*/
/*             const record = { email: toAdd.email};
            const newRecord = { $set: { credits: (Number(check.credits) + Number(newData.credits)) }}; */
/*             const update = db
            .collection("credits")
            .updateOne(record, newRecord)
            res.json(update);
        } */

        const update = await db
        .collection("credits")
        .updateOne(
            {email: newData.email},
            {
/*                 $set: {name_id: newData.name_id}, */
                $set: {email: newData.email},
                $set: {payment_id: newData.payment_id},
                $inc: {credits: Number(newData.credits)}
            },
            {
                upsert: true
            }
        )
        res.json(update);
        
        } catch (e) {
        console.error(e);
    }
};