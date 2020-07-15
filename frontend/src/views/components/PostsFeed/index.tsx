import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';
import { MdModeEdit } from 'react-icons/md';

import { removePost } from '../../../redux_setup/actions';

import { 
  Wrapper,
  AddPost,
  PostWrapper,
  Header,
  User,
  Text,
  Options 
} from './styles';

import photo from '../../assets/profileExample.png';

const PostsFeed: React.FC = () => {
  const dispatch = useDispatch();

  const posts: IPost[] = useSelector((state: IState) => state.posts);
  const users: IUser[] = useSelector((state: IState) => state.users);

  posts.forEach(post => {
    const user = users.find(user => user.id === post.id);
    post.email_user = user?.email;
  });

  function handleRemovePost(id: number) {
    console.log(posts)

    removePost(id)
    .then(action => {
      dispatch(action)
      console.log(posts)
    })
    .catch()

  };

  return (
    <Wrapper>
      <AddPost>
        <Link to="/posts">
          <h1>Adicionar Postagem</h1>
          <BsPlus />
        </Link>
      </AddPost>
      {posts.map(post => (
        <PostWrapper key={post.id}>
          <Header>
            <User>
              <img src={photo} alt="Profile" />
              <Link to={`/user/${post.id_user}`}>{post.email_user}</Link>
            </User>
            <p>{post.date.split(" ")[0]}</p>
          </Header>
          <Text>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.text }}></div>
          </Text>
          <Options>
            <MdModeEdit />
            <FiTrash2 onClick={() => handleRemovePost(post.id)}/>
          </Options>
        </PostWrapper>
      ))
      }
    </Wrapper>
  )
}

export default PostsFeed;