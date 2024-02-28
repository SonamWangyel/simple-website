"use client"

import { useEffect, useState } from "react"

import Image from "next/image"

export default function Home() {
	const [search, setSearch] = useState("bitcoin")
	const [toSearch, setToSearch] = useState("bitcoin")
	const [coin, setCoin] = useState()

	useEffect(() => {
		const findCoin = async () => {
			const res = await fetch(`/api/crypto?search=${toSearch}`)
			const { data } = await res.json()
			if (data) {
				setCoin(data)
			}
		}
		findCoin()
	}, [toSearch, setCoin])

	return (
		<div className="mx-auto mt-80">
			<div className="text-8xl text-green-500 text-center mt-12 text-wrap">
				Search for a Crypto Currency
			</div>
			<div className="w-fit mx-auto">
				<input
					className="text-2xl text-black mt-12 px-2"
					type="text"
					onChange={(event) => setSearch(event.target.value)}
					value={search}
				/>
				<button
					className="text-2xl ml-8 font-bold border-4 px-2 border-white rounded"
					onClick={() => {
						setToSearch(search)
					}}
				>
					Search
				</button>
				{coin && (
					<div className="mt-20 flex flex-col">
						<Image
							className="mx-auto"
							height={100}
							src={coin.iconUrl}
							width={100}
						/>
						<div className="text-4xl text-white text-center mt-4">
							{coin.name}
						</div>
						<div className="text-2xl text-green-500 text-center mt-4">
							${parseFloat(coin.price).toFixed(2)}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}