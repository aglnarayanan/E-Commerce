// frontend/src/api.js
import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
