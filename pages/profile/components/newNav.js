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
import {signIn, signOut, useSession, getSession} from 'next-auth/react';

const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const { data: session, status} = useSession();
  return (
    <div className={IsOpen ? styles.background_menu_active : styles.background_menu}>
        {session && (
          <>
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
                    <button className={IsOpen ? styles.profile_btn : ""}>
                        <HOME className={styles.svg_image}/>
                    </button>
                </Link>
                <Link href='/profile/myGallery'>
                    <button className={IsOpen ? styles.profile_btn : ""}>
                        <GALLERY className={styles.svg_image}/>
                    </button>
                </Link>
                <Link href='/stripe'>
                    <button className={IsOpen ? styles.profile_btn : ""}>
                        <CREDITS className={styles.svg_image}/>
                    </button>
                </Link>
{/*                 <Link href='/profile/settings'>
                    <button className={IsOpen ? styles.profile_btn : ""}>
                        <SETTINGS className={styles.svg_image}/>
                    </button>
                </Link> */}
                <button className={styles.profile_menu_open} onClick={() => setIsOpen(false)}>                
                    <MINUS className={styles.svg_image}/>
                </button>
                    </>
                )}
            </div>
        </>)}
        {!session && (
          <>
          </>
        )}
    </div>
  );
};

export default Navbar;