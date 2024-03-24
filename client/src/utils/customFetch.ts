import axios from 'axios';

const devURL = 'http://localhost:5100/api/v1';

export const customFetch = axios.create({
  baseURL: devURL,
});
