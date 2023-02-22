import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import RenderImages from "../components/RenderImages";
const Home = () => {
  return (
    <div>
      <Navbar />
      <RenderImages />
    </div>
  );
};

export default Home;
