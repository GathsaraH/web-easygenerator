import axios from 'axios';
import axiosInstance from './axiosInstance'; // Import the configured axios instance

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

const publicRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const privateRequest = axiosInstance;

export { publicRequest, privateRequest };
