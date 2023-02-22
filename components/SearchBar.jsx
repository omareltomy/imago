import Image from "next/image";
import React from "react";

const SearchBar = () => {
  const fetchResults = (e) => {
    if (e.key === "Enter") {
      // do an api call
    }
  };
  return (
    <div className="w-[100vw] h-[30vh] bg-[#F4F3F0] flex items-center justify-center">
      <div className="relative">
        <input
          type="text"
          className="w-[95vw] h-[3rem] bg-white border border-1  border-[#48474D] px-[1rem] focus:outline-none text-xl"
          onKeyDown={fetchResults}
        />
        <div className="absolute inset-y-0 right-5 flex items-center pl-3">
          <Image src="/icons/x.svg" width={50} height={50} alt="menu Icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
