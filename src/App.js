import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  // Set up state to hold input and palindromes found
  const [input, setInput] = useState("");
  const [palindromes, setPalindromes] = useState([]);

  // Set up a reference to the input field
  const inputRef = useRef();

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  const handleSearch = () => {
    // Split the input into individual words and make them lowercase
    const words = input.toLowerCase().split(" ");

    // Filter the words to find any palindromes
    const foundPalindromes = words.filter((word) => {
      // Reverse each word and compare to the original to check if it's a palindrome
      const reversedWord = word.split("").reverse().join("");
      return word === reversedWord;
    });

    // Update state with the palindromes found
    setPalindromes(foundPalindromes);
  };

  // Render the input field, clear button, search button, and any palindromes found

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-lg shadow-md p-6 w-96">
        <input
          type="text"
          ref={inputRef}
          className="px-2 py-1 ml-1 rounded-lg shadow-md text-gray-800 hover:bg-gray-200 transition-colors duration-300"
          onChange={handleInput}
        />
        <button
          onClick={handleClear}
          className="px-2 py-1 ml-1 rounded-lg shadow-md bg-red-500 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
        >
          Clear
        </button>
        <button
          className="bg-green-500 px-2 py-1 ml-1 rounded-lg shadow-md text-gray-800 hover:bg-gray-200 transition-colors duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
        {palindromes.length > 0 && (
          <div>
            <h3>Palindromes found:</h3>
            <ul>
              {palindromes.map((palindrome, index) => (
                <h3>
                  <li key={index}>{palindrome}</li>
                </h3>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
