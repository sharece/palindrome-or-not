import "./App.css";
import React, { useState, useRef } from "react";

function isPalindrome(input) {
  const charCount = new Map();
  // create an empty map to store character count
  for (let char of input) {
    // iterate over each character
    if (charCount.has(char)) {
      // if the character already exists in the charCount map
      charCount.set(char, charCount.get(char) + 1);
      // increment its count by 1
    } else {
      // if the character doesnt exist in the charCount map
      charCount.set(char, 1);
      // set its count to 1
    }
  }

  let oddCharCount = 0;

  for (let count of charCount.values()) {
    // iterate over the values of the charCount map
    if (count % 2 !== 0) {
      //if the count of a character is not divisible by 2
      oddCharCount++;
      // increment oddCharCount by 1
    }
  }

  return oddCharCount <= 1;
  // check if oddCharCount is less than or equal to 1
  // return true if so, indicating a palindrome or palindrome when rearranged
  // return false if it's not indicating the input is not and cannot be a palindrome
}

function App() {
  const [input, setInput] = useState("");
  const [palindromes, setPalindromes] = useState([]);

  const inputRef = useRef();

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  const handleSearch = () => {
    const words = input.split(" ");
    // split the input into individual words

    const foundPalindromes = words.filter((word) => isPalindrome(word));
    // filter the words to find any palindromes

    setPalindromes(foundPalindromes);
    // update state with the palindromes found
  };
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
            <h3>Palindromes detected:</h3>
            <ul>
              {palindromes.map((palindrome, index) => (
                <li key={index}>{palindrome}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
