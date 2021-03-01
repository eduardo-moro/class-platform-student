import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import apiConfig from '../../config/api'


const getAccessToken = async () => {

  try {
    const retrievedItem = await AsyncStorage.getItem('accessToken');
    if (retrievedItem !== null) {
      const item = JSON.parse(retrievedItem);
      return `Bearer ${item.token}`;
    }
    return null;
  } catch (error) {
  }
};

  const loginClient = axios.create({
    baseURL: apiConfig.baseurl,
    headers: {},
    data: {}
  });

  const getLoginClient = async () => {
    loginClient.defaults.headers.common.Authorization = await getAccessToken();
    return loginClient;
  };

  export default getLoginClient;

  function getUrl(config) {
    if (config.baseURL) {
      return config.url.replace(config.baseURL, '');
    }
  return config.url;
}


loginClient.interceptors.request.use(
  config => {
    console.log(config.method.toUpperCase()  +"-"+ getUrl(config));
  return config;
});
