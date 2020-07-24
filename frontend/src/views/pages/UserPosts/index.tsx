import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";

import { fetchPosts, fetchUsers } from "../../../redux_setup/actions";

import NavBar from "../../components/NavBar";
import Aside from "../../components/Aside";
import InfoMenu from '../../components/InfoMenu';
import Footer from "../../components/Footer";
import PostsFeed from "../../components/PostsFeed";

import { Wrapper, MainWrapper, FeedWrapper } from "./styles";

const UserPosts: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const category = query.get("id_category") as string;
  const { id_user } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts(category, id_user)
      .then((action) => dispatch(action))
      .catch(() => history.push("/"));
  }, [category, id_user, dispatch, history]);

  useEffect(() => {
    fetchUsers()
      .then((action) => dispatch(action))
      .catch(() => history.push("/"));
  });

  return (
    <Wrapper>
      <NavBar />
      <MainWrapper>
        <Aside />
        <FeedWrapper>
          <PostsFeed />
        </FeedWrapper>
        <InfoMenu />
      </MainWrapper>
      <Footer />
    </Wrapper>
  );
};

export default UserPosts;
