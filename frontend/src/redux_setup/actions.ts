import api from '../services/api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_USERS = 'FETCH_USERS';
export const REMOVE_POST = 'REMOVE_POST';

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

export const fetchUsers = async () => {
  const token = localStorage.getItem('token')

  const response = await api.get('/users', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const users: IUser[] = Object.keys(response.data).map(key => {
    const user = response.data[key];
    return user;
  });

  const action = {
    type: FETCH_USERS,
    data: users
  };

  return action;
};