import axios from "axios";

// axios.defaults.withCredentials = true
const instance = axios.create({
  baseURL: `http://140.112.106.203:8081/`,
  // withCredentials: true,
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
