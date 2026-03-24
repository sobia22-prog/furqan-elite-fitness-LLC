import apiClient from './apiClient';

export interface AssessmentData {
  name: string;
  email: string;
  phoneNumber: string;
  fitnessGoal: string;
  currentWeight: string | number;
  formDetails: {
    age: string | number;
    gender: string;
    height: string | number;
    activityLevel: string;
    injuries: string;
    commitment: string;
    source: string;
  };
}

export const submitAssessment = async (assessmentData: AssessmentData) => {
  const response = await apiClient.post('/leads', assessmentData);
  return response.data;
};
