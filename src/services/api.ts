import axios from 'axios';


const isDevelopment = process.env.NODE_ENV !== 'production';
const baseURL = isDevelopment ? 'http://localhost:3333' : 'https://my-json-server.typicode.com/joseribeiroejrs/movie-list-ignite'

export const api = axios.create({
  baseURL,
});