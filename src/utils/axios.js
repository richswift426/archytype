import axios from 'axios';
//Axios instance

export default axios.create({
  baseURL: 'http://134.209.119.32:5000/api',
});
