import Quote from "./components/jokes"

async function getData() {
	const res = await fetch('https://official-joke-api.appspot.com/jokes/random')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home() {
	const data = await getData()
	console.log(data)
	return (
		<>
			<Quote
				setup={data.setup}
				punchline={data.punchline}
			/>
		</>
	)
}