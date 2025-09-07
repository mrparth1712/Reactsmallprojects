import React, { useState, useCallback, useEffect, useRef } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [CharacterData, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null); // ✅ reference for input

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (CharacterData) str += "!@#$%^&*-++[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, CharacterData]);

  // ✅ Auto-generate password whenever settings change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  // ✅ Copy handler
  const copyToClipboard = () => {
    if (passwordRef.current) {
      passwordRef.current.select(); // select text
      document.execCommand("copy"); // legacy but works everywhere
      // Modern alternative:
      // navigator.clipboard.writeText(password);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-4xl text-center mb-4">Password Generator</h1>

      {/* Password display + copy */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          ref={passwordRef} // ✅ attach ref
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
        />
        <button
          onClick={copyToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 text-sm mb-4">
        {/* Length slider */}
        <label className="flex items-center gap-x-2">
          <span>Password Length: </span>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer"
          />
          <span className="font-bold">{length}</span>
        </label>

        {/* Include numbers */}
        <label className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber((prev) => !prev)}
          />
          Include Numbers
        </label>

        {/* Include special characters */}
        <label className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={CharacterData}
            onChange={() => setChar((prev) => !prev)}
          />
          Include Special Characters
        </label>
      </div>

      {/* Manual Generate button */}
      <button
        onClick={passwordGenerator}
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        Generate Password
      </button>
    </div>
  );
}
