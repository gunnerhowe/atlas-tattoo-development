import clientPromise from "../lib/mongodb";

export default function Movies({ movies }) {
    return (
        <div>
            <h1>Top 20 Movies of All Time</h1>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <ul>
                {movies.map((movie) => (
                    <li>
                        <h2>{movie.title}</h2>
                        <h3>{movie.metacritic}</h3>
                        <p>{movie.plot}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

//This renders each time the page is loaded. 
export async function getServerSideProps() {
    try {
        //Connecting to the DB
        const client = await clientPromise;

        //Specificially saying which DB to connect to
        const db = client.db("sample_mflix");

        //Example of creating a doc that inserts into the db
        const doc = { name: "Gunner Howe", shape: "Big"};

        const result = await db
            .collection("movies")
            .insertOne(doc);
        console.log('A document was inserted with the _id: {result.insertedId}')

        //Example of retrieving a document from the db
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();

        //returning the JSON strings so that they can be added to the UI in the above function
        return {
            props: { movies: JSON.parse(JSON.stringify(movies)) },
        };

    //Error catcher
    } catch (e) {
        console.error(e);
    }
}