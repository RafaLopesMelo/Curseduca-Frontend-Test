import api from '../../../services/api';

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {
  const payload: Promise<IPost[]> = api.get('');

  return {
    type: FETCH_POSTS,
    payload
  };
};