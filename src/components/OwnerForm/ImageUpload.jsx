import { useRef, useState } from "react";

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
  };

  return (
    <>
      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      <div
        onClick={() => fileInputRef.current.click()}
        className="border-2 border-dashed border-gray-300 rounded-xl h-36 flex items-center justify-center cursor-pointer"
      >
        Drag & Drop or <span className="underline ml-1">Choose file</span>
      </div>
    </>
  );
};

export default ImageUpload;