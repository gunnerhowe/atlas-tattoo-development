import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    const seeEmail = req.query;

   try {
       const client = await clientPromise;
       const db = client.db("Atlas_Tattoo");

       const credits = await db
            .collection("credits")
            .findOne({email: seeEmail.email})
            //.toArray()
            console.log(credits)

       res.json(credits);
   } catch (e) {
       console.error(e);
   }
};