import api from '../../services/api';
import { FETCH_USERS } from './types';

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