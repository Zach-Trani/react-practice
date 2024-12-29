// instead of passing in the typical 'props' obj, we can destructure to just the onSubmit
// function SearchBar(props){}

// Can pass in the props obj, or we can destructure that obj into onSubmit.
// prop sent: onSubmit
// prop reveived: onSubmit
function SearchBar( {onSubmit} ) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value)
    onSubmit('cars');

  }

  return (
    <div>
      {/* pressing enter with a form and input creates a submit event */}
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  );
}

export default SearchBar;
