import { useState } from "react";
import Image from "next/image";

const SearchBar = ({ onSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const fetchResults = (event) => {
    if (event.key === "Enter") {
      onSearchSubmit(searchQuery);
      handleSearchSubmit(event);
    }
  };
  const clearInput = (event) => {
    event.preventDefault();
    setSearchQuery("");
  };
  return (
    <div className="w-[100vw] h-[30vh] bg-[#F4F3F0] flex items-center justify-center">
      <form>
        <div className="relative">
          <input
            type="text"
            className="w-[95vw] h-[3rem] bg-white border border-1  border-[#48474D] px-[1rem] focus:outline-none text-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={fetchResults}
            placeholder="Search for images"
          />
          <div className="absolute inset-y-0 right-5 flex items-center pl-3">
            <button onClick={clearInput}>
              <Image
                src="/icons/x.svg"
                width={50}
                height={50}
                alt="menu Icon"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
