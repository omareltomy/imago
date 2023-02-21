import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default Home;
