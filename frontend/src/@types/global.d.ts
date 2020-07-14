interface ITokenResponse {
  data: {
    access_token: string;
  }
}

interface IAction {
  type: string;
  payload: Promise<IPost[]>;
};

interface IHomeProps {
  fetchPosts: () => IAction;
};

interface IPost {
  id: number;
  title: string;
  text: string;
  id_category: number;
  id_user: number;
  date: string
};