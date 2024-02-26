export default function Quote({ setup , punchline }) {
	return (
		<>
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					{setup}
				</h1>
				<p className="text-3xl mt-6 text-lg leading-8 text-white ">
					- {punchline}
				</p>
			</div>
		</>
	)
}