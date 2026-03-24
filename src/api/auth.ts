import apiClient from './apiClient';

export const loginUser = async (credentials: Record<string, string>) => {
  const response = await apiClient.post('/auth/login', credentials);
  return response.data;
};

export const registerUser = async (userData: Record<string, any>) => {
  const response = await apiClient.post('/auth/register', userData);
  return response.data;
};

export const getMe = async () => {
  // Token is automatically added by the interceptor
  const response = await apiClient.get('/auth/me');
  return response.data;
};
