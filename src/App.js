import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"; // dependency thats installed from npm i (react emphasizes its just a UI not a framework)

import GptFormsProps from "./components/GptFormsProps/GptFormsProps.jsx";
import JokeAPI from "./components/JokeApi/JokeAPI.jsx";
import StarWars from "./components/StarWars/StarWars.jsx";
import StarWarsMovie from "./components/StarWars/StarWarsMovie.jsx"

function App() {

  // add a bit of styling - centered divs, display flex etc..

  return (
    // each component below is a different react technical
    <div>

      {/* <GptFormsProps /> */}
      {/* <JokeAPI /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StarWars />} />
          <Route path="/movie" element={<StarWarsMovie />}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;