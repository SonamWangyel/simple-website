export default function Quote({ anime, character, quote }) {
	return (
		<>
			<div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					{quote}
				</h1>
				<p className="mt-6 text-lg leading-8 text-white">
					- {character} from {anime}
				</p>
			</div>
		</>
	)
}