import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h2 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  span {
    margin-bottom: 1rem;

    font-size: 2rem;
    color: #7f7f7f;
  }
`;
export const HorzintalLine = styled.span`
  width: 20rem;
  height: 0.225rem;
  background: #ccc;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    width: 20%;
    height: calc(100% * 4);
    border-radius: 1rem;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background: #f94a1f;
  }
`;
