import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "/public/Icons/menu.svg";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default Home;
