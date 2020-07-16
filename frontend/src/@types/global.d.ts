interface IState {
  posts: IPost[];
  users: IUserList;
}

interface ITokenResponse {
  data: {
    access_token: string;
  }
};

interface IPost {
  id: number;
  title: string;
  text: string;
  id_category: number;
  id_user: number;
  email_user?: string;
  date: string
};

interface IUser {
  id: number,
  email: string,
  password: string;
};

interface ICreatePostArgs {
  title: string;
  text: string;
  id_category: number;
  id_user: number;
};

interface IUpdatePostArgs {
  title: string;
  text: string;
  id_category: number;
  id: number;
};

interface ILoginValidation {
  email?: string;
  password?: string;
}