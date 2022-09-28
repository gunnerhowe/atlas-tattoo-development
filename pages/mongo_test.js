import { connectToDatabase } from "../util/mongodb"

export default function MongoTest({isConnected}) {
    return (
        <div>
        
        </div>
    )
}


export async function getServerSideProps(context) {
    const { db } = await connectToDatabase()

    return {
        props: { },
    }
}