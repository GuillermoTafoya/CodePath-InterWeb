import {retrieveAPI} from './retrieveAPI';

const API_KEY = '5TjjiFDLvENUIojGQBP4NfY7Yps1jacGKIOHUi2j'; // <-- Your API key here

export const getNasaData = async () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`;
    return await retrieveAPI(url);
}
