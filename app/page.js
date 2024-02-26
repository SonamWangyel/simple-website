const BASE_URL = "https://api.coinranking.com/v2/coin/Qwsogvtv82FCd"
const API_KEY = process.env.API_KEY


async function getData() {
	const res = await fetch(BASE_URL, {
		headers : {
			'Content-Type': 'application/json',
    	'x-access-token': API_KEY,
		}
	})

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
		</>
	)
}