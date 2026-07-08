import { FiUpload } from "react-icons/fi";

const FileUpload = ({ id, text, onChange }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="w-full h-13 bg-[#C85A3E] rounded-2xl text-white flex items-center justify-center gap-3 cursor-pointer hover:bg-[#b64d32] transition"
      >
        <FiUpload size={22} />
        <span className="text-lg font-medium">{text}</span>
      </label>

      <input
        id={id}
        type="file"
        className="hidden"
        onChange={onChange}
      />
    </>
  );
};

export default FileUpload;