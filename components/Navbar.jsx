import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const linkStyles = "text-[#333]  text-[1.2rem] mr-[2rem]";
  return (
    <div className="h-[3rem] w-[100vw] bg-white flex justify-between items-center py-[3rem] px-[3rem]">
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
            width={30}
            height={30}
            alt="menu Icon"
            className="inline-block ml-[3rem]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
