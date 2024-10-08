import axios from 'axios';


const baseURL = "https://api.themoviedb.org/3";
const KEY = "b8999c34735e65003074ef0d1b66827f";

// async function getBoards() {
//     const url = `${baseURL}/trending/movie/day?api_key=${KEY}`
//     const {data} = await axios.get(url);
//     return data.results;
// };

// async 
function getSearchBoard(query) {
    // const url = `${baseURL}/search/board?api_key=${KEY}&query=${query}`
    // const {data} = await axios.get(url);
    // return data.results;
    console.log('succesful', query)
    return 'succesfully requested board';
};

async function getBoardDetails(boardId) {
    const url = `${baseURL}/board/${boardId}?api_key=${KEY}`
    const {data} = await axios.get(url);
    return data;
};

// async function getMovieCast(movieId) {
//     const url = `${baseURL}/movie/${movieId}/credits?api_key=${KEY}`
//     const response = await axios.get(url);
//     return response.data;
// };

// async function getMovieReviews(movieId) {
//     const url = `${baseURL}/movie/${movieId}/reviews?api_key=${KEY}`
//     const response = await axios.get(url);
//     return response.data;
// };

export { getSearchBoard, getBoardDetails}