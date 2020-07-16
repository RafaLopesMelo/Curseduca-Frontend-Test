import { fetchPosts, createPost, updatePost, removePost } from './postsActions';
import { fetchUsers } from './usersActions';
import {
  FETCH_POSTS,
  REMOVE_POST,
  FETCH_USERS 
} from './types';

export {
  fetchUsers,
  FETCH_USERS,
  fetchPosts,
  FETCH_POSTS,
  createPost,
  updatePost,
  removePost,
  REMOVE_POST
};
