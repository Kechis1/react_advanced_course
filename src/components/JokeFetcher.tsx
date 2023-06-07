import {useEffect, useState} from "react";
import axios from "axios";

type Props = {
    children: (props: { joke: Joke, loading: boolean }) => React.ReactNode
}

type Joke = {
    value: String,
}


export const JokeFetcher = function ({children}: Props) {
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

    return <>{children({joke, loading})}</>
}