import axios from 'axios';

// use async/await to tell JS to wait for the request to finish before moving on
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID JeEH9vX2rKd9dtPHwR_GZepQ_7pgOZCDbJskNbHXrRI'
        },
        params: {
            query: term
        }
    })
    // console.log(response.data.results)
    return response.data.results;
}

export default searchImages;