import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const Item = () => {
  const [id, setId] = useState(null);
  const [image, setImage] = useState("");
  // Fetch the id from the url and set it to state

  useEffect(() => {
    const path = window.location.pathname;
    const IdString = path.split("/").pop();

    setId(IdString);
    fetch(
      `https://api.unsplash.com/photos/${id}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setImage(data.urls.regular))
      .catch((error) => console.log(error));
  }, [id]);

  const rowStyles =
    "flex justify-between items-center px-[1rem] py-[1.5rem] text-2xl border-b border-[#A3A3A6]";

  // dynamically fetch the image from pexels using this url

  // console.log(image);
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex ">
        <div className="w-[70vw] flex flex-col bg-[#FAF9F8]">
          <div className="flex flex-col">
            <h1 className="text-2xl text-[#141414] font-bold mx-[3rem] mb-[0.5rem] mt-[1rem]">
              Juventus Torino celebrates the championship Db Torino{" "}
            </h1>
            <p className="mx-[3rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla... Show More
            </p>
          </div>
          <div className=" w-[65%] h-[60%] mx-[3rem] my-[1rem] relative">
            <Image
              src={image}
              fill
              alt="Fetched Image"
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-[30vw] h-screen flex flex-col items-center">
          <h1 className="text-2xl mt-[2rem]  ">Choose your License</h1>
          <div className="w-[90%] h-[300px] my-[2rem] bg-[#EAE7E2] border border-1 border-[#A3A3A6]">
            <div className={rowStyles}>
              <h1 className="">Premium RF</h1>
              <h1>
                <span className="text-[15px] text-[#A3A3A6] mr-[10px]">
                  from
                </span>
                99 Credits
              </h1>
            </div>
            <div className={rowStyles}></div>
            <div className={rowStyles}></div>
            <div className="w-full flex justify-around mt-[3rem] ">
              <button className="w-[45%] border border-1 border-black py-[5px]">
                Add to basket
              </button>
              <button className="w-[45%] bg-[#00F5F5] py-[5px]">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
