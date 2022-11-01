import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    const seeEmail = req.query;

   try {
       const client = await clientPromise;
       const db = client.db("Atlas_Tattoo");

        const credits = await db
            .collection("credits")
            .deleteOne({email: seeEmail.email});

        const images = await db
            .collection("images")
            .deleteMany({email: seeEmail.email});

       res.json(credits, images);
   } catch (e) {
       console.error(e);
   }
};