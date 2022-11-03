import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    //const seeEmail = req.query;

   try {
       const client = await clientPromise;
       const db = client.db("Atlas_Tattoo");

       const valid = await db
            .collection("users")
            .findOne({email: req.body.user.email})
            //.toArray()

        res.json(valid);

   } catch (e) {
       console.error(e);
   }
};