import {Post, PostsPerCategory} from '../interfaces/Post'
import api from './api'

export const getLastPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get('productsWithLimit?limit=16');
    return response?.data?.results;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getPostsPerCategory = async (): Promise<PostsPerCategory[]> => {
  try {
    const response = await api.get('category-products-all');
    return response?.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

