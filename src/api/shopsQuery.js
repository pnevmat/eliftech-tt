import axios from 'axios';
import { BASE_URL } from './baseUrl';

axios.defaults.baseURL = BASE_URL;

const getShops = async () => {
  const response = await axios.get('shops/');
  return response.data;
};

export default getShops;
