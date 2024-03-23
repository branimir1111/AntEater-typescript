import axios from 'axios';

const devURL = 'http://localhost:5100/api';

export const customFetch = axios.create({
  baseURL: devURL,
});
