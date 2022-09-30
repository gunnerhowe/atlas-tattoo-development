import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../profile/components/Logo";
import NavItem from "../../profile/components/NavItem";
import {signIn, signOut, useSession} from 'next-auth/react';
import styles from "../../profile/components/Navbar.module.css";

const MENU_LIST = [
  { text: "Overview", href: "../../profile/overview" },
  { text: "My Gallery", href: "../../profile/myGallery" },
  { text: "Credits", href: "/stripe" },
  { text: "Settings", href: "../../profile/settings" },
];

const Navbar = () => {
  const { data: session, status} = useSession();
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header casllName={styles.main_header}>
      <nav className={styles.nav}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menu_bar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {session && (
          <>
            <div className={`${navActive ? "active" : ""} nav__menu_list`}>
              {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              ))}
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;