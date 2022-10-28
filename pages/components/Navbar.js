import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import {signIn, signOut, useSession} from 'next-auth/react';
import CHECK from '../gallery/images/check.svg';


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
  { text: "Profile", href: "/profile" },
  { text: "Sign Out", href: "/api/auth/signout" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const { data: session, status} = useSession();
  const [nav_cross1, setnav_cross1] = useState(null);
  const [nav_cross2, setnav_cross2] = useState(null);
  const [nav_cross3, setnav_cross3] = useState(null);

  return (
    <header>
      <nav className={'nav'}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">Atlas Tattoo Development</h1>
          </a>
        </Link>
        <div
          onClick={() => {setNavActive(!navActive), setnav_cross1(!nav_cross1), setnav_cross2(!nav_cross2), setnav_cross3(!nav_cross3)}}
          className={'nav__menu-bar'}
        >
          <div className={`${nav_cross1 ? "active" : ""} nav_cross_style1`}></div>
          <div className={`${nav_cross2 ? "active" : ""} nav_cross_style2`}></div>
          <div className={`${nav_cross3 ? "active" : ""} nav_cross_style3`}></div>
        </div>
        {!session && (
          <>
            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                  setnav_cross1(false);
                  setnav_cross2(false);
                  setnav_cross3(false);
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
                    setnav_cross1(false);
                    setnav_cross2(false);
                    setnav_cross3(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              ))}
              <a className='menu_session_email'><CHECK className='menu_check'></CHECK> {session.user.name}</a>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;