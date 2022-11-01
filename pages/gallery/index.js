import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./GalleryPage.module.css";
import Image from "next/image"
import image47 from './images/image47.png'
import image48 from './images/image48.png'
import image49 from './images/image49.png'
import image50 from './images/image50.png'
import image51 from './images/image51.png'
import image52 from './images/image52.png'
import image53 from './images/image53.png'
import image54 from './images/image54.png'
import image83 from './images/image83.png'
import image84 from './images/image84.png'
import image85 from './images/image85.png'
import image86 from './images/image86.png'
import image11 from './images/image11.png'
import image12 from './images/image12.png'
import image13 from './images/image13.png'
import image14 from './images/image14.png'
import image15 from './images/image15.png'
import image16 from './images/image16.png'
import image17 from './images/image17.png'
import image18 from './images/image18.png'
import image19 from './images/image19.png'
import image20 from './images/image20.png'
import image21 from './images/image21.png'
import image22 from './images/image22.png'
import image23 from './images/image23.png'
import image24 from './images/image24.png'
import image25 from './images/image25.png'
import image26 from './images/image26.png'
import image27 from './images/image27.png'
import image28 from './images/image28.png'
import image29 from './images/image29.png'
import image30 from './images/image30.png'
import image31 from './images/image31.png'
import image32 from './images/image32.png'
import image33 from './images/image33.png'
import image34 from './images/image34.png'
import image35 from './images/image35.png'
import image36 from './images/image36.png'
import image37 from './images/image37.png'
import image38 from './images/image38.png'
import image39 from './images/image39.png'
import image40 from './images/image40.png'
import image41 from './images/image41.png'
import image42 from './images/image42.png'
import image43 from './images/image43.png'
import image44 from './images/image44.png'
import image45 from './images/image45.png'
import image46 from './images/image46.png'
import image55 from './images/image55.png'
import image56 from './images/image56.png'
import image57 from './images/image57.png'
import image58 from './images/image58.png'
import image59 from './images/image59.png'
import image60 from './images/image60.png'
import image61 from './images/image61.png'
import image62 from './images/image62.png'
import image63 from './images/image63.png'
import image64 from './images/image64.png'
import image65 from './images/image65.png'
import image66 from './images/image66.png'
import image67 from './images/image67.png'
import image68 from './images/image68.png'
import image69 from './images/image69.png'
import image70 from './images/image70.png'
import image71 from './images/image71.png'
import image72 from './images/image72.png'
import image73 from './images/image73.png'
import image74 from './images/image74.png'
import image75 from './images/image75.png'
import image76 from './images/image76.png'
import image77 from './images/image77.png'
import image78 from './images/image78.png'
import image79 from './images/image79.png'
import image80 from './images/image80.png'
import image81 from './images/image81.png'
import image82 from './images/image82.png'
import image87 from './images/image87.png'
import image88 from './images/image88.png'
import image89 from './images/image89.png'
import image90 from './images/image90.png'
import image91 from './images/image91.png'
import image92 from './images/image92.png'
import image93 from './images/image93.png'
import image94 from './images/image94.png'
import image95 from './images/image95.png'
import image96 from './images/image96.png'
import image97 from './images/image97.png'
import image98 from './images/image98.png'
import image99 from './images/image99.png'
import image100 from './images/image100.png'
import image101 from './images/image101.png'
import image102 from './images/image102.png'
import image103 from './images/image103.png'
import image104 from './images/image104.png'
import image105 from './images/image105.png'
import image106 from './images/image106.png'
import image107 from './images/image107.png'
import image108 from './images/image108.png'
import image109 from './images/image109.png'
import image110 from './images/image110.png'
import image111 from './images/image111.png'
import image112 from './images/image112.png'
import image113 from './images/image113.png'
import image114 from './images/image114.png'
import image115 from './images/image115.png'
import image116 from './images/image116.png'
import image117 from './images/image117.png'
import image118 from './images/image118.png'
import image119 from './images/image119.png'
import image120 from './images/image120.png'
import image121 from './images/image121.png'
import image122 from './images/image122.png'
import image123 from './images/image123.png'
import image124 from './images/image124.png'
import image125 from './images/image125.png'
import image126 from './images/image126.png'
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'
import image8 from './images/image8.png'
import image9 from './images/image9.png'
import image10 from './images/image10.png'

const image_width = '500'
const image_heigth = '500'

export default function GalleryPage() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Dev</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gallery</h1>
        <div className={styles.grid}>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image47} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
            <div className={styles.card}>
              <Image className={styles.imgPreview} src={image48} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image49} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image50} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image51} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image52} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image53} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image54} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image83} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image84} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image85} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image86} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image11} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image12} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image13} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image14} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image15} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image16} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image17} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image18} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image19} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image20} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image21} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image22} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image23} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image24} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image25} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image26} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image27} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image28} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image29} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image30} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image31} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image32} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image33} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image34} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image35} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image36} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image37} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image38} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image39} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image40} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image41} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image42} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image43} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image44} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image45} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image46} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image55} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image56} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image57} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image58} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image59} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image60} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image61} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image62} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image63} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image64} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image65} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image66} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image67} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image68} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image69} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image70} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image71} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image72} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image73} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image74} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image75} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image76} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image77} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image78} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image79} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image80} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image81} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image82} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image87} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image88} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image89} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image90} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image91} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image92} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image93} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image94} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image95} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image96} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image97} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image98} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image99} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image100} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image101} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image102} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image103} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image104} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image105} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image106} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image107} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image108} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image109} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image110} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image111} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image112} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image113} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image114} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image115} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image116} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image117} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image118} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image119} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image120} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image121} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image122} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image123} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image124} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image125} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image126} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image1} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image2} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image3} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image4} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image5} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image6} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image7} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image8} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image9} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
              <div className={styles.card}>
              <Image className={styles.imgPreview} src={image10} alt='AI Tattoo' width={image_width} height={image_heigth}/>
              </div>
        </div>
      </main>
    </div>
  );
}