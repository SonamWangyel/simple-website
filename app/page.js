import Quote from "./components/quote"

async function getData() {
	const res = await fetch('https://animechan.xyz/api/random')

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
				anime={data.anime}
				character={data.character}
				quote={data.quote}
			/>
		</>
	)
}