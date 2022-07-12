import axios from 'axios';
import { BASE_URL } from './baseUrl';

axios.defaults.baseURL = BASE_URL;

const getProducts = async user => {
  const response = await axios.post('users/', user);
  return response.data;
};

export default getProducts;
