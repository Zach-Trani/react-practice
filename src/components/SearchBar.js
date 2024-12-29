// instead of passing in the typical 'props' obj, we can destructure to just the onSubmit
// function SearchBar(props){}

// Can pass in the props obj, or we can destructure that obj into onSubmit.
// prop sent: onSubmit
// prop reveived: onSubmit
function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit('cars')
  }

  return (
    <div>
      <input />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default SearchBar;
