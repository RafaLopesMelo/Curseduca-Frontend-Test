import styled from 'styled-components';

interface ButtonProps {
  outlined?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  height: max(100px, 10vh);

  background-color: var(--primary);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 60%;

  color: var(--white);
  font-size: 2.1rem;

  white-space: nowrap;

  img {
    height: 8.9rem;
    margin-right: min(12px, 2%);
  }
`;

export const OptionsWrapper = styled.ul`
  display: flex;
  align-items: center;

  color: var(--white);
  

  margin-left: max(200px, 20vw);

  > li {
    margin: max(50px, 2vw);
    font-size: 2.8rem;

    cursor: pointer;

    &:hover {
      color: var(--secondary);
      transform: scale(0.98);
    }

    > button {
      background-color: var(--tertiary);
      color: var(--white);

      border: 0;
      border-radius: 8px;

      font-size: 2.8rem;

      width: max(180px, 8vw);
      height: 50px;

      cursor: pointer;

      &:hover {
        transform: scale(0.98);
        filter: brightness(0.98);
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80vh;

  background-color: var(--primary);
  background: linear-gradient(180deg, rgba(8,59,138,1) 0%, rgba(8,59,138,0.8) 100%);
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 12vw;
  color: var(--white);

  > h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  > p {
    font-size: 20px;
    font-weight: lighter;
    margin-bottom: 80px;
  }

  > div {
    display: flex;
    align-items: center;

    margin-top: 20px;

    > button {
      margin: 0 max(40px, 2vw)
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.outlined ? 'transparent' : 'var(--tertiary)'};
  color: ${props => props.outlined ? 'var(--secondary)' : 'var(--white)'};

  border: 2pt solid ${props => props.outlined ? 'var(--secondary)' : 'var(--tertiary)'}; 
  border-radius: 40px;

  font-size: 37px;

  width: 250px;
  height: 80px;

  cursor: pointer;
  transition-duration: 0.4s;
  
  &:hover {
    background-color: transparent;
    color: var(--white);
    border: 2pt solid ${props => props.outlined ? 'var(--white)' : 'var(--tertiary)'};
  }
`;

export const Illustration = styled.img`
  min-width: 600px;
  height: 800px;
  margin-right: 4vw;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  background-color: var(--input-shadow);
  padding: max(80px, 8vh) 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div div { 
    width: 800px;

    > h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }

    > p {
      font-size: 24px;
      font-weight: lighter;
      margin-bottom: 80px;
    }
  }

  > .books-wrapper {
    margin-bottom: 200px;

    > img {
      width: 400px;

      margin-right: 220px;
    }
  }

  > .users-wrapper {

    > img {
      height: 300px;

      margin-left: 200px;
    }
  }
`;