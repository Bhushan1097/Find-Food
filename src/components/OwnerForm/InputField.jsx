const InputField = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`h-12 border rounded-xl px-4 outline-none w-full ${className}`}
    />
  );
};

export default InputField;
