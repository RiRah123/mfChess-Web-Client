import axios from 'axios';

//* Create an Axios Instance so we'll only need to change the url once.
const instance = axios.create({
    baseURL: process.env.PORT
})

export default instance;