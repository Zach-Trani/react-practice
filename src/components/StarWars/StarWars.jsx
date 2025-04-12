import axios from "axios";
import { useState, useEffect } from "react";

const StarWars = () => {

    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getFilms = async () => {
            try {
                setLoading(true);
                const res = await axios.get("https://swapi.py4e.com/api/films");
                console.log(res.data.results);
                setFilms(res.data.results);
            } catch (error) {
                setError(error);
                setLoading(error);
            } finally {
                setLoading(false); // set in separate clause after successful try
            }

        }

        getFilms();
    }, []);    


    // returning loading res outside of return would overwrite the entire return
    // better to conditionally render it within the return (more maintainable & scaleable)

    return (
        <div>

            {loading && <div>loading..</div>}

            {error && <div>Error: {error.message}</div>}

            {!loading && !error && films?.map((film) => (
                <div>{film.title}</div>
            ))}
        </div>
    )
}

export default StarWars;