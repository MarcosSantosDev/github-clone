import axios from 'axios';

const baseURL = 'https://api.github.com';

const httpClient = axios.create({
  baseURL,
});

export default httpClient;
