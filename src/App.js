import './App.css';
import GptFormsProps from "./components/GptFormsProps/GptFormsProps.jsx";
import JokeAPI from "./components/JokeApi/JokeAPI.jsx";
import StarWars from "./components/StarWars/StarWars.jsx";

function App() {
    
  // add a bit of styling - centered divs, display flex etc..

  return (
    // each component below is a different react technical
    <div>
      
      {/* <GptFormsProps /> */}
      {/* <JokeAPI /> */}
      <StarWars />
    </div>
  );
}

export default App;