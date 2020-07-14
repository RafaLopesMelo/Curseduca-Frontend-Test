import { FETCH_POSTS } from './_homeAction';

const initialState: IPost[] = [];

export default function (state: any = initialState, action: IAction) {
  const { type, payload } = action;

  switch(type) {
    case FETCH_POSTS:
      return {posts: payload};
    default:
      return state;
  };
};