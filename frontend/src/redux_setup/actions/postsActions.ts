import api from '../../services/api';
import { FETCH_POSTS, REMOVE_POST } from './types';

export const fetchPosts = async (categorie?: string) => {
  const token = localStorage.getItem('token');

  const url = categorie ? `/posts?id_category=${categorie}` : '/posts';

  const response = await api.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const action = {
    type: FETCH_POSTS,
    data: response.data
  };

  return action;
};

export const removePost = async (id: number) => {
  const token = localStorage.getItem('token')

    await api.delete(`/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const action = {
      type: REMOVE_POST,
      data: id
    };

    return action;
}