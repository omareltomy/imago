// Import necessary dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

// Define the component
const RenderImages = () => {
  // Define state for the list of images
  const [images, setImages] = useState([]);

  // Use the `useEffect` hook to fetch a random set of curated images when the component mounts
  useEffect(() => {
    // Choose a random page number between 1 and 50
    const randomPage = Math.floor(Math.random() * 50) + 1;

    // Fetch the list of curated images from the Unsplash API
    fetch(
      `https://api.unsplash.com/photos/?per_page=9&page=${randomPage}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.log(error));
  }, []);

  // Define a function to handle search queries
  // Define a function to handle search queries
  const handleSearchSubmit = (searchQuery) => {
    // Fetch a list of images that match the search query from the Unsplash API
    fetch(
      `https://api.unsplash.com/search/photos/?query=${searchQuery}&per_page=9&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setImages(data.results))
      .catch((error) => console.log(error));
  };

  // Render the component
  return (
    <>
      {/* Render the search bar component */}
      <SearchBar onSearchSubmit={handleSearchSubmit} />

      {/* Render the list of images in a responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-8">
        {images.length > 0
          ? images.map((image) => (
              <Link
                href={`/${image.id}`}
                key={image.id}
                passHref
                legacyBehavior
              >
                <a className="block">
                  <Image
                    src={image.urls.regular}
                    alt={image.alt_description}
                    width={320}
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
