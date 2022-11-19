import Image from 'next/image'
import classes from "./GeneratePage.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import React from 'react';
import Link from 'next/link';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
import SVG from '/pages/gallery/images/download.svg';
import axios from "axios";
import PLUS from '/pages/gallery/images/plus.svg';
import MINUS from '/pages/gallery/images/minus.svg';
import CHECK from '/pages/gallery/images/check.svg';
import RED from '/pages/gallery/images/Red_X.svg';

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

import Bio from '../gallery/images/pandas/Bio.png';
import BlkGrey from '../gallery/images/pandas/BlkGrey.png';
import BlkWork from '../gallery/images/pandas/BlkWork.png';
import Americana from '../gallery/images/pandas/Americana.png';
import Geom from '../gallery/images/pandas/Geometric_tat.png';
import Surr from '../gallery/images/pandas/Surrealism_tat.png';
import New from '../gallery/images/pandas/New.png';
import Neo from '../gallery/images/pandas/Neo.png';

import None from '../gallery/images/pandas/None.png';

import White from '../gallery/images/pandas/White.png';
import Colored from '../gallery/images/pandas/Colored.png';
import { v4 as uuidv4 } from 'uuid';


const image_width = '200px'
const image_heigth = '200px'

//Main page export
export default function Generate(credits) {
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
  const [UploadImage, setUploadImage] = useState("");
  const [IsUpload, setIsUpload] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [selectedStyle, setselectedStyle] = useState("");
  const [selectedBackground, setselectedBackground] = useState("");

  const [style, setstyle] = useState("");
  const [background, setBackground] = useState("");
  const [base64String, setbase64String] = useState("");

  const [glob_id, setglob_id] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [IsUploadBtn, setIsUploadBtn] = useState(false);
  const [typeError, setTypeError] = useState(false);

  const inspire = ['synthwave sports car','a sea otter with a pearl earring by Johannes Vermeer','panda mad scientist mixing sparkling chemicals, digital art',
  'a stained glass window depicting a robot','abstract pencil and watercolor art of a lonely robot holding a balloon',
  'an expressive oil painting of a basketball player dunking, depicted as an explosion of a nebula',
  'an astronaut lounging in a tropical resort in space, vaporwave','teddy bears shopping for groceries, one-line drawing','an armchair in the shape of an avocado',
  '3D render of a small pink balloon dog in a light pink room','a bowl of soup that looks like a monster, knitted out of wool',
  'an oil painting by Matisse of a humanoid robot playing chess','a pencil and watercolor drawing of a bright city in the future with flying cars',
  'an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background','photograph of an astronaut riding a horse',
  'a stern-looking owl dressed as a librarian, digital art','a stained glass window depicting a hamburger and french fries','an oil pastel drawing of an annoyed cat in a spaceship',
  'a fortune-telling shiba inu reading your fate in a giant hamburger, digital art','a painting of a fox in the style of Starry Night',
  'a sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art',
  'a macro 35mm photograph of two mice in Hawaii, they are each wearing tiny swimsuits and are carrying tiny surf boards, digital art',
  'an astronaut playing basketball with cats in space, digital art','3D render of a cute tropical fish in an aquarium on a dark blue background, digital art',
  'a surrealist dream-like oil painting by Salvador Dalí of a cat playing checkers','A 3D render of a rainbow colored hot air balloon flying above a reflective lake',
  'Two futuristic towers with a skybridge covered in lush foliage, digital art','A hand-drawn sailboat circled by birds on the sea at sunrise',
  'A Shiba Inu dog wearing a beret and black turtleneck','A comic book cover of a superhero wearing headphones','An abstract visual of artificial intelligence',
  'A photograph of a sunflower with sunglasses on in the middle of the flower in a field on a bright sunny day','A Formula 1 car driving on a neon road',
  'A synthwave style sunset above the reflecting water of the sea, digital art','A handpalm with a tree growing on top of it',
  'A centered explosion of colorful powder on a black background','A futuristic cyborg poster hanging in a neon lit subway station',
  '"A sea otter with a pearl earring" by Johannes Vermeer','A photo of Michelangelos sculpture of David wearing headphones djing',
  'An abstract painting of artificial intelligence','An Andy Warhol style painting of a french bulldog wearing sunglasses','A cyberpunk monster in a control room',
  'High quality photo of a monkey astronaut','A hand drawn sketch of a Porsche 911','A van Gogh style painting of an American football player',
  'A computer from the 90s in the style of vaporwave','A bowl of soup that is also a portal to another dimension, digital art','A plush toy robot sitting against a yellow wall',
  'A cartoon of a monkey in space','A 3D render of an astronaut walking in a green desert','A futuristic neon lit cyborg face',
  'A photo of a silhouette of a person in a color lit desert at night','A blue orange sliced in half laying on a blue floor in front of a blue wall',
  'A photo of a white fur monster standing in a purple room',
  'earth reviving after human extinction, a new beginning, nature taking over buildings, animal kingdom, harmony, peace, earth balanced',
  'Freeform ferrofluids, beautiful dark chaos, swirling black frequency',
  'a home built in a huge Soap bubble, windows, doors, porches, awnings, middle of SPACE, cyberpunk lights, Hyper Detail, 8K, HD, Octane Rendering, Unreal Engine, V-Ray, full hd',
  'photo of an extremely cute alien fish swimming an alien habitable underwater planet, coral reefs, dream-like atmosphere, water, plants, peaceful, serenity, calm ocean, tansparent water, reefs, fish, coral, inner peace, awareness, silence, nature, evolution',
  'ossuary cemetary segmented shelves overgrown, graveyard, vertical shelves, zdzisław beksiński, hr giger, mystical occult symbol in real life, high detail, green',
  'Rubber Duck Aliens visiting the Earth for the first time, hyper-realistic, cinematic, detailed','noir detective mr. Rubber Duck. Smoke, rain, moustache and bravery. He can solve any puzzle. But can not beat his inner demons. Expressive dark matte gouche painting',
  'Reunion of man, team, squad, cyberpunk, abstract, full hd render + 3d octane render +4k UHD + immense detail + dramatic lighting + well lit + black, purple, blue, pink, cerulean, teal, metallic colours, + fine details + octane render + 8k',
  'rubber duck duke ellington. Harlem jazz club. Singing. Mic. Ambience','surreal blueish monk, dodecahedron for his head, amazing details, hyperrealistic photograph, octane made of billions of intricate small houses, GODLIKE, bokeh, photography on mars, cinematic lighting',
  'viking north druid lich mermaid king wise old man god of death witch pagan face portrait, underwater, covered in runes, crown made of bones, necromancer, zdzisław beksiński, mikhail vrubel, hr giger, gustav klimt, symmetry, mystical occult symbol in real life, high detail, green light',
  'full body character + beautiful female neopunk wizard opening a portal to the sidereal multiverse, Mandelbrot neuro web, intricate galaxy inlay + ultra high detail, plasma neon internal glow, precise, consciousness projection, astral projection, laser sharp, octane render + unreal render + photo real, 8k, volumetric lighting high contras',
  'Samhain figure, creature, wicca, occult, harvest, fall, hyper-realistic, ultra resolution, creepy, dark, witchcore',
  'a seamless tileable jade tree pattern, spiral carvings, octane renderer, trending on CGsociety','hyerophant, god light, cinematic look, octane render, under water, --wallpaper',
  'Sophia Loren in a heart shaped bath tub surrounded by rubber ducks:: hightly detailed, hyper realistic, photographic, wide angle lens in the style of Richard Avedon, Patrick Demarchelier, Vogue, Baron Adolphe De Meyer',
  'modern kids play area landscape architecture, water play area, floating kids, seating areas, perspective view, rainy weather, biopunk, cinematic photo, highly detailed, cinematic lighting, ultra-detailed, ultrarealistic, photorealism, 8k, octane render',
  'Lovecraftian character Cthulhu, with the hunter hat, and the saw cleaver, with bloodborne weapons, full body, in the style bloodborne style, full body, dark fantasy, trending on ArtStation','photorealistic flying house, many details, Ultra detailed, octane render, by Alexander Jansson',
  'Swirls, fog, phantom + ghost + dog + glowing eyes + bright silver 3 smoke + shine + sphere black paper + elements + dark grey + dark blue + neon + baroque + rococo + white + ink + tarot card with ornate border frame + sébastien mitton, viktor antonov, sergey kolesov, detailed, intricate ink illustration + magic + glow',
  'full page technical drawing technocore mind meld evil-god symmetric::2 Hieroglyphic Occult::.5 esoterism hyper realistic, rendered, 8K, old, neon, vibrant fine details symmetric',
  'Wet chitinous texture, greasy','tyriel archangel, king shamn , avatar , swords , angel wings . 4k , unreal engine',
  'ultra quality. hyper realistic smiling rubber duck with 4 wings, intricate silver, intricate brown and orange, neon armor, ornate, cinematic lighting, floral, symetric, portrait, statue cyberpunk, abstract, full hd render + 3d octane render +4k UHD + immense detail + dramatic lighting + well lit + black, purple, blue, pink, cerulean, teal, metallic colours, + fine details + octane render + 8k, abstract',
  'orange looking like water-universe-Earth in the background is a dusty wooden desk, room interior, realistic, abstract art, cinematic bright lighting, colorful, foggy, smokes',
  'dense woodland landscape, 0.4 , English forest, Irish forest, scottish forest, perspective, folklore,King Arthur, Lord of the Rings, Game of Thrones. ultra photoreal , photographic, concept art, cinematic lighting, cinematic composition, rule of thirds , mysterious, eerie, cinematic lighting, ultra-detailed, ultrarealistic, photorealism, 8k, octane render, Albert Bierstadt',
  'arch demon, god, underworld, reclaim, throne, characters, wandering, showing off his power, decimating a large nation, Control, Controlling mass power, realistic, cinematic, high detail, hyper detailed, magic, copper, gold, black, red, green, purple, crimson, smoke, particles, Beam of light, necromancy, divination, supernatural powers, omen, hidden knowledge, event, foresee, foretell, fortold, art, fantasy, towering stature, grandiose, overpowering render, dark fantasy, unreal engine, raytracing, post-processing, zbrush, substance painter, trending on ArtStation, epic perspective, composition, photorealistic, vfx, cgsociety, volumetric lighting, + cinematic + photo + realism + high detail, cgi, 8k',
  'Portrait In the style of Rembrandt Harmenszoon van Rijn oil painting','Tentacles + marble + ebony 3 fog + smoke + shine + sphere black paper + elements + dark grey + dark purple + neon + baroque + rococo + white + ink + tarot card with ornate border frame + sébastien mitton, viktor antonov, sergey kolesov, detailed, intricate ink illustration + magic + glow',
  'devilcore cyberpunk vaporwave pixel diffusion, unholy geometry, radiating','fibonacci, stone, snail, wallpaper, colorful, blue gray green, 3d pattern, 8k',
  'king shamn , avatar , swords , angel wings . 4k , unreal engine , wallpaper','Kodak Portra 160 35mm photograph of "rubber duck skeleton" aged, decayed, mossy "in glass case"','wicked man spending the night in the gaze of strange eyes, vintage, promiscuous, black and white, detailed, intricate ink, illustration, bittersweet, hd, surreal','Stockholm city hall, but built in the medeival style, Photorealism, extreme detail, dusk, pink skies',
  'pale young man sitting in an armchair reading beside a big fireplace, bookshelves covering the dark walls, dogs lying on the floor, rule of thirds, dark room',
  'Axel Auriant, ultra detail, ultra realist, 8K, 3D, natural light, photorealism','generative lines intricate but well defined linework lines running parralel to each other as they twist and turn to form a large geometric design that is almost symettrical but for a few glitchs and defects covering small portions of the image monochrome',
  'A string structure, made of silver, enclosing a silicone translucent humanoïde creature, 195 large shot, 75 panoramic, 75 black and white, 50 with a glimpse of red, 25 with a glimpse of green, 23 atmospheric, 22 intricate fine ornemental, 80 cinematic, 80 hyper realism, 100 mono directional light, 45 Caustics, 30 blade runner, 5 David Lynch inspiration, 4 Terry Gilliam inspiration, 8 Luis Bunuel inspiration, 11 Jean Jeunet inspiration, 9 crystalcore, 25 high detail, 100 octane redshift Lumion render 8k, 90 concept art, 1 hyper detailed, insane details, intricate, 22 elite, ornate, elegant, luxury, realist, 30 golden ratio, 75 octane render, weta digital, ray trace, 8k',
  'imagine unwashed unclean decrepid matterpattern','hungarian parliament underwater-beach, palm trees behind, aerial shot, real photography, unreal-engine, 4k, highly detailed --wallpaper --uplight',
  'secret vintage photo of rubber duck commitng war crimes in World war 2, why is he did that','pencil drawing of an insect, abstract, surrealism, hyper detail, line art',
  'in darkest blue subway,a side road of huge underground sewage channel','city center public park, modern landscape architectural design for industrialpunk, water in the middle, dramatic lighting and composition, octane render, unreal engine 5, 8k',
  'gaelic forest spirit, qirin, god, deity, illustrated, detailed, serene','victorian rocking toy carousel theme park horse, overgrown, zdzisław beksiński, hr giger, mystical occult symbol in real life, high detail, green fog',
  'generative lines intricate defined linework many fine line details with lines running parralel to each other as they twist and turn to form a large geometric design that is almost symettrical but for a few glitchs and defects covering small portions of the image monochromem .01 thin purple lines on white wood',
  'synthwave galaxy being eaten by Galactus, HDR, cinematic, ultrawide, realistic, highly detailed','meaty cyborg wall texture. Lots of tentacles, wires and tumors',
  'old pocket watch, Dieselpunk, grimy, steel, oil, 50s, mechanized, punk cousin of steampunk','old pocket watch, Cyberpunk, 1990s, dyed hair, spiky, graphic elements',
  'old pocket watch','lightbulb, black outline, White Background','lightbulb, Dieselpunk, grimy, steel, oil, 50s, mechanized, punk cousin of steampunk, White Background',
  'abstract art, black and white','Digital image in black of twisted bonsai tree with roots on white background',
  'Digital image on white background of pencil drawn and shaded old well-branched tree with a twisted trunk and no leaves',
  'Digital image bold black tribal design circular shape white background','Digital image of Phoenix bird with wings spread and a red feather in its tail on a white background',
  'digital art of a japanese man, holding a DSLR camera, excited facial expression, head-and-shoulder shot, white background, cute Pixar character, houdini 3D render',
  'a dog, vaporwave, neon, pink, blue, geometric, futuristic, 80s','aware winning, emotional art, stunning, digital art, 8k, high definition',
  'award winning, digital art, Atlantis, stunning, 8k, high definition','award winning, digital art, Mt Olympus, stunning, 8k, high definition',
  'award winning, digital art, emotion, many world theory, multi dimension, high definition, 8k, stunning','award winning, digital art, space, portals, galaxy, emotion, many world theory, multi dimension, high definition, 8k, stunning',
  'award winning, digital art, space, portals, galaxy, emotion, many world theory, multi dimension','digital art, in the style of Pixar, Toy Story character, white background',
  'digital art, in the style of Pixar, Cars character, white background','digital art, in the style of Pixar, Entangled character, white background',
  'digital art, in the style of Pixar, Wall-E character, white background','digital art, in the style of Pixar, Monsters Ink character, white background',
  'digital art, in the style of Pixar, character, white background','digital art of a happy man looking upwards, eyes wide in wonder, awestruck, in the style of Pixar, character, white background',
  'abstract ink art','a dolphin, abstract art','a monkey, abstract pop art','a lion, abstract pop art','a tiger, abstract pop art','a panda, abstract pop art',
  'a German Shepperd, white background, vector, digital art','a shark, white background, vector, digital art','vintage sneakers, white background, vector, digital art',
  'vintage butterfly, white background, vector, digital art','vintage tv, white background, vector, digital art','vintage radio, white background, vector, digital art',
  'glasses, white background, vector, digital art','rick and morty, white background, vector, digital art','portal to another dimension, white background, vector, digital art',
  'a black outline of the galaxy, white background, vector','a black outline of the solar system, white background, vector','a black outline of the moon, white background, vector',
  'a black outline of the sun, white background, vector','a black outline of a saw, white background, vector','a black outline of a hammer, white background, vector',
  'a black outline of a Greek statue, white background, vector','a black outline of a vintage computer, white background, vector',
  'a black outline of a vintage car, white background, vector','a black outline of a vintage tv, white background, vector',
  'a black outline of a vintage phone, white background, vector','a black outline of a vintage radio, white background, vector',
  'a black outline of a vintage sneaker, white background, vector','a black outline of a vintage coke bottle, white background, vector',
  'a black outline of an old pocket watch, white background, vector','a black outline of a knife, white background, vector','a black outline of a skull, white background, vector',
  'a black outline of a camera, white background, vector','a black outline of a coffee cup, white background, vector','a black outline of the deathly hallows, white background, vector','a black outline of a tree, white background, vector',
  'a black outline of a Einstein, white background, vector','a black outline of a poker chip, white background, vector',
  'a black outline of a deck of cards, white background, vector','a black outline of a watch, white background, vector','a black outline of a windmill, white background, vector',
  'a black outline of sunglasses, white background, vector','a black outline of a wand, white background, vector','a black outline of a book, white background, vector',
  'a black outline of a pencil, white background, vector','a black outline of a flower, white background, vector','a black outline of a lightning bolt, white background, vector',
  'a black outline of a brain, white background, vector','a black outline of a skeleton drinking liquor, white background, vector',
  'a black outline of an hour glass, white background, vector','a black outline of chess piece, white background, vector','a black outline of barcode, white background, vector',
  'a black outline of common items, white background, vector','walter white, pop art','Nikola Tesla wearing glasses, pop art','modern black object on a white background',
  'white ink sinking in water, 8k resolution','tan ink sinking in water, 8k resolution','multi colored ink sinking in water, 8k resolution',
  'yellow and orange ink sinking in water, 8k resolution','pink ink sinking in water, 8k resolution','blue ink sinking in water, 8k resolution',
  'blue and purple ink sinking in water, 8k resolution','navy and gold ink drops sinking in water, 8k resolution','green ink sinking in water, 8k resolution','red ink sinking in water, 8k resolution','grey ink sinking in water, 8k resolution','black ink sinking in water, 8k resolution','tattoo stencil of sunglasses on a white background','a wolf skeleton, realistic','a panda sitting in a chair in the style a astronaut','a panda sitting in a chair in the style a princess','a panda sitting in a chair in the style a emperor','a panda sitting in a chair in the style a samurai','a panda sitting in a chair in the style a ninja','a panda sitting in a chair in the style a swimmer','a panda sitting in a chair in the style a software engineer','a panda sitting in a chair in the style a doctor','a panda sitting in a chair in the style a police','a panda sitting in a chair in the style a pirate','a panda sitting in a chair in the style of Santa','a panda sitting in a chair in the style a knight','Einstein wearing sun glasses, pop art and digital art','a German shepherded playing poker, pop art','Tiger wearing glasses playing poker in the style of digital art','A shark in the style of digital art','A butterfly in the style of Ivan Bilibin and digital art in the colors black and white','A wolf in the style of Ivan Bilibin and digital art','A lion in the style of Ivan Bilibin and digital art','a unicorn in the style of Toshi Yoshida','skeleton butterfly','A line art sketch of a dragon','A dragon in the style of Allison Kunath and digital art','A sketch of a dragon in the style of Ankit Kumar','A pen sketch of a dragon in the style of Allison kunath','A pencil sketch of a dragon','A sketch of a dragon with geometrical shapes','Intricate complex geometric sketch of a butterfly','Intricate geometric sketch of a wolf in the style of Allison Kunath','A geometric sketch of a lion in the style of Allison Kunath','A geometric pencil sketch of a dragon in the style of Allison Kunath','A geometric sketch of a dragon in grey and black color','Naruto in black and white colors in the style of Hiroshi Yoshida','An octopus holding a trident in the style realism in colors black and white','An octopus holding a trident in the style realism','Zeus in the style of digital art','cool tattoo in the style of Ivan Shishkin','cool tattoo in the style of Ghibli','cool tattoo in the style of Ivan Bilibin','cool tattoo in the style of Hiroshi Yoshida','cool tattoo in the style of Toshi Yoshida']

    //function to get the base64 image
    const base = async (url) => {
      let newBase = await axios.post(`/api/dalle/download`, { url: url })
        let base6 = await newBase.data.result

        const baseData = ('data:image/png;base64,' + base6);
        const buf = Buffer.from(baseData.replace(/^data:image\/\w+;base64,/, ""),'base64');

        return buf
    }

  const storeMD = async (url) => {
    if (!IsUpload) {
    const storingMD = axios.post('api/dalle/storingMD', {
      image_path: url,
      email: session.user.email,
      name: session.user.name,
      prompt: query + style + background,
    })} else {
      const storingMD = axios.post('api/dalle/storingMD', {
        image_path: url,
        email: session.user.email,
        name: session.user.name,
        prompt: 'Variation',
      })}
  }

  const startLoad = async (files) => {
    for (const file of files) {

      //setglob_id(uuidv4());

      let baseData = await base(file.url);

      const getURL = await fetch("/api/dalle/s3").then(res => res.json());
      console.log(getURL)

      //post the image directly to the s3 bucket
      await fetch(getURL, {
        method: "PUT",
        headers: {
          "Content-Type": 'image/png',
          "Content-Encoding": 'base64',
        },
        body: baseData,
      })

      const varImage = getURL.split('?')[0];

      storeMD(varImage);
    }
  }

const GetDalle2API = async () => {
    if (query != "") {
      setError(false);
      setLoading(true);
      const generate = await axios.post('/api/dalle/dalleAPI',{
        prompt: query + style + background,
        n: 4,
        size: "1024x1024",
        user: session.user.email,
        name: session.user.name
    });
        setResults(generate.data);
        const files = (generate.data);
        startLoad(files);
        setLoading(false);
        setIsOpen(true);
        setstyle("");
        setBackground("");
        setselectedBackground("");
        setselectedStyle("");
    } else {
      setError(true);
    };
  }

  const VarDalle2API = async (url) => {
    if (selectedFile != "") {
      setError(false);
      setLoading(true);

      //let baseData = await base(file.generation.image_path);

      //const sendBase = 'data:image/png;base64,'+base64String 

      const generate = await axios.post('/api/dalle/variationAPI',{
        url: url,
        //file: selectedFile,
        //n: 1,
        //size: "1024x1024",
        user: session.user.email,
        //base64: sendBase
        name: session.user.name
    });
      setResults(generate.data);
      setIsUploadBtn(false);
      const files = (generate.data);
      startLoad(files);
      setLoading(false);
      setIsUploadBtn(true);
      setstyle("");
      setBackground("");
      setselectedBackground("");
      setselectedStyle("");
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
    //console.log(jsonData);
    if (!jsonData) {
      setnoCred(true);
    } else if (IsOpen) {
      if (jsonData != null, jsonData.credits > 0, query == "") {
        //setIsOpen(true);
        setError(true);
      } else if (jsonData != null, jsonData.credits > 0) {
        const numCred = jsonData.credits;
        const eEmail = session.user.email;
        var data = {
          credits: Number(numCred),
          email: eEmail
        };
        updateCredits(data);
        GetDalle2API();
        setIsOpen(false);
      } else {
        setnoCred(true);
      }

  }}

  //Get the Dalle Credits for the user from Mongodb
   const getCredits = async (seeEmail) => {
    let newData = await fetch(`/api/dalle/getCredits?email=${seeEmail}`)
    let newJson = await newData.json();
    return newJson;
  }

    //Get the Dalle Credits for the user from Mongodb
    const removeFiles = async () => {
      let newData = await fetch(`/api/dalle/removeFiles`)
      let newJson = await newData.json();
    }

  const handleEvent = async () => {

    let jsonData = await getCredits(session.user.email);

    if (!jsonData) {
      setnoCred(true);
    }
    else if (jsonData != null, jsonData.credits > 0, IsUpload == "") {
      setIsUpload(true);
      setError(true);
    } else if (jsonData != null, jsonData.credits > 0) {

      const numCred = jsonData.credits;
      const eEmail = session.user.email;
      var data = {
        credits: Number(numCred),
        email: eEmail
      };
      updateCredits(data);
      
      const getURL = await fetch("/api/dalle/s3").then(res => res.json());
      console.log(getURL)

      //post the image directly to the s3 bucket
      await fetch(getURL, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: selectedFile,

      })
        const varImage = getURL.split('?')[0];
        VarDalle2API(varImage);
    } else {
      setnoCred(true);
    }
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
              {!IsUpload && (
                <>
                  <br />
                  <div className={classes.generate_options}>
                    <button className={classes.btn_neu_inspire} onClick={() => {setQuery(inspire[Math.floor(Math.random() * inspire.length)]), setstyle(""), setBackground(""), setselectedBackground(""), setselectedStyle("")}}>
                      Inspire
                    </button>
                    <button className={classes.btn_neu_inspire} onClick={() => {setIsUploadBtn(false), setIsOpen(false), setIsUpload(true), setResults([]), setstyle(""), setBackground(""), setselectedBackground(""), setselectedStyle("")}}>
                      Variation
                    </button>
                    <Link href='/profile/myGallery'>
                      <button className={classes.btn_neu_inspire}>
                        Collection
                      </button>
                    </Link>
                  </div>
                    <input
                      id="query"
                      type="text"
                      value={query}
                      onChange={(e) => {setQuery(e.target.value)}}
                      placeholder="Tattoo prompt..."
                    />
                    <br />
                </>
                )}
              {IsOpen &&
              <>
                <button className={classes.btn_neu} onClick={() => {getActivity(), setShowStyle(false), setShowBackground(false)}}>
                    Generate
                  </button>
                  <br />
                  <br />
                </>}
                  {IsUpload && (
                    <>
                  <button className={classes.btn_neu_inspire1} onClick={() => {setIsUploadBtn(false), setResults([]), setIsUpload(false), setSelectedFile(null), setIsOpen(true), setstyle(""), setBackground(""), setselectedBackground(""), setselectedStyle("")}}>
                    Prompt
                  </button>
                  <label className={classes.upload_image}>
                    <form id="imageForm">
                      <input
                        id="image-input"
                        type="file"
                        onChange={({target}) => {
                          if (target.files) {
                            const file = target.files[0];
                            setSelectedFile(file);
                            setIsUploadBtn(true);
                          }
                        }}
                        accept="image/png"
                        className={classes.upload_image1}
                        onClick={() => {setTypeError(false)}}
                      />
                    </form>
                    {selectedFile && (
                      <div className={classes.file_selected}>
                        {typeError && (
                          <>
                          <br />
                          <h2>Error</h2>
                          <br />
                          </>
                        )}
                        {!typeError && (
                          <CHECK className={classes.input_svg1}></CHECK>
                        )}
                        <a>{selectedFile.name}</a>
                      </div>
                    )}
                    {!selectedFile && (
                      <PLUS className={classes.input_svg}></PLUS>
                    )}
                  </label>
                  <br />
                  <br />
                  {IsUploadBtn && (
                    <>
                    <button className={classes.btn_neu} onClick={() => 
                      {
                        console.log(selectedFile.type)
                        if (selectedFile.type != 'image/png') {
                          setTypeError(true);
                          setIsUploadBtn(false);
                        } else {
                          handleEvent();
                          setIsUpload(false);
                          setIsUploadBtn(false);
                        }}
                      }>
                      Generate
                    </button>
                  </>)}
                  {typeError && (
                    <div className={classes.warning}>
                      <h1 className={classes.warning}>
                        Make sure the image meets the following requirements
                      </h1>
                      <h1 className={classes.warning}>
                        File Type: .png
                      </h1>
                      <h1 className={classes.warning}>
                        Dimensions: Square
                      </h1>
                      <h1 className={classes.warning}>
                        Size: less than 4MB
                      </h1>
                    </div>
                  )}
                  </>)}
              {noCred &&
                <>
                <span><br /></span>
                <h1 className={classes.warning}>
                    No credits available...
                  </h1>
                  <br />
                  <Link href='/stripe'>
                    <button className={classes.btn_neu_inspire}>
                      Buy Credits
                    </button>
                  </Link>
                </>}
                {error ? (
                <div className={classes.error}>Please enter a prompt to generate an image</div>
              ) : (
                <></>
              )}
              {loading && 
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
              <br />
              {selectedFile && (
                <>
                <div className={classes.isThere}>
                  <Image className={classes.imgPreview} src={URL.createObjectURL(selectedFile)} alt='' width='300' height='300'></Image>
                  <h1 className={classes.original_image}>Original Image</h1>
                </div>
                </>
              )}
              <br />
              <div className={classes.grid}>
                {results.map((result) => {
                  return (
                    <div key={toString(result.url)} className={classes.card}>
                      <Image key={toString(result.url)} className={classes.imgPreview} src={result.url} alt=' ' width='300vw' height='300vw'/>
                      <div>
                        <button className={classes.btn_neu_download} onClick={() => download(result.url)}>
                          <SVG className={classes.download_image}/>
                        </button>
                      </div>        
                    </div>
                  );
                })}
              </div>
              <br />
              <div className={classes.tattoo_options}>
              {IsOpen && (
              <>
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
                    <button onClick={() => {setBackground(""), setselectedBackground('None_Background')}} className={(selectedBackground=='None_Background') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={None} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Clear Selected</h3>
                    </button>
                    <button onClick={() => {setBackground(", White Background"), setselectedBackground('White')}} className={(selectedBackground=='White') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={White} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>White Background</h3>
                    </button>
                    <button onClick={() => {setBackground(""), setselectedBackground('Colored')}} className={(selectedBackground=='Colored') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Colored} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Colored Background</h3>
                    </button>
                  </div>
                  <button className={classes.stylesDrop_fixed} onClick={() => {setShowBackground(false)}}>
                    <MINUS className={classes.plus1}></MINUS>
                  </button>
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
                    <button onClick={() => {setstyle(''), setselectedStyle('None_style')}} className={(selectedStyle=='None_style') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={None} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Clear Selected</h3>
                    </button>
                    <button onClick={() => {setstyle(', in the art style of neo-traditional tattoo art'), setselectedStyle('Neo')}} className={(selectedStyle=='Neo') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Neo} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Neo-Traditional</h3>
                    </button>
                    <button onClick={() => {setstyle(', in the art style of New School tattoo art'), setselectedStyle('New')}} className={(selectedStyle=='New') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={New} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>New School</h3>
                    </button>
                    <button onClick={() => {setstyle(', in the art style of Surrealism tattoo art'), setselectedStyle('Surr')}} className={(selectedStyle=='Surr') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Surr} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Surrealism</h3>
                    </button>
                    <button onClick={() => {setstyle(', in the art style of Geometric tattoo art'), setselectedStyle('Geom')}} className={(selectedStyle=='Geom') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Geom} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Geometric</h3>
                    </button>
                    <button onClick={() => {setstyle(', in the art style of Classic Americana tattoo art'), setselectedStyle('Americana')}} className={(selectedStyle=='Americana') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Americana} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Classic Americana</h3>
                    </button>
                    <button onClick={() => {setstyle(', in the art style of Black Work tattoo art'), setselectedStyle('BlkWork')}} className={(selectedStyle=='BlkWork') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={BlkWork} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Black Work</h3>
                    </button>
                    <button onClick={() => {setstyle(', in the art style of Black and Grey tattoo art'), setselectedStyle('BlkGrey')}} className={(selectedStyle=='BlkGrey') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={BlkGrey} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Black and Grey</h3>
                    </button>
                    <button onClick={() => {setstyle(', in the art style of Biomechanical tattoo art'), setselectedStyle('Bio')}} className={(selectedStyle=='Bio') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Bio} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Biomechanical</h3>
                    </button>
                    <button onClick={() => {setstyle(', Black outline'), setselectedStyle('Black')}} className={(selectedStyle=='Black') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Black} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Black Outline</h3>
                    </button>
                    <button onClick={() => {setstyle(', Vaporwave, neon, pink, blue, geometric, futureistic, 80s'), setselectedStyle('Vaporwave')}} className={(selectedStyle=='Vaporwave') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Vaporwave} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Vaporwave</h3>
                    </button>
                    <button onClick={() => {setstyle(', Post-apocalyptic, grey, desolate, stormy, decay, fire'), setselectedStyle('Post')}} className={(selectedStyle=='Post') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Post} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Post-apocalyptic</h3>
                    </button>
                    <button onClick={() => {setstyle(', Dieselpunk, grimy, steel, oil, 50s, mechanized, punk cousin of steampunk'), setselectedStyle('Dieselpunk')}} className={(selectedStyle=='Dieselpunk') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Dieselpunk} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Dieselpunk</h3>
                    </button>
                    <button onClick={() => {setstyle(', Cyberpunk, 1990s, dyed hair, spiky, graphic elements'), setselectedStyle('Cyberpunk')}} className={(selectedStyle=='Cyberpunk') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Cyberpunk} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Cyberpunk</h3>
                    </button>
                    <button onClick={() => {setstyle(', Steampunk, gold, copper, brass, victoriana'), setselectedStyle('Steampunk')}} className={(selectedStyle=='Steampunk') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Steampunk} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Steampunk</h3>
                    </button>
                    <button onClick={() => {setstyle(', Cybernetic, sci-fi, glows, greens, metals, armor, chrome'), setselectedStyle('Cybernetic')}} className={(selectedStyle=='Cybernetic') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Cybernetic} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Cybernetic</h3>
                    </button>
                    <button onClick={() => {setstyle(', Gothic, fantasy, stone, dark, lush, nature, mist, mystery, angular'), setselectedStyle('Gothic')}} className={(selectedStyle=='Gothic') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Gothic} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Gothic</h3>
                    </button>
                    <button onClick={() => {setstyle(', Biopunk, organic, greens, slimes, plants, futuristic, weird'), setselectedStyle('Biopunk')}} className={(selectedStyle=='Biopunk') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Biopunk} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Biopunk</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pencil drawing, detailed, hyper-detailed, very realistic'), setselectedStyle('PencilDet')}} className={(selectedStyle=='PencilDet') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={PencilDet} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pencil Detailed</h3>
                    </button>
                    <button onClick={() => {setstyle(', Political cartoon from U.S. newspaper'), setselectedStyle('Political')}} className={(selectedStyle=='Political') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Political} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Political Cartoon</h3>
                    </button>
                    <button onClick={() => {setstyle(', Oil painting'), setselectedStyle('Oil')}} className={(selectedStyle=='Oil') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Oil} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Oil Painting</h3>
                    </button>
                    <button onClick={() => {setstyle(', Chinese watercolor'), setselectedStyle('Chinese')}} className={(selectedStyle=='Chinese') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Chinese} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Chinese Watercolor</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pastels'), setselectedStyle('Pastels')}} className={(selectedStyle=='Pastels') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Pastels} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pastels</h3>
                    </button>
                    <button onClick={() => {setstyle(', Airbrush'), setselectedStyle('Airbrush')}} className={(selectedStyle=='Airbrush') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Airbrush} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Airbrush</h3>
                    </button>
                    <button onClick={() => {setstyle(', Storybook art'), setselectedStyle('Storybook')}} className={(selectedStyle=='Storybook') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Storybook} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Storybook</h3>
                    </button>
                    <button onClick={() => {setstyle(', Vector art'), setselectedStyle('Vector')}} className={(selectedStyle=='Vector') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Vector} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Vector Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Blueprint'), setselectedStyle('Blueprint')}} className={(selectedStyle=='Blueprint') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Blueprint} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Blueprint</h3>
                    </button>
                    <button onClick={() => {setstyle(', Patent drawing'), setselectedStyle('Patent')}} className={(selectedStyle=='Patent') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Patent} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Patent Drawing</h3>
                    </button>
                    <button onClick={() => {setstyle(', 3D render, houdini 3D, octain 3D, Zbrush, Maya, Cinema 4D, Blender'), setselectedStyle('ThreeD')}} className={(selectedStyle=='ThreeD') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={ThreeD} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>3D Render</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pixel art'), setselectedStyle('Pixel')}} className={(selectedStyle=='Pixel') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Pixel} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pixel</h3>
                    </button>
                    <button onClick={() => {setstyle(', Stuidio Ghibli animation style'), setselectedStyle('Ghibli')}} className={(selectedStyle=='Ghibli') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Ghibli} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Stuidio Ghibli</h3>
                    </button>
                    <button onClick={() => {setstyle(', Stained glass'), setselectedStyle('Glass')}} className={(selectedStyle=='Glass') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Glass} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Stained Glass</h3>
                    </button>
                    <button onClick={() => {setstyle(', Fauvism, fauvist, 1905, Andre Derain, Henri Matisse'), setselectedStyle('Fauvism')}} className={(selectedStyle=='Fauvism') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Fauvism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Fauvism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Supermatism, abstract, geometric, Kazimir Malevich'), setselectedStyle('Supermatism')}} className={(selectedStyle=='Supermatism') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Supermatism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Supermatism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Dada, Dadaism, absurd, nonense, collage, assemplage, cut-up'), setselectedStyle('Dadaism')}} className={(selectedStyle=='Dadaism') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Dadaism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Dadaism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Ancient Egyptian Mural, tomb, fresco, register, hiroglyphics'), setselectedStyle('Egyptian')}} className={(selectedStyle=='Egyptian') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Egyptian} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Egyptian</h3>
                    </button>
                    <button onClick={() => {setstyle(', Comic book art'), setselectedStyle('Comic')}} className={(selectedStyle=='Comic') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Comic} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Comic Book</h3>
                    </button>
                    <button onClick={() => {setstyle(', Screen printing'), setselectedStyle('Screen')}} className={(selectedStyle=='Screen') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Screen} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Screen Printing</h3>
                    </button>
                    <button onClick={() => {setstyle(', Charcoal sketch'), setselectedStyle('Charcoal')}} className={(selectedStyle=='Charcoal') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Charcoal} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Charcoal</h3>
                    </button>
                    <button onClick={() => {setstyle(', Sencil, stree art, banksy'), setselectedStyle('Sencil')}} className={(selectedStyle=='Sencil') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Sencil} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Sencil Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Ballpoint pen art'), setselectedStyle('Ballpoint')}} className={(selectedStyle=='Ballpoint') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Ballpoint} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Ballpoint</h3>
                    </button>
                    <button onClick={() => {setstyle(', Alegria, "corporate Memphis"'), setselectedStyle('Alegria')}} className={(selectedStyle=='Alegria') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Alegria} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Alegria</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pixar character'), setselectedStyle('Pixar')}} className={(selectedStyle=='Pixar') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Pixar} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pixar</h3>
                    </button>
                    <button onClick={() => {setstyle(', The Simpsons character'), setselectedStyle('Simpsons')}} className={(selectedStyle=='Simpsons') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Simpsons} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>The Simpsons</h3>
                    </button>
                    <button onClick={() => {setstyle(', Adventure Time character'), setselectedStyle('Adventure')}} className={(selectedStyle=='Adventure') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Adventure} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Adventure Time</h3>
                    </button>
                    <button onClick={() => {setstyle(', Spirited Away character'), setselectedStyle('Spirited')}} className={(selectedStyle=='Spirited') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Spirited} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Spirited Away</h3>
                    </button>
                    <button onClick={() => {setstyle(', Vintage Looney Tunes (1961) character'), setselectedStyle('Looney')}} className={(selectedStyle=='Looney') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Looney} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Looney Toons</h3>
                    </button>
                    <button onClick={() => {setstyle(', Dr.Seuss character'), setselectedStyle('Seuss')}} className={(selectedStyle=='Seuss') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Seuss} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Dr.Seuss</h3>
                    </button>
                    <button onClick={() => {setstyle(', Abstract'), setselectedStyle('Abstract')}} className={(selectedStyle=='Abstract') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Abstract} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Abstract</h3>
                    </button>
                    <button onClick={() => {setstyle(', 4K'), setselectedStyle('FourK')}} className={(selectedStyle=='FourK') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={FourK} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>4K</h3>
                    </button>
                    <button onClick={() => {setstyle(', Art'), setselectedStyle('Art')}} className={(selectedStyle=='Art') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Art} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>General Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Cartoon'), setselectedStyle('Cartoon')}} className={(selectedStyle=='Cartoon') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Cartoon} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Cartoon</h3>
                    </button>
                    <button onClick={() => {setstyle(', Cubism'), setselectedStyle('Cubism')}} className={(selectedStyle=='Cubism') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Cubism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Cubism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pop-Art'), setselectedStyle('PopArt')}} className={(selectedStyle=='PopArt') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={PopArt} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pop-Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Claymation'), setselectedStyle('Claymation')}} className={(selectedStyle=='Claymation') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Claymation} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Claymation</h3>
                    </button>
                    <button onClick={() => {setstyle(', Contemporary'), setselectedStyle('Contemporary')}} className={(selectedStyle=='Contemporary') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Contemporary} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Contemporary</h3>
                    </button>
                    <button onClick={() => {setstyle(', Damien Hirst'), setselectedStyle('Damien')}} className={(selectedStyle=='Damien') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Damien} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Damien Hirst</h3>
                    </button>
                    <button onClick={() => {setstyle(', Dark Art'), setselectedStyle('Dark')}} className={(selectedStyle=='Dark') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Dark} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Dark</h3>
                    </button>
                    <button onClick={() => {setstyle(', De Stijl'), setselectedStyle('Stijl')}} className={(selectedStyle=='Stijl') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Stijl} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>De Stijl</h3>
                    </button>
                    <button onClick={() => {setstyle(', Doodle Art'), setselectedStyle('Doodle')}} className={(selectedStyle=='Doodle') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Doodle} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Doodle</h3>
                    </button>
                    <button onClick={() => {setstyle(', Dream Art'), setselectedStyle('Dream')}} className={(selectedStyle=='Dream') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Dream} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Dream Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Drip Paint'), setselectedStyle('Drip')}} className={(selectedStyle=='Drip') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Drip} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Paint Drip</h3>
                    </button>
                    <button onClick={() => {setstyle(', Family Guy Animation'), setselectedStyle('Family')}} className={(selectedStyle=='Family') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Family} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Family Guy</h3>
                    </button>
                    <button onClick={() => {setstyle(', Fantasy'), setselectedStyle('Fantasy')}} className={(selectedStyle=='Fantasy') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Fantasy} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Fantasy</h3>
                    </button>
                    <button onClick={() => {setstyle(', Future'), setselectedStyle('Future')}} className={(selectedStyle=='Future') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Future} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Future</h3>
                    </button>
                    <button onClick={() => {setstyle(', Geometric'), setselectedStyle('Geometric')}} className={(selectedStyle=='Geometric') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Geometric} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Geometric</h3>
                    </button>
                    <button onClick={() => {setstyle(', Graffiti'), setselectedStyle('Graffiti')}} className={(selectedStyle=='Graffiti') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Graffiti} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Graffiti</h3>
                    </button>
                    <button onClick={() => {setstyle(', Greek'), setselectedStyle('Greek')}} className={(selectedStyle=='Greek') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Greek} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Greek</h3>
                    </button>
                    <button onClick={() => {setstyle(', Happy Art'), setselectedStyle('Happy')}} className={(selectedStyle=='Happy') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Happy} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Happy Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Isometric'), setselectedStyle('Isometric')}} className={(selectedStyle=='Isometric') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Isometric} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Isometric</h3>
                    </button>
                    <button onClick={() => {setstyle(', Anime'), setselectedStyle('Anime')}} className={(selectedStyle=='Anime') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Anime} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Anime</h3>
                    </button>
                    <button onClick={() => {setstyle(', Jeff Koons'), setselectedStyle('Koons')}} className={(selectedStyle=='Koons') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Koons} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Jeff Koons</h3>
                    </button>
                    <button onClick={() => {setstyle(', Keith Haring'), setselectedStyle('Haring')}} className={(selectedStyle=='Haring') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Haring} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Keith Haring</h3>
                    </button>
                    <button onClick={() => {setstyle(', Lego Bricks'), setselectedStyle('Lego')}} className={(selectedStyle=='Lego') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Lego} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Lego Bricks</h3>
                    </button>
                    <button onClick={() => {setstyle(', Lomography'), setselectedStyle('Lomography')}} className={(selectedStyle=='Lomography') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Lomography} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Lomography</h3>
                    </button>
                    <button onClick={() => {setstyle(', Luo Zhongli'), setselectedStyle('Luo')}} className={(selectedStyle=='Luo') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Luo} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Luo Zhongli</h3>
                    </button>
                    <button onClick={() => {setstyle(', Melting Art'), setselectedStyle('Melting')}} className={(selectedStyle=='Melting') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Melting} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Melting</h3>
                    </button>
                    <button onClick={() => {setstyle(', Metallic'), setselectedStyle('Metallic')}} className={(selectedStyle=='Metallic') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Metallic} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Metallic</h3>
                    </button>
                    <button onClick={() => {setstyle(', Minimalism'), setselectedStyle('Minimalism')}} className={(selectedStyle=='Minimalism') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Minimalism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Minimalism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Miquel Barcelo'), setselectedStyle('Barcelo')}} className={(selectedStyle=='Barcelo') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Barcelo} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Miquel Barcelo</h3>
                    </button>
                    <button onClick={() => {setstyle(', Neon Art'), setselectedStyle('Neon')}} className={(selectedStyle=='Neon') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Neon} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Neon Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Pencil Sketch'), setselectedStyle('Pencil')}} className={(selectedStyle=='Pencil') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Pencil} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Pencil Sketch</h3>
                    </button>
                    <button onClick={() => {setstyle(', Precisionism'), setselectedStyle('Precisionism')}} className={(selectedStyle=='Precisionism') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Precisionism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Precisionism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Christmas'), setselectedStyle('Christmas')}} className={(selectedStyle=='Christmas') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Christmas} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Christmas Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Scratch Art'), setselectedStyle('Scratch')}} className={(selectedStyle=='Scratch') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Scratch} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Scratch Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', South Park Animation'), setselectedStyle('South')}} className={(selectedStyle=='South') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={South} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>South Park</h3>
                    </button>
                    <button onClick={() => {setstyle(', Surrealism'), setselectedStyle('Surrealism')}} className={(selectedStyle=='Surrealism') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Surrealism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Surrealism</h3>
                    </button>
                    <button onClick={() => {setstyle(', Unreal Engine 5'), setselectedStyle('Unreal')}} className={(selectedStyle=='Unreal') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Unreal} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Unreal Engine 5</h3>
                    </button>
                    <button onClick={() => {setstyle(', Vincent Van Gough'), setselectedStyle('Gogh')}} className={(selectedStyle=='Gogh') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Gogh} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Vincent Van Gough</h3>
                    </button>
                    <button onClick={() => {setstyle(', White Board Art'), setselectedStyle('Board')}} className={(selectedStyle=='Board') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Board} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>White Board Art</h3>
                    </button>
                    <button onClick={() => {setstyle(', Futurism'), setselectedStyle('Futurism')}} className={(selectedStyle=='Futurism') ? classes.styles_button_active : classes.styles_button}>
                      <Image className={classes.imgPreview} src={Futurism} alt='AI Tattoo' width={image_width} height={image_heigth}/>
                      <h3>Futurism</h3>
                    </button>
                  </div>
                  <button className={classes.stylesDrop_fixed} onClick={() => {setShowStyle(false)}}>
                    <MINUS className={classes.plus1}></MINUS>
                  </button>
                  </>
                  )}
                </>)}
                </div>
            </>
          )
        }
      </main>
    </div>
  );
}