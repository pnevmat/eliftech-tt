import axios from 'axios';
import { BASE_URL } from './baseUrl';

axios.defaults.baseURL = BASE_URL;

const getProducts = async () => {
  const response = await axios.get('products/');
  return response.data;
};

export default getProducts;
