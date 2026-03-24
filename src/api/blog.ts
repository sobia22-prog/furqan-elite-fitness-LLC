import apiClient from './apiClient';

export interface Post {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  featuredImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  createdAt: string;
  views: number;
}

export const fetchAllPosts = async () => {
  const response = await apiClient.get('/posts');
  return response.data;
};

export const fetchPostBySlug = async (slug: string) => {
  const response = await apiClient.get(`/posts/${slug}`);
  return response.data;
};

export const createPost = async (postData: Record<string, any>) => {
  const response = await apiClient.post('/posts', postData);
  return response.data;
};
