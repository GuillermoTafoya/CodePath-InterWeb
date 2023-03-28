import axios from 'axios';

export const retrieveAPI = async (url) => {
    const response = await axios.get(url);
    return response.data;
}