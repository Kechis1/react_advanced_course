import {useParams} from "react-router-dom";
import {JokeFetcher} from "./JokeFetcher";

export const Category = function () {
    const {categoryId} = useParams()

    return (
        <div>
            <h1 className={"my-4 text-red-500 text-6xl font-bold"}>Category: {categoryId}</h1>
            <JokeFetcher>
                {({joke, loading}) => <p>{loading ? 'Loading...' : joke.value}</p>}
            </JokeFetcher>
        </div>
    )
}