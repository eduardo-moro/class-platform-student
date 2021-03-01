import axios from 'axios';
import apiConfig from '../../config/api'
const client = axios.create({
baseURL: apiConfig.baseUrl,
  headers: {
    Accept: 'application/json',
  },
});

export default client;

function getUrl(config) {
  if (config.baseURL) {
      return config.url.replace(config.baseURL, '')
  }
  return config.url;
}
