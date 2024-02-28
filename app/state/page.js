"use client"

import { useState } from "react"

export default function State() {
	const [word, setWord] = useState("Hello")
	// var word = "Hello" // Using a regular variable like this won't work for dynamic content
	return (
		<div>
			<p className="text-4xl">{word}</p>
			<input className="text-black text-2xl"
				// onChange={(event) => {
				// 	console.log("BEFORE: " + word)
				// 	word = event.target.value
				// 	console.log("AFTER: " + word)
				// }}
				onChange={(event) => {
					console.log("BEFORE: " + word)
					setWord(event.target.value)
					console.log("AFTER: " + word)
				}}
			/>
		</div>
	)
}   