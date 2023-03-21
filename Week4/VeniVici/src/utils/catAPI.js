import {retrieveAPI} from './retrieveAPI';

const API_KEY = ""; // <-- Your API key here

export const getCatData = async () => {
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&has_breeds=1`;
    return await retrieveAPI(url);
}