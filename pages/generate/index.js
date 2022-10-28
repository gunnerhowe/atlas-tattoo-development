import Image from 'next/image'
import classes from "./GeneratePage.module.css";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import React from 'react';
import Link from 'next/link';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
import SVG from '/pages/gallery/images/download.svg';
//import clientPromise from "/lib/mongodb";
import axios from "axios";
import PLUS from '/pages/gallery/images/plus.svg';
import MINUS from '/pages/gallery/images/minus.svg';

import FourK from '../gallery/images/pandas/4K photography.png';
import Abstract from '../gallery/images/pandas/abstract.png';
import Art from '../gallery/images/pandas/art.png';
import Cartoon from '../gallery/images/pandas/cartoon.png';
import Claymation from '../gallery/images/pandas/claymation.png';
import Contemporary from '../gallery/images/pandas/Contemporary.png';
import Cubism from '../gallery/images/pandas/Cubism.png';
import Damien from '../gallery/images/pandas/Damien Hirst.png';
import Dark from '../gallery/images/pandas/dark art.png';
import Stijl from '../gallery/images/pandas/De Stijl.png';
import Doodle from '../gallery/images/pandas/doodles.png';
import Dream from '../gallery/images/pandas/dream.png';
import Drip from '../gallery/images/pandas/drip paint.png';
import Family from '../gallery/images/pandas/family guy.png';
import Fantasy from '../gallery/images/pandas/Fantasy.png';
import Future from '../gallery/images/pandas/future.png';
import Futurism from '../gallery/images/pandas/Futurism.png';
import Geometric from '../gallery/images/pandas/geometric.png';
import Graffiti from '../gallery/images/pandas/Graffiti.png';
import Greek from '../gallery/images/pandas/Greek sculpture.png';
import Happy from '../gallery/images/pandas/happy art.png';
import Isometric from '../gallery/images/pandas/isometric art.png';
import Anime from '../gallery/images/pandas/Japanese anime.png';
import Koons from '../gallery/images/pandas/Jeff Koons.png';
import Haring from '../gallery/images/pandas/Keith Haring.png';
import Lego from '../gallery/images/pandas/lego bricks.png';
import Lomography from '../gallery/images/pandas/lomography.png';
import Luo from '../gallery/images/pandas/Luo Zhongli.png';
import Melting from '../gallery/images/pandas/melting art.png';
import Metallic from '../gallery/images/pandas/metallic.png';
import Minimalism from '../gallery/images/pandas/Minimalism.png';
import Barcelo from '../gallery/images/pandas/Miquel Barcelo.png';
import Neon from '../gallery/images/pandas/neon art.png';
import Pencil from '../gallery/images/pandas/pencil sketch.png';
import PopArt from '../gallery/images/pandas/Pop-art.png';
import Precisionism from '../gallery/images/pandas/Precisionism.png';
import Christmas from '../gallery/images/pandas/Santa.png';
import Scratch from '../gallery/images/pandas/scratch art.png';
import South from '../gallery/images/pandas/south park.png';
import Surrealism from '../gallery/images/pandas/Surrealism.png';
import Unreal from '../gallery/images/pandas/unreal engine 5.png';
import Gogh from '../gallery/images/pandas/vincent van gogh.png';
import Board from '../gallery/images/pandas/white board art.png';
import PencilDet from '../gallery/images/pandas/PencilDet.png';
import Political from '../gallery/images/pandas/Political.png';
import Oil from '../gallery/images/pandas/Oil painting.png';
import Chinese from '../gallery/images/pandas/Chinese watercolor.png';
import Pastels from '../gallery/images/pandas/Pastels.png';
import Airbrush from '../gallery/images/pandas/Airbrush.png';
import Storybook from '../gallery/images/pandas/Storybook.png';
import Vector from '../gallery/images/pandas/Vector art.png';
import Blueprint from '../gallery/images/pandas/Blueprint.png';
import Patent from '../gallery/images/pandas/Patent drawing.png';
import ThreeD from '../gallery/images/pandas/3D.png';
import Pixel from '../gallery/images/pandas/Pixel art.png';
import Ghibli from '../gallery/images/pandas/Studio Ghibli.png';
import Glass from '../gallery/images/pandas/Stained glass.png';
import Pixar from '../gallery/images/pandas/Pixar.png';
import Fauvism from '../gallery/images/pandas/Fauvism.png';
import Supermatism from '../gallery/images/pandas/Supermatism.png';
import Dadaism from '../gallery/images/pandas/Dadaism.png';
import Egyptian from '../gallery/images/pandas/Egyptian.png';
import Comic from '../gallery/images/pandas/Comic.png';
import Screen from '../gallery/images/pandas/Screen printing.png';
import Charcoal from '../gallery/images/pandas/Charcoal sketch.png';
import Sencil from '../gallery/images/pandas/Stencil.png';
import Ballpoint from '../gallery/images/pandas/Ballpoint pen art.png';
import Alegria from '../gallery/images/pandas/Alegria.png';
import Vaporwave from '../gallery/images/pandas/Vaporwave.png';
import Post from '../gallery/images/pandas/Post-apocalyptic.png';
import Dieselpunk from '../gallery/images/pandas/Dieselpunk.png';
import Cyberpunk from '../gallery/images/pandas/Cyberpunk.png';
import Steampunk from '../gallery/images/pandas/Steampunk.png';
import Cybernetic from '../gallery/images/pandas/Cybernetic.png';
import Gothic from '../gallery/images/pandas/Gothic.png';
import Biopunk from '../gallery/images/pandas/Biopunk.png';
import Simpsons from '../gallery/images/pandas/Simpsons.png';
import Adventure from '../gallery/images/pandas/Adventure.png';
import Spirited from '../gallery/images/pandas/Spirited.png';
import Looney from '../gallery/images/pandas/Looney.png';
import Seuss from '../gallery/images/pandas/Seuss.png';
import Black from '../gallery/images/pandas/Black Outline.png';

import None from '../gallery/images/pandas/None.png';

import White from '../gallery/images/pandas/White.png';
import Colored from '../gallery/images/pandas/Colored.png';


const image_width = '200px'
const image_heigth = '200px'

//Main page export
export default function Generate() {
  const { data: session, status} = useSession();
  const [token, setToken] = useState("sess-zZMIcPlTNMom0iLCxV1jggZ3eV4EaEjKSdyNJaWK");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [IsOpen, setIsOpen] = useState(true);
  const [noCred, setnoCred] = useState(false);
  const [ShowStyle, setShowStyle] = useState(false);
  const [ShowBackground, setShowBackground] = useState(false);

  const [style, setstyle] = useState("");
  const [background, setBackground] = useState("");

  const didMount = useRef(true);

  //function to get the base64 image
  const base = async (url) => {
      let newBase = await axios.post(`/api/dalle/download`, { url: url })
        let base6 = await newBase.data.result
        return base6
  }

//Function to load the Dalle generations into Mongodb
  const loadIt = async (files) => {
    for (const file of files) {

      let baseData = await base(file.generation.image_path);

      const newData = await axios.post('/api/dalle/storeDalle',{
          created: file.created,
          image_path: file.generation.image_path,
          image_id: file.id,
          task_id: file.task_id,
          email: session.user.email,
          name: session.user.name,
          base64: 'data:application/octet-stream;base64,'+baseData
      });
      const res = await toString(newData);
      };
      setIsOpen(true);
      setstyle("");
      setBackground("");
    };

//Dalle generation function
  function GetDalle2() {
    if (token != "" && query != "") {
      setError(false);
      setLoading(true);
      fetch(`/api/dalle/dalle2?k=${token}&q=${query + style + background}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResults(data.result);
          const files = (data.result);
          console.log(data.result);
          loadIt(files);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
        });
    } else {
      setError(true);
    };
  }

  //Download the generations
  function download(url) {
    axios
      .post(`/api/dalle/download`, { url: url })
      .then((res) => {
        const link = document.createElement("a");
        link.href = `data:application/octet-stream;base64,${res.data.result}`;
        link.download = `Atlas-Tattoo-Dev.png`;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Subtract 1 credit from the user in Mongodb
  async function updateCredits(data) {
    const newCred = (Number(data.credits) - 1);
    const newData = await fetch(`/api/dalle/updateCredits?credits=${newCred}&email=${data.email}`);
    const res = await newData.json();
    console.log(res);
  }

  //Get credits that were generated from getCredits()
  const getActivity = async () => {
    let jsonData = await getCredits(session.user.email);
    console.log(jsonData);
    if (jsonData != null, jsonData.credits > 0, query == "") {
      setIsOpen(true);
      setError(true);
    } else if (jsonData != null, jsonData.credits > 0) {
      const numCred = jsonData.credits;
      const eEmail = session.user.email;
      var data = {
        credits: Number(numCred),
        email: eEmail
      };
      updateCredits(data);
      GetDalle2();
      setIsOpen(false);
    } else {
        setnoCred(true);
    }
  }

  //Get the Dalle Credits for the user from Mongodb
   const getCredits = async (seeEmail) => {
    let newData = await fetch(`/api/dalle/getCredits?email=${seeEmail}`)
    let newJson = await newData.json();
    return newJson;
  }


  //Visual elements
  return (
    <div className={classes.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>

      <main className={classes.main}>
        {!session && (
          <>
            <br />
            <button className={classes.btn_neu} onClick={signIn}>Sign In</button>
          </>
        )}
        {
          session && (
            <>
              <h1 className={classes.title}><span className={classes.titleColor}>Get Inked With The Future</span></h1>
              <p className={classes.description}>
                <input
                  id="query"
                  type="text"
                  value={query}
                  onChange={(e) => {setQuery(e.target.value)}}
                  placeholder="Tattoo prompt..."
                />
              </p>{" "}
              {IsOpen &&
                <button className={classes.btn_neu} onClick={() => {getActivity(), setShowStyle(false), setShowBackground(false)}}>
                    Generate
                  </button>}
                  <br />
                  <br />
              {noCred &&
                <>
                <span><br /></span>
                <h1 className={classes.warning}>
                    No credits available...
                  </h1>
                </>}
                {error ? (
                <div className={classes.error}>Please enter a prompt to generate an image</div>
              ) : (
                <></>
              )}
              {loading && 
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
              <br />
              <br />
              <div className={classes.grid}>
                {results.map((result) => {
                  return (
                    <div key={toString(result.generation.image_path)} className={classes.card}>
                      <Image key={toString(result.generation.image_path)} className={classes.imgPreview} src={result.generation.image_path} alt=' ' width='300vw' height='300vw'/>
                      <div>
                        <button className={classes.btn_neu_download} onClick={() => download(result.generation.image_path)}>
                          <SVG className={classes.download_image}/>
                        </button>
                      </div>        
                    </div>
                  );
                })}
              </div>
              <div className={classes.tattoo_options}>
              {!ShowBackground && (
                <>
                  <div className={classes.section_head}>
                    <button className={classes.stylesDrop} onClick={() => {setShowBackground(true)}}>
                      <PLUS className={classes.plus}></PLUS>
                      <h3>Background</h3>
                    </button>
                  </div>
                  <hr className={classes.line1}></hr>
                </>
                )}
              {ShowBackground && (
                <>
                <div className={classes.section_head}>
                  <button className={classes.stylesDrop} onClick={() => {setShowBackground(false)}}>
                    <MINUS className={classes.plus}></MINUS>
                    <h3>Background</h3>
                  </button>
                </div>
                  <div className={classes.select_style}>
                    <button onClick={() => {setBackground("")}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={None} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Clear Selected</h3>
                    </button>
                    <button onClick={() => {setBackground(", White Background")}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={White} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>White Background</h3>
                    </button>
                    <button onClick={() => {setBackground("")}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Colored} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Colored Background</h3>
                    </button>
                  </div>
                  </>
                  )}
                {!ShowStyle && (
                <>
                  <div className={classes.section_head}>
                    <button className={classes.stylesDrop} onClick={() => {setShowStyle(true), setShowBackground(false)}}>
                      <PLUS className={classes.plus}></PLUS>
                      <h3>Styles</h3>
                    </button>
                  </div>
                  <hr className={classes.line1}></hr>
                </>
                )}
                {ShowStyle && (
                <>
                <div className={classes.section_head}>
                  <button className={classes.stylesDrop} onClick={() => {setShowStyle(false)}}>
                    <MINUS className={classes.plus}></MINUS>
                    <h3>Styles</h3>
                  </button>
                </div>
                  <div className={classes.select_style}>
                    <button onClick={() => {setstyle('')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={None} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Clear Selected</h3>
                    </button>
                    <button onClick={() => {setstyle(', Black outline')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Black} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Black Outline</h3>
                    </button>
                    <button onClick={() => {setstyle(', Vaporwave, neon, pink, blue, geometric, futureistic, 80s')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Vaporwave} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Vaporwave</h3>
                    </button>
                    <button onClick={() => {setstyle(', Post-apocalyptic, grey, desolate, stormy, decay, fire')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Post} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Post-apocalyptic</h3>
                    </button>
                    <button onClick={() => {setstyle(', Dieselpunk, grimy, steel, oil, 50s, mechanized, punk cousin of steampunk')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Dieselpunk} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Dieselpunk</h3>
                    </button>
                    <button onClick={() => {setstyle(', Cyberpunk, 1990s, dyed hair, spiky, graphic elements')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Cyberpunk} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Cyberpunk</h3>
                    </button>
                    <button onClick={() => {setstyle(', Steampunk, gold, copper, brass, victoriana')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Steampunk} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Steampunk</h3>
                    </button>
                    <button onClick={() => {setstyle(', Cybernetic, sci-fi, glows, greens, metals, armor, chrome')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Cybernetic} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Cybernetic</h3>
                    </button>
                    <button onClick={() => {setstyle(', Gothic, fantasy, stone, dark, lush, nature, mist, mystery, angular')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Gothic} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Gothic</h3>
                    </button>
                    <button onClick={() => {setstyle(', Biopunk, organic, greens, slimes, plants, futuristic, weird')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Biopunk} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Biopunk</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pencil drawing, detailed, hyper-detailed, very realistic')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={PencilDet} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pencil Detailed</h3>
                    </button>
                    <button onClick={() => {setstyle(', Political cartoon from U.S. newspaper')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Political} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Political Cartoon</h3>
                    </button>
                    <button onClick={() => {setstyle(', Oil painting')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Oil} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Oil Painting</h3>
                    </button>
                    <button onClick={() => {setstyle(', Chinese watercolor')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Chinese} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Chinese Watercolor</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pastels')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Pastels} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pastels</h3>
                    </button>
                    <button onClick={() => {setstyle(', Airbrush')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Airbrush} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Airbrush</h3>
                    </button>
                    <button onClick={() => {setstyle(', Storybook art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Storybook} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Storybook</h3>
                    </button>
                    <button onClick={() => {setstyle(', Vector art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Vector} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Vector Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Blueprint')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Blueprint} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Blueprint</h3>
                    </button>
                    <button onClick={() => {setstyle(', Patent drawing')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Patent} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Patent Drawing</h3>
                    </button>
                    <button onClick={() => {setstyle(', 3D render, houdini 3D, octain 3D, Zbrush, Maya, Cinema 4D, Blender')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={ThreeD} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>3D Render</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pixel art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Pixel} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pixel</h3>
                    </button>
                    <button onClick={() => {setstyle(', Stuidio Ghibli animation style')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Ghibli} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Stuidio Ghibli</h3>
                    </button>
                    <button onClick={() => {setstyle(', Stained glass')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Glass} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Stained Glass</h3>
                    </button>
                    <button onClick={() => {setstyle(', Fauvism, fauvist, 1905, Andre Derain, Henri Matisse')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Fauvism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Fauvism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Supermatism, abstract, geometric, Kazimir Malevich')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Supermatism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Supermatism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Dada, Dadaism, absurd, nonense, collage, assemplage, cut-up')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Dadaism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Dadaism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Ancient Egyptian Mural, tomb, fresco, register, hiroglyphics')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Egyptian} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Egyptian</h3>
                    </button>
                    <button onClick={() => {setstyle(', Comic book art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Comic} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Comic Book</h3>
                    </button>
                    <button onClick={() => {setstyle(', Screen printing')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Screen} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Screen Printing</h3>
                    </button>
                    <button onClick={() => {setstyle(', Charcoal sketch')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Charcoal} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Charcoal</h3>
                    </button>
                    <button onClick={() => {setstyle(', Sencil, stree art, banksy')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Sencil} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Sencil Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Ballpoint pen art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Ballpoint} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Ballpoint</h3>
                    </button>
                    <button onClick={() => {setstyle(', Alegria, "corporate Memphis"')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Alegria} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Alegria</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pixar character')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Pixar} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pixar</h3>
                    </button>
                    <button onClick={() => {setstyle(', The Simpsons character')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Simpsons} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>The Simpsons</h3>
                    </button>
                    <button onClick={() => {setstyle(', Adventure Time character')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Adventure} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Adventure Time</h3>
                    </button>
                    <button onClick={() => {setstyle(', Spirited Away character')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Spirited} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Spirited Away</h3>
                    </button>
                    <button onClick={() => {setstyle(', Vintage Looney Tunes (1961) character')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Looney} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Looney Toons</h3>
                    </button>
                    <button onClick={() => {setstyle(', Dr.Seuss character')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Seuss} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Dr.Seuss</h3>
                    </button>
                    <button onClick={() => {setstyle(', Abstract')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Abstract} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Abstract</h3>
                    </button>
                    <button onClick={() => {setstyle(', 4K')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={FourK} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>4K</h3>
                    </button>
                    <button onClick={() => {setstyle(', Art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Art} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>General Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Cartoon')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Cartoon} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Cartoon</h3>
                    </button>
                    <button onClick={() => {setstyle(', Cubism')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Cubism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Cubism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pop-Art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={PopArt} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pop-Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Claymation')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Claymation} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Claymation</h3>
                    </button>
                    <button onClick={() => {setstyle(', Contemporary')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Contemporary} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Contemporary</h3>
                    </button>
                    <button onClick={() => {setstyle(', Damien Hirst')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Damien} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Damien Hirst</h3>
                    </button>
                    <button onClick={() => {setstyle(', Dark Art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Dark} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Dark</h3>
                    </button>
                    <button onClick={() => {setstyle(', De Stijl')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Stijl} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>De Stijl</h3>
                    </button>
                    <button onClick={() => {setstyle(', Doodle Art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Doodle} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Doodle</h3>
                    </button>
                    <button onClick={() => {setstyle(', Dream Art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Dream} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Dream Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Drip Paint')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Drip} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Paint Drip</h3>
                    </button>
                    <button onClick={() => {setstyle(', Family Guy Animation')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Family} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Family Guy</h3>
                    </button>
                    <button onClick={() => {setstyle(', Fantasy')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Fantasy} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Fantasy</h3>
                    </button>
                    <button onClick={() => {setstyle(', Future')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Future} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Future</h3>
                    </button>
                    <button onClick={() => {setstyle(', Geometric')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Geometric} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Geometric</h3>
                    </button>
                    <button onClick={() => {setstyle(', Graffiti')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Graffiti} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Graffiti</h3>
                    </button>
                    <button onClick={() => {setstyle(', Greek')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Greek} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Greek</h3>
                    </button>
                    <button onClick={() => {setstyle(', Happy Art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Happy} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Happy Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Isometric')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Isometric} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Isometric</h3>
                    </button>
                    <button onClick={() => {setstyle(', Anime')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Anime} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Anime</h3>
                    </button>
                    <button onClick={() => {setstyle(', Jeff Koons')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Koons} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Jeff Koons</h3>
                    </button>
                    <button onClick={() => {setstyle(', Keith Haring')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Haring} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Keith Haring</h3>
                    </button>
                    <button onClick={() => {setstyle(', Lego Bricks')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Lego} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Lego Bricks</h3>
                    </button>
                    <button onClick={() => {setstyle(', Lomography')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Lomography} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Lomography</h3>
                    </button>
                    <button onClick={() => {setstyle(', Luo Zhongli')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Luo} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Luo Zhongli</h3>
                    </button>
                    <button onClick={() => {setstyle(', Melting Art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Melting} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Melting</h3>
                    </button>
                    <button onClick={() => {setstyle(', Metallic')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Metallic} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Metallic</h3>
                    </button>
                    <button onClick={() => {setstyle(', Minimalism')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Minimalism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Minimalism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Miquel Barcelo')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Barcelo} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Miquel Barcelo</h3>
                    </button>
                    <button onClick={() => {setstyle(', Neon Art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Neon} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Neon Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pencil Sketch')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Pencil} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pencil Sketch</h3>
                    </button>
                    <button onClick={() => {setstyle(', Precisionism')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Precisionism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Precisionism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Christmas')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Christmas} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Christmas Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Scratch Art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Scratch} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Scratch Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', South Park Animation')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={South} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>South Park</h3>
                    </button>
                    <button onClick={() => {setstyle(', Surrealism')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Surrealism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Surrealism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Unreal Engine 5')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Unreal} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Unreal Engine 5</h3>
                    </button>
                    <button onClick={() => {setstyle(', Vincent Van Gough')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Gogh} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Vincent Van Gough</h3>
                    </button>
                    <button onClick={() => {setstyle(', White Board Art')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Board} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>White Board Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Futurism')}} className={classes.styles_button}>
                      <Image className={classes.imgPreview} src={Futurism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Futurism</h3>
                    </button>
                  </div>
                  <button className={classes.stylesDrop_fixed} onClick={() => {setShowStyle(false)}}>
                    <MINUS className={classes.plus1}></MINUS>
                  </button>
                  </>
                  )}
                </div>
            </>
          )
        }
      </main>
    </div>
  );
}


/* export async function creds({req}) {
  const session = await getSession({ req });
  try {
      const client = await clientPromise;

      const db = client.db("Atlas_Tattoo");

      const credits = await db
          .collection("credits")
          .find({email: session.user.email})
          .toArray()
          console.log(credits)
          
      return {
          props: {credits: JSON.parse(JSON.stringify(credits))}
      };

  } catch (e) {
      console.error(e);
  }
} */