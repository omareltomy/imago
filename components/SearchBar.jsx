import React from "react";

const SearchBar = () => {
  const fetchResults = (e) => {
    if (e.key === "Enter") {
      // do an api call
    }
  };
  return (
    <div className="w-[100vw] h-[30vh] bg-[#F4F3F0] flex items-center justify-center">
      <input
        type="text"
        className="w-[95vw] h-[3rem] bg-white border border-1  border-[#48474D] px-[1rem] focus:border-0"
        onKeyDown={fetchResults}
      />
    </div>
  );
};

export default SearchBar;
