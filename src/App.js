import SearchBar from './components/SearchBar'

function App() {
  // receive some term from the child component
  const handleSubmit = (term) => {
    console.log('Do a search with', term)
    // searchImages(term);
  }
  
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
