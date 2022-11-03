import clientPromise from "../../../lib/mongodb";
import { hash, compare } from 'bcryptjs';

export async function hashPassword(password) {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
  }

export default async (req, res) => {

    const newData = req.body;

    const newName = newData.name

      try {
        //establish connection
        const client = await clientPromise;
        const db = client.db("Atlas_Tattoo");

        if (newData.password) {
            const password = await hashPassword(newData.password);
            const update = await db
            .collection("users")
            .updateOne(
                {email: newData.email},
                {
                    $set: {email: newData.email,
                            name: newName,
                            password: password}
                },
                {
                    upsert: true
                }
            )
            res.json(update);
        } else {
            const update = await db
            .collection("users")
            .updateOne(
                {email: newData.email},
                {
                    $set: {email: newData.email,
                            name: newName}
                },
                {
                    upsert: true
                }
            )
            res.json(update);
        }
        
        } catch (e) {
        console.error(e);
    }
};