"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogoImage from "./LogoImage";

const NavBar = () => {
  let [isMobile, setIsMobile] = useState(false);
  let [hidden, setHidden] = useState(false);
  const navItems = ["Home", "Projects", "About", "Mission", "Vision"];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(() => true);
        setHidden(() => true);
      } else {
        setIsMobile(() => false);
        setHidden(() => false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="px-4 py-2 lg:py-4 w-auto h-auto bg-blue-50 opacity-6">
      <div className="relative container mx-auto flex justify-between items-center h-[12vh] max-h-[100px]">
        <LogoImage />
        {isMobile && (
          <div
            className="cursor-pointer rotate-90 p-2 border-2 rounded-lg border-[#475569]"
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            |||
          </div>
        )}
        {!hidden && (
          <ul
            className={` flex ${
              isMobile
                ? "flex-col absolute top-[100%] right-0 bg-white rounded-md"
                : ""
            } lg:text-3xl  text-blue-900 font-bold`}
          >
            {navItems.map((navItem, index) => {
              return (
                <li className="my-2" key={index}>
                  <Link
                    href={
                      navItem == "Home" ? "/" : `/#${navItem.toLowerCase()}`
                    }
                    className="px-4"
                  >
                    {navItem}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
