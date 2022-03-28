import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://bens-blog-app.herokuapp.com/api/'
});