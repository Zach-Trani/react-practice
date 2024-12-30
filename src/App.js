import { useState } from 'react';
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);
  
  // Define a callback function in parent component
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  }
  
  return (
    <div>
      {/* Step 2 - Pass the callback function as a prop to the child */}
      {/* onSubmit can be called anything in our event handling technique with a custom component */}
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
