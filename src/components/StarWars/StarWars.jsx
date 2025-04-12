import axios from "axios";
import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router"; // dependency thats installed from npm i

const StarWars = () => {

    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const getFilms = async () => {
            try {
                setLoading(true);
                const res = await axios.get("https://swapi.py4e.com/api/films");
                console.log(res.data.results[0].characters);
                setFilms(res.data.results);
            } catch (error) {
                setError(error);
                setLoading(error);
            } finally {
                setLoading(false); // loading set to false here to prevent error clause from catching a loading state of false21
            }

        }

        getFilms();
    }, []);    

    const handleNavigate = (film) => {
        navigate('/movie', { state: film } )
    }


    // returning loading res outside of return would overwrite the entire return
    // better to conditionally render it within the return (more maintainable & scaleable)

    return (
        // in-line styling quickly for interviews
        <div style={{display:"flex", flexDirection: "column"}}>

            {loading && <div>loading..</div>}

            {error && <div>Error: {error.message}</div>}

            {!loading && !error && films?.map((film) => (
                <button onClick={() => handleNavigate(film)}>{film.title}</button>
            ))}
        </div>
    )
}

export default StarWars;


// Notes: say we wanted to lift a selectedMovie state up to App.js

// Here’s what’s happening under the hood:

//     Your <App /> component is the top-level React component that's always mounted.

//     When you switch routes using <Routes> and <Route>, only the components inside the element prop get swapped in and out — not the whole <App />.

// So when you:

//     Select a film in <StarWars />, and call setSelectedFilm(film) in <App />, and

//     Navigate to /movie, replacing <StarWars /> with <StarWarsMovie />...

// Your <App /> component is still mounted, which means:

//     selectedFilm is still in memory.

//     You can access it again from anywhere inside that component tree.

//     And yes — if you hit the browser's back arrow to return to /, the film is still selected.