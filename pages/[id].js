import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import Checkbox from "../components/Checkbox";

const Item = () => {
  const [id, setId] = useState(null);
  const [data, setData] = useState({});
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const toggleCheckbox1 = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(false);
  };

  const toggleCheckbox2 = () => {
    setIsChecked2(!isChecked2);
    setIsChecked1(false);
  };

  // Fetch the id from the url and set it to state

  useEffect(() => {
    const path = window.location.pathname;
    const IdString = path.split("/").pop();

    setId(IdString);
    fetch(
      `https://1780bf9a-10a6-4235-8605-39539ff6a76b.mock.pstmn.io/media/${IdString}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  function toggleCheckbox() {
    setIsChecked(!isChecked);
  }

  const rowStyles =
    "flex justify-between items-center px-[1rem] py-[1.5rem]  border-b border-[#A3A3A6]";

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex ">
        <div className="w-[70vw] flex flex-col bg-[#FAF9F8] h-max">
          <div className="flex flex-col">
            <h1 className="text-2xl text-[#141414] font-bold mx-[3rem] mb-[0.5rem] mt-[1rem]">
              {data.title}
            </h1>
            <p className="mx-[3rem]">{data.caption}</p>
          </div>
          <div className=" w-[65%] h-max mx-[3rem] my-[1rem] relative">
            {data.width && data.height && (
              <Image
                src={`https://cdn.imago-images.com/bild/st/${id}/w.jpg`}
                width={data.width}
                height={data.height}
                alt="Fetched Image"
                className="object-contain"
              />
            )}
          </div>
        </div>
        <div className="w-[30vw] h-screen flex flex-col items-center">
          {data.title ? (
            <>
              <h1 className="text-2xl mt-[2rem]  ">Choose your License</h1>

              <div className="w-[90%] h-[300px] mt-[2rem] bg-[#EAE7E2] border border-1 border-[#A3A3A6]">
                <div className={rowStyles}>
                  <h1 className="text-2xl">Premium RF</h1>
                  <h1 className="text-2xl">
                    <span className="text-[15px] text-[#A3A3A6] mr-[10px]">
                      from
                    </span>
                    99 Credits
                  </h1>
                </div>
                <div
                  className={rowStyles + "border border-b-1 border-[#A3A3A6]"}
                >
                  {/* <div className="flex w-max"> */}
                  <div className="inline-flex items-center">
                    <Checkbox checked={isChecked1} onChange={toggleCheckbox1} />
                    <h1 className="text-lg mx-2">
                      {data.usagelicences[0].name}
                    </h1>
                  </div>

                  <h1>
                    {String(data.usagelicences[0].price).substring(0, 2) +
                      " USD"}
                  </h1>
                </div>
                <div className={rowStyles + "text-[10px]"}>
                  <div className="inline-flex items-center">
                    <Checkbox checked={isChecked2} onChange={toggleCheckbox2} />

                    <h1 className="text-lg mx-2">
                      {data.usagelicences[0].name}
                    </h1>
                  </div>
                  <h1>
                    {String(data.usagelicences[1].price).substring(0, 2) +
                      " USD"}
                  </h1>
                </div>
              </div>
              <div className="w-full flex justify-between px-[5%] my-[2rem]">
                <button className="w-[45%] border border-1 border-black py-[5px]">
                  Add to basket
                </button>
                <button className="w-[45%] bg-[#00F5F5] py-[5px]">
                  Buy now
                </button>
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
                  <dd className="w-2/3 mb-2">
                    {data.creationdate?.substring(0, 10)}
                  </dd>
                  <dt className="w-1/3 font-bold">info</dt>
                  <dd className="w-2/3">{data.caption}</dd>
                </dl>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Item;
