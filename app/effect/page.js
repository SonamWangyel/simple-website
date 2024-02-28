"use client"

import { useEffect, useState } from "react"

export default function Effect() {
	const [text, setText] = useState("")
	const [numberOfClicks, setNumberOfClicks] = useState(0)

	useEffect(() => {
		console.log("I AM BEING RUN")
	}, [numberOfClicks])

	return (
		<>
			<p className="text-white text-4xl">{text}</p>
			<input
				className="text-black text-4xl"
				type="text"
				onChange={(event) => setText(event.target.value)}
			/>
			<button
				className="border-2 border-white text-white text-2xl px-2"
				onClick={() => setNumberOfClicks(numberOfClicks + 1)}
			>
				I have been clicked {numberOfClicks} times.
			</button>
		</>
	)
}