import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../profile/components/Navbar.module.css";
import HOME from '/pages/gallery/images/home.svg';
import SETTINGS from '/pages/gallery/images/settings.svg';
import CREDITS from '/pages/gallery/images/credits.svg';
import GALLERY from '/pages/gallery/images/photo.svg';

const Navbar = () => {
  return (
    <container className={styles.nav_container}>
        <div className={styles.nav}>
            <div className={styles.nav_link_container}>
                <Link href="../../profile/">
                    <button className={styles.svg_button}>
                        <HOME className={styles.svg_image}/>
                    </button>
                </Link>
            </div>
            <div className={styles.nav_link_container}>
                <Link href="../../profile/myGallery">
                    <button className={styles.svg_button}>
                        <GALLERY className={styles.svg_image} title='My Gallery'/>
                    </button>
                </Link>
            </div>
            <div className={styles.nav_link_container}>
                <Link href="/stripe">
                    <button className={styles.svg_button}>
                        <CREDITS className={styles.svg_image}/>
                    </button>
                </Link>
            </div>
            <div className={styles.nav_link_container}>
                <Link href="../../profile/settings">
                    <button className={styles.svg_button}>
                        <SETTINGS className={styles.svg_image}/>
                    </button>
                </Link>
            </div>
        </div>
    </container>
  );
};

export default Navbar;