import { useLocation } from "react-router-dom";

const StarWarsMovie = () => {
    const { state: film } = useLocation();
    

    return (
        <div>

            {!film && <p>Loading film!</p>}

            {film && film.title}
        </div>
    )
}
export default StarWarsMovie;

// Notes: useLocation hook
// 
// The useLocation object includes:
// {
//     pathname: "/movie",
//     search: "?q=obi-wan", // the query string
//     hash: "#top",         // the anchor/hash
//     state: { title: "A New Hope" }, // custom state passed via navigate
//     key: "abc123"         // a unique ID for the navigation entry
//   }
  