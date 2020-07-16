import api from '../../services/api';
import { FETCH_POSTS, REMOVE_POST } from './types';

export const fetchPosts = async (id_categorie?: string, id_user?: number) => {
  const token = localStorage.getItem('token');

  const url = id_categorie 
                ? id_user 
                  ? `/posts?id_category=${id_categorie}&id_user=${id_user}` 
                  : `/posts?id_category=${id_categorie}`
                : id_user 
                  ? `/posts?id_user=${id_user}`
                  : `/posts`

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

export const createPost = async (inputsData: ICreatePostArgs) => {
  const token = localStorage.getItem('token');

  const today = new Date();
  const day = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  const hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
  const date = `${day} ${hour}`

  const data = {
    title: inputsData.title,
    text: inputsData.text,
    id_category: inputsData.id_category,
    id_user: inputsData.id_user,
    date,
  }

  await api.post(`/posts`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export const updatePost = async (data: IUpdatePostArgs) => {
  const token = localStorage.getItem('token');

  const today = new Date();
  const day = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  const hour = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
  const date = `${day} ${hour}`


  api.put(`/posts/${data.id}`, {...data, date}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

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