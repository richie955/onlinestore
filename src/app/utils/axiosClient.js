import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  timeout: 5000,                      // Timeout for requests
  headers: {
    'Content-Type': 'application/json', // Default headers
  },
});

// Optional: Add interceptors for request/response handling
axiosClient.interceptors.request.use(
  (config) => {
    // Modify config before request is sent (e.g., add authentication token)
    const token = localStorage.getItem('token'); // Example: Fetch token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    // Any response transformations can go here
    return response;
  },
  (error) => {
    // Handle response error
    if (error.response?.status === 401) {
      console.error('Unauthorized access. Redirecting to login...');
      // Handle unauthorized errors (e.g., redirect to login)
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
