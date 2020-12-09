import axios from 'axios';

const api = axios.create({
    baseURL: "https://rs-backend-6.herokuapp.com"
});

export default api;