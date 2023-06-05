import axios from "axios";
import {useEffect, useState} from "react";

type Joke = {
	value: String,
}

export function ChuckNorrisJoke() {
	const [loading, setLoading] = useState<boolean>(false)
	const [joke, setJoke] = useState<Joke>({value:""})

	const fetchJoke = function () {
		setLoading(true)
		axios.get("https://api.chucknorris.io/jokes/random")
			.then(response => {
				setJoke(response.data)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	useEffect(() => {
		fetchJoke()
	}, [])

	return (
		<div className={"mt-4"}>
			<h1 className={"text-red-500 text-6xl font-bold"}>Jokes</h1>
			<h2 className={"text-2xl py-5 px-2"}>{ joke.value }</h2>
			<button className={"bg-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed hover:bg-blue-400 rounded-md text-white font-bold px-5 py-2"} type={"button"} onClick={fetchJoke} disabled={loading}>Load another</button>
		</div>
	)
}