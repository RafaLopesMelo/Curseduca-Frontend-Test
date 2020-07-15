import React from 'react';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillLinkedin
} from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io'

import { Wrapper, SocialMediasWrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <h1>© Copyright 2020 Curseduca Social</h1>
      <SocialMediasWrapper>
        <a target="blank" href="https://api.whatsapp.com/send?phone=5511985785656&text=Estou%20no%20site%20do%20Curseduca%20e%20quero%20saber%20mais!">
          <IoLogoWhatsapp />
        </a>
        <a target="blank" href="https://www.facebook.com/curseduca">
          <AiFillFacebook />
        </a>
        <a target="blank" href="https://mobile.twitter.com/curseduca">
          <AiOutlineTwitter />
        </a>
        <a target="blank" href="https://www.youtube.com/user/curseduca">
          <AiFillYoutube />
        </a>
        <a target="blank" href="https://www.linkedin.com/company/curseduca/">
          <AiFillLinkedin />
        </a>
      </SocialMediasWrapper>
    </Wrapper>
  );
};

export default Footer;