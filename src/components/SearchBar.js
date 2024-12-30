import { useState } from "react";

// instead of passing in the typical 'props' obj, we can destructure to just the onSubmit
// function SearchBar(props){}

// Can pass in the props obj, or we can destructure that obj into onSubmit.
// prop sent: onSubmit (reference to event handler, handleSubmit, inside parent component)
// prop reveived: onSubmit
function SearchBar( {onSubmit} ) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value)
    onSubmit('cars');

    // NEVER REACH DIRECTLY INTO THE INPUT ELEMENT IN REACT
    // onSubmit(document.querySelector('input'.value))

    // The way React handles form elements (text input, checkboxes, radio buttons etc.) is a little weird
    
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div>
      {/* pressing enter with a form and input creates a submit event */}
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
