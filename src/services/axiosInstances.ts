import axios from 'axios';
import axiosInstance from './axiosInstance';
import { API_BASE_URL } from '../util/constants';


const publicRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const privateRequest = axiosInstance;

export { publicRequest, privateRequest };
