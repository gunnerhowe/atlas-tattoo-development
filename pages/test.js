import clientPromise from "../lib/mongodb";
import {signIn, signOut, useSession} from 'next-auth/react'
import Image from 'next/image'
import React from 'react';
import { useState } from "react";



export default function Testing() {
    const { data: session, status} = useSession();
    const [token, setToken] = useState("sess-u5OiOtl27T0qbIg0XaGTkq2yiuJSVVtaoneqbS6l");
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [testing, setTesting] = useState({});

    function GetDalle2() {
        if (token != "" && query != "") {
          setError(false);
          setLoading(true);
          fetch(`/api/dalle2?k=${token}&q=${query}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setResults(data.result);
              setLoading(false);
              setTesting({test: data.result});
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
              setError(true);
            });
        } else {
          setError(true);
        }
      }

      async function getServerSideProps() {

        try {
            //Connecting to the DB
            const client = await clientPromise;
    
            //Specificially saying which DB to connect to
            const db = client.db("sample_mflix");
    
            //Example of creating a doc that inserts into the db
            
            //const toInsert = data

            const toInsert = {data: 'test'}

            const forReturn = 'hello'

            const result = await db
                .collection("movies")
                .insertOne(toInsert);
            console.log('A document was inserted with the _id:')
    
            //Example of retrieving a document from the db
    
            //returning the JSON strings so that they can be added to the UI in the above function
            return {
                forReturn
            };
    
            //Error catcher
            } catch (e) {
                console.error(e);
            }
        }


    return (
    <div>
        <input
                  id="query"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Query"
                />
        <button onClick={GetDalle2}>Click Me</button>
    </div>
    )
}

