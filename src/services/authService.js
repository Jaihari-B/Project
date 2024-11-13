import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

export const login = async (email, password) => {
  const response = await axios.get(API_URL, {
    params: {
      email,
      password,
    },
  });
  if (response.data.length > 0) {
    return response.data[0];
  }
  throw new Error('Invalid credentials');
};

export const signup = async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};
