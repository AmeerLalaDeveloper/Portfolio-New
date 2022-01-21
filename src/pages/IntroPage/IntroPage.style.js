import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: url(${({ image }) => image}) no-repeat center center/cover;
    z-index: -100;
  }
`;

export const ContainerPageView = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 85vh;
  color: white;
  display: flex;
`;

export const Intro = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h3 {
    font-size: 3rem;
    margin: 1rem 0;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 3.5rem;
  }
`;
export const ProfileImageContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50%;
  max-width: 500px;
  position: relative;
  &:after {
    content: "";
    width: 500px;
    height: 500px;
    position: absolute;
    top: 50px;
    background: red;
    border: 2px solid white;
  }
`;
export const Links = styled.ul`
  display: flex;
  list-style: none;
  li {
  }
  a:hover {
    transform: scale(1.1);
  }
  i {
    font-size: 2.5rem;
    margin: 1rem;
  }
`;
export const Actions = styled.div`
  display: flex;
  margin: 1rem;
  button {
    padding: 1.5rem;
    width: 20rem;
    border: none;
    box-shadow: 1px 1px 5px white;
    font-size: 2rem;
    margin: 0 1.5rem;
    border-radius: 2rem;
    cursor: pointer;
  }
  button:hover {
    transform: translateY(-5px);
    transform: scale(1.1);
  }
  button:nth-child(1) {
    background: transparent;
  }
  button:nth-child(1):hover {
    background: #f94a1f;
  }
  button:nth-child(2) {
    background: #f94a1f;
  }
  button:nth-child(2):hover {
    background: transparent;
  }
`;
