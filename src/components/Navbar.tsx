import {Link} from "react-router-dom";

export const Navbar = function () {
    return (
        <div className={"mt-5"}>
            <Link className={"mr-2"} to="/votes">Votes</Link>
            <Link className={"mr-2"} to="/categories">Categories</Link>
            <Link to="/error">Error</Link>
        </div>
    )
}