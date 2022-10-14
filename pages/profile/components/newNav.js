import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../profile/components/newNav.module.css";
import HOME from '/pages/gallery/images/home.svg';
import SETTINGS from '/pages/gallery/images/settings.svg';
import CREDITS from '/pages/gallery/images/credits.svg';
import GALLERY from '/pages/gallery/images/photo.svg';
import PLUS from '/pages/gallery/images/plus.svg';
import MINUS from '/pages/gallery/images/minus.svg';

const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.context_menu}>
        {!IsOpen && (
            <>
        <button className={styles.profile_menu_closed} onClick={() => setIsOpen(true)}>
            <PLUS className={styles.svg_image}/>
        </button>
            </>
        )}
        {IsOpen && (
            <>
        <Link href='/profile'>
            <button className={open ? styles.profile_btn : ""}>
                <HOME className={styles.svg_image}/>
            </button>
        </Link>
        <Link href='/profile/myGallery'>
            <button className={open ? styles.profile_btn : ""}>
                <GALLERY className={styles.svg_image}/>
            </button>
        </Link>
        <Link href='/stripe'>
            <button className={open ? styles.profile_btn : ""}>
                <CREDITS className={styles.svg_image}/>
            </button>
        </Link>
        <Link href='/profile/settings'>
            <button className={open ? styles.profile_btn : ""}>
                <SETTINGS className={styles.svg_image}/>
            </button>
        </Link>
        <button className={styles.profile_menu_open} onClick={() => setIsOpen(false)}>                
            <MINUS className={styles.svg_image}/>
        </button>
            </>
        )}
    </div>
  );
};

export default Navbar;