import SearchBar from './components/SearchBar'

function App() {
  // Step 1 - Define a callback function in parent component
  const handleSubmit = (term) => {
    console.log('Do a search with', term)
    // searchImages(term);
  }
  
  return (
    <div>
      {/* Step 2 - Pass the callback function as a prop to the child */}
      {/* onSubmit can be called anything in our event handling technique with a custom component */}
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
