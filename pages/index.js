import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "/public/Icons/menu.svg";
const Home = () => {
  const Navbar = () => {
    const linkStyles = "text-[#333]  text-[1.2rem] mr-[2rem]";
    return (
      <div className="h-[3rem] w-[100vw] bg-white flex justify-between items-center py-[3rem] px-[2rem]">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={100} height={50} />
        </Link>
        <div>
          <Link href="/#" className={linkStyles}>
            Editorial
          </Link>
          <Link href="/#" className={linkStyles}>
            Sports
          </Link>
          <Link href="/#" className={linkStyles}>
            Creative
          </Link>
          <Link href="/#" className={linkStyles}>
            Archive
          </Link>
          <Link href="/#" legacyBehavior>
            <a className="bg-[#141414] py-[10px] px-[15px] text-white text-xl">
              Account
            </a>
          </Link>
          <Link href="/#">
            <Image
              src="/icons/menu.svg"
              width={16}
              height={16}
              alt="menu Icon"
            />
          </Link>
        </div>
      </div>
    );
  };
  const SearchBar = () => {
    return (
      <div className="w-[100vw]">
        <input
          type="text"
          className="w-[95vw] h-[3rem] bg-white border border-1  border-[#48474D] mx-auto focus:border-0"
        />
      </div>
    );
  };
  return (
    <div className="w-full">
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default Home;
