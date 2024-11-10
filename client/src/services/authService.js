import api from './api';

const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('userToken');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default { login, logout, getCurrentUser };

