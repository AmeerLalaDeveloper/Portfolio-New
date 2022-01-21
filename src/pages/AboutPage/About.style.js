import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const AboutContent = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  height: 70%;
  box-shadow: 2px 5px 10px #ccc;
`;
export const MyImage = styled.img`
  height: 100%;
  width: 50%;
`;
export const Info = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  padding: 5rem;
  flex-direction: column;
  justify-content: space-around;
`;
export const Description = styled.p`
  font-size: 1.8rem;
  display: block;
  padding: 2rem;
  line-height: 1.5;
  width: 100%;
`;
export const Highlights = styled.ul`
  list-style: none;
  padding: 2rem;
  li {
    font-size: 2rem;
    width: 100%;
    position: relative;
    margin: 1rem 0;

    &:before {
      content: "";
      margin-right: 1rem;
      width: 1rem;
      border-radius: 50%;
      height: 1rem;
      top: 25%;
      left: -5%;
      position: absolute;
      background-color: #f94a1f;
    }
  }
`;
export const Actions = styled.div`
  display: flex;
  a,
  button {
    width: 40%;
    padding: 2rem 1rem;
    border-radius: 2rem;
    border: none;
    margin: 0 1rem;
    text-align: center;
    font-size: 1.75rem;
    cursor: pointer;
  }
  a {
    background-color: #202235;
  }
  button {
    background-color: #f94a1f;
  }
`;
