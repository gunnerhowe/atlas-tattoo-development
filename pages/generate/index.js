import Image from 'next/image'
import classes from "./GeneratePage.module.css";
import Head from "next/head";
import { useState } from "react";

export default function Generate() {
  const [token, setToken] = useState("sess-gkBvdsysh38gXC5i52VtLcyrvrBz5whPQrOtHdBl");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function GetDalle2() {
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
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }

  return (
    <div className={classes.container}>
      <Head>
        <title>Atlas Tattoo Dev</title>
      </Head>

      <main className={classes.main}>
        <h1 className={classes.title}><span className={classes.titleColor}>Atlas Tattoo Development</span></h1>
        <p className={classes.description}>
          <input
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Query"
          />
        </p>{" "}
        <button className={classes.btn_neu} onClick={GetDalle2}>
          Generate</button>
        {error ? (
          <div className={classes.error}>Something went wrong..Try again</div>
        ) : (
          <></>
        )}
        {loading && 
        <div className="wrapper">
        <span></span>
        <span></span>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        </div>}
        <div className={classes.grid}>
          {results.map((result) => {
            return (
              <div className={classes.card}>
                <Image className={classes.imgPreview} src={result.generation.image_path} alt=' '/>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}