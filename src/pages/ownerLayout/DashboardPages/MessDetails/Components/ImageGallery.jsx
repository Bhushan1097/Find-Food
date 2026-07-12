import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const defaultImages = [
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
];

const ImageGallery = () => {
  const [images, setImages] = useState(defaultImages);
  const [current, setCurrent] = useState(0);

  const fileRef = useRef(null);
  const cameraRef = useRef(null);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    const previews = files.map((file) =>
      URL.createObjectURL(file)
    );

    setImages(previews);
    setCurrent(0);
  };

  return (
    <div className="w-full flex flex-col">

      {/* Slider */}

      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-300">

        <img
          src={images[current]}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center gap-4">

          <button
            onClick={() => fileRef.current.click()}
            className="bg-[#1479FF] text-white px-8 py-3 rounded-md w-40"
          >
            Browse File
          </button>

          <button
            onClick={() => cameraRef.current.click()}
            className="bg-white px-8 py-3 rounded-md w-40"
          >
            Take Photo
          </button>

          <input
            ref={fileRef}
            type="file"
            hidden
            multiple
            accept="image/*"
            onChange={handleUpload}
          />

          <input
            ref={cameraRef}
            type="file"
            hidden
            capture="environment"
            accept="image/*"
            onChange={handleUpload}
          />
        </div>

        {/* Left */}

        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center"
        >
          <FaArrowLeft />
        </button>

        {/* Right */}

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center"
        >
          <FaArrowRight />
        </button>

        {/* Dots */}

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">

          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                current === index
                  ? "bg-white"
                  : "bg-gray-400"
              }`}
            />
          ))}

        </div>

      </div>

      {/* Bottom Button */}

      <div className="flex justify-end mt-6">
        <button className="bg-[#C85A3E] hover:bg-[#b84f33] text-white px-8 py-2 rounded-lg">
          Edit
        </button>
      </div>

    </div>
  );
};

export default ImageGallery;