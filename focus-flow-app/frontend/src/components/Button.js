function Button({ text, onClick }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
