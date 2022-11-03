import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    //const seeEmail = req.query;

   try {
       const client = await clientPromise;
       const db = client.db("Atlas_Tattoo");

       const check = await db
            .collection("users")
            .findOne({email: req.body.email})
            //.toArray()
            //console.log(check)

       res.json(check);
   } catch (e) {
       console.error(e);
   }
};