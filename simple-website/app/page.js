"use client"
import { useState } from "react"
import Link from "next/link"
export default function Home() {
  const [quotes, setQuotes] = useState([])
  const [text, setText] = useState("Type something...")
  const [clickCount, setClickCount] = useState(0)
  const handleSaveText = () => {
    const newQuotes = quotes.concat([text])
    setQuotes(newQuotes)
    setText("")
    setClickCount((prevCount) => prevCount + 1)
  }

  const handleClearText = () => {
    setQuotes([])
    setText("Hi")
  };

  const handleResetClickCounter = () => {
    setClickCount(0);
  };

  const getClickCounterColor = () => {
    if (clickCount < 5) {
      return "text-green-500";
    } else if (clickCount < 10) {
      return "text-yellow-500"
    } else {
      return "text-red-500"
    }
  };

  return (
    <div className="bg-cover bg-my-bg-image w-full h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <div className="text-4xl font-bold mb-4">
          {quotes.map((quote, index) => (
            <p key={index} className="mb-2">
              {quote}
            </p>
          ))}
        </div>
        <Link href={'/crypto'} className="text-2xl text-white border border-gray-300 p-2 mr-2 rounded bg-white bg-opacity-50 font-bold" >
          Crypto Currency value
        </Link>
      
        <div className="text-8xl text-rose-500 mb-8 animate-pulse">
          {text}
        </div>
        <div className="flex items-center justify-center">
		<input
  			className="text-2xl text-white border border-gray-300 p-2 mr-2 rounded bg-white bg-opacity-50 font-bold"
			type="text"
			value={text}
			onChange={(event) => setText(event.target.value)}
		/>

          <button
            className="text-2xl font-bold bg-green-500 text-white p-2 rounded hover:bg-sky-700"
            onClick={handleSaveText}
          >
            Save Text
          </button>
          <button
            className="text-2xl font-bold bg-red-500 text-white p-2 ml-2 rounded hover:bg-fuchsia-600 "
            onClick={handleClearText}
          >
            Clear Text
          </button>
        </div>
        <div className={`text-2xl mt-4 ${getClickCounterColor()}`}>
          Click Count: {clickCount}
        </div>
        <button
          className="text-2xl font-bold bg-blue-500 text-white p-2 mt-2 rounded"
          onClick={handleResetClickCounter}
        >
          Reset Click Counter
        </button>
      </div>
    </div>
  );
}
