import axios from 'axios';
import { API_KEY, API_URL } from '../config';

export const instance = axios.create({ 
  baseURL: API_URL,
  headers: {
    'X-API-KEY': API_KEY
  }
})