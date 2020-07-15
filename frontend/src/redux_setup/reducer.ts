import { FETCH_POSTS, REMOVE_POST,FETCH_USERS } from './actions';

const initialState: IState = {
  posts: [],
  users: []
};

export default function (state = initialState, action: any) {
  switch(action.type) {
    case FETCH_POSTS:
      return {...state, posts: action.data};
    case REMOVE_POST:
      return {...state, posts: state.posts.filter(post => post.id !== action.data)}
    case FETCH_USERS:
      return {...state, users: action.data}
    default:
      return state;
  };
};