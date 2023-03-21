import {retrieveAPI} from './retrieveAPI';

const API_KEY = "live_ieUU5h5tSW5gWWAtXkpgu929nnOO0mPmGFoRqiKQxhgJAOqk2OqpLIR7r3V4QSTm"; // <-- Your API key here

export const getCatData = async () => {
    const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&has_breeds=1`;
    return await retrieveAPI(url);
}