import apiClient from './apiClient';

export const submitLeadInquiry = async (leadData: {
  name: string;
  email: string;
  phoneNumber?: string;
  fitnessGoal: string;
  currentWeight?: string | number;
  formDetails?: Record<string, any>;
}) => {
  const response = await apiClient.post('/leads', leadData);
  return response.data;
};

export const fetchAllLeads = async () => {
  // Token is automatically added by the interceptor
  const response = await apiClient.get('/leads');
  return response.data;
};
