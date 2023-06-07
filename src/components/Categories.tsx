import {useEffect, useState} from "react";
import {Outlet} from "react-router";

export const Categories = function () {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/categories")
            .then(response => response.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    return (
        <div>
            <h1 className={"mt-4 text-red-500 text-6xl font-bold"}>Categories</h1>
            <ul className={"mt-4"}>
                {categories.map((category, index) => (
                    <li key={index}>
                        <a href={`/categories/${category}`}>{category}</a>
                    </li>
                ))}
            </ul>

            <Outlet />
        </div>
    )
}