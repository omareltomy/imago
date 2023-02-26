import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

const RenderImages = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = (searchQuery) => {
    fetch(
      `https://1780bf9a-10a6-4235-8605-39539ff6a76b.mock.pstmn.io/search?query=${searchQuery}`
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data.media))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* Render the search bar component */}
      <SearchBar onSearchSubmit={handleSearchSubmit} />

      {/* Render the list of images in a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-8">
        {searchResults.length > 0
          ? searchResults.map((image) => (
              <Link
                href={`/${image["media-id"]}`}
                key={image["media-id"]}
                passHref
                legacyBehavior
              >
                <a className="block">
                  <Image
                    src={`https://cdn.imago-images.com${image.preview}`}
                    alt="preview Image"
                    width={image.width}
                    height={image.height * (320 / image.width)}
                    className="w-full h-full object-cover"
                  />
                </a>
              </Link>
            ))
          : null}
      </div>
    </>
  );
};

// Export the component
export default RenderImages;
