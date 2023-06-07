import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

type Props = {
    children: (props: { joke: Joke, loading: boolean }) => React.ReactNode
}

type Joke = {
    value: String,
}


export const JokeFetcher = function ({children}: Props) {
    const [loading, setLoading] = useState<boolean>(false)
    const [joke, setJoke] = useState<Joke>({value:""})
    const {categoryId} = useParams()

    const fetchJoke = function () {
        setLoading(true)
        let url = "https://api.chucknorris.io/jokes/random";
        if (categoryId) {
            url += `?category=${categoryId}`;
        }
        console.log(url)
        axios.get(url)
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