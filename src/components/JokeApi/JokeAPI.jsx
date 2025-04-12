import { useState, useEffect } from "react";
import axios from "axios";

const JokeAPI = () => {
    
    const [joke, setJoke] = useState();

    useEffect(() => {
        getJoke();
    },[])

    const getJoke = async () => {
        setJoke('')
        
        const res = await axios.get("https://v2.jokeapi.dev/joke/Any");
        console.log(res.data)
        setJoke(res.data)
    }
    
    // since react once before useEffect has fetched anything, initially: joke ==1= undefined. ? is shorthand for:
    // (joke == null) ? undefined : joke.setup


    return (
        <div>
            <button onClick={() => getJoke()}>Get a new Joke</button>
            <div>{joke?.setup}</div>
            <div>{joke?.delivery}</div>
        </div>
    )
}
export default JokeAPI;