import axios from "axios";

import * as https from 'https';
// axios.defaults.withCredentials = true
const instance = axios.create({
  baseURL: `https://140.112.106.82:5000`,
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  }),
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    console.log('success');
    return response
  },
  (error) => {
      console.error(error);
      Promise.reject(error);
    }
);

export default instance;
