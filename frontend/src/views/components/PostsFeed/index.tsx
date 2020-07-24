import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { FiTrash2, MdModeEdit } from '../../styles/icons';
import { removePost } from '../../../redux_setup/actions';

import { 
  Wrapper,
  PostWrapper,
  Header,
  User,
  Text,
  Options 
} from './styles';

import photo from '../../assets/profileExample.png';

const PostsFeed: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const posts: IPost[] = useSelector((state: IState) => state.posts);
  const users: IUser[] = useSelector((state: IState) => state.users);

  posts.forEach(post => {
    const user = users.find(user => user.id === post.id_user);
    post.email_user = user?.email;
  });

  function handleRemovePost(id: number) {
    removePost(id)
    .then(action => {
      dispatch(action)
    })
    .catch()
  };

  return (
    <Wrapper>
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
            <MdModeEdit onClick={() => history.push(`/edit/${post.id}`)}/>
            <FiTrash2 onClick={() => handleRemovePost(post.id)}/>
          </Options>
        </PostWrapper>
      ))
      }
    </Wrapper>
  )
}

export default PostsFeed;