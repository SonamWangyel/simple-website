const { API_KEY } = process.env
const BASE_URL = "https://api.coinranking.com/v2"

export async function GET(request) {
	const { searchParams } = new URL(request.url)
	const search = searchParams.get('search')
	const res = await fetch(`${BASE_URL}/coins?search=${search}`, {
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': API_KEY
		}
	})
	const crypto = await res.json()
	console.log(crypto)
	return Response.json({ data: crypto?.data?.coins[0] })
}