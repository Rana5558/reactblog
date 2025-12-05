import api from './axios';
import { Blog } from '../types';

export const blogsApi = {
  getAll: async (): Promise<Blog[]> => {
    const response = await api.get<Blog[]>('/blogs');
    return response.data;
  },

  getById: async (id: string): Promise<Blog> => {
    const response = await api.get<Blog>(`/blogs/${id}`);
    return response.data;
  },

  create: async (blog: { title: string; content: string; author: string }): Promise<Blog> => {
    const response = await api.post<Blog>('/blogs', blog);
    return response.data;
  },
};

