import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import {signIn, signOut, useSession} from 'next-auth/react'

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Gallery", href: "/gallery" },
  { text: "Services", href: "/services" },
  { text: "Generate", href: "/generate" },
  { text: "Sign In", href: "/api/auth/signin" },
];

const MENU_LIST1 = [
  { text: "Home", href: "/" },
  { text: "Gallery", href: "/gallery" },
  { text: "Services", href: "/services" },
  { text: "Generate", href: "/generate" },
  { text: "Sign Out", href: "/api/auth/signout" },
];

const Navbar = () => {
  const { data: session, status} = useSession();
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={'nav'}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">Atlas Tattoo Development</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={'nav__menu-bar'}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {!session && (
          <>
            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
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
        {session && (
          <>
            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
              {MENU_LIST1.map((menu, idx) => (
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