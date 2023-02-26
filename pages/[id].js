import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const Item = () => {
  const [id, setId] = useState(null);
  const [image, setImage] = useState("");
  const [data, setData] = useState({});
  // Fetch the id from the url and set it to state

  useEffect(() => {
    const path = window.location.pathname;
    const IdString = path.split("/").pop();

    setId(IdString);
    fetch(
      `https://1780bf9a-10a6-4235-8605-39539ff6a76b.mock.pstmn.io/media/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const rowStyles =
    "flex justify-between items-center px-[1rem] py-[1.5rem] text-2xl border-b border-[#A3A3A6]";

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex ">
        <div className="w-[70vw] flex flex-col bg-[#FAF9F8]">
          <div className="flex flex-col">
            <h1 className="text-2xl text-[#141414] font-bold mx-[3rem] mb-[0.5rem] mt-[1rem]">
              {data.title}
            </h1>
            <p className="mx-[3rem]">{data.caption}</p>
          </div>
          <div className=" w-[65%] h-[60%] mx-[3rem] my-[1rem] relative">
            <Image
              src={`https://cdn.imago-images.com/bild/st/${id}/w.jpg`}
              fill
              alt="Fetched Image"
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-[30vw] h-screen flex flex-col items-center">
          <h1 className="text-2xl mt-[2rem]  ">Choose your License</h1>
          <div className="w-[90%] h-[300px] mt-[2rem] bg-[#EAE7E2] border border-1 border-[#A3A3A6]">
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
          </div>
          <div className="w-full flex justify-between px-[5%] my-[2rem]">
            <button className="w-[45%] border border-1 border-black py-[5px]">
              Add to basket
            </button>
            <button className="w-[45%] bg-[#00F5F5] py-[5px]">Buy now</button>
          </div>
          <div>
            <dl className="flex flex-wrap justify-between uppercase text-sm px-[5%] my-2">
              <dt className="w-1/3 font-bold">CREDIT:</dt>
              <dd className="w-2/3 mb-2">{data.creator}</dd>
              <dt className="w-1/3 font-bold">Image ID</dt>
              <dd className="w-2/3 mb-2">{data.mediaid}</dd>
              <dt className="w-1/3 font-bold">Max Size</dt>
              <dd className="w-2/3 mb-2">{`${data.width}x${data.height} Pixels`}</dd>
              <dt className="w-1/3 font-bold">Date</dt>
              <dd className="w-2/3 mb-2">{data.creationdate}</dd>
              <dt className="w-1/3 font-bold">info</dt>
              <dd className="w-2/3">{data.caption}</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
