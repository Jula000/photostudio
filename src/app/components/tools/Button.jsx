const Button = ({ text, className }) => (
  <button
    className={`bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 ${className}`}
  >
    {text}
  </button>
);

export default Button;