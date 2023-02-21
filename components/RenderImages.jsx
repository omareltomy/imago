import { useState, useEffect } from "react";
import Image from "next/image";

const RenderImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://api.pexels.com/v1/curated?per_page=16", {
      headers: {
        Authorization:
          "563492ad6f91700001000001edf5a1db16514444a88141411e5fcaba",
      },
    })
      .then((response) => response.json())
      .then((data) => setImages(data.photos))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 px-[1rem] py-[2rem]">
      {images.map((image) => (
        <div key={image.id}>
          <Image
            src={image.src.large}
            alt={image.photographer}
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </div>
  );
};
export default RenderImages;
