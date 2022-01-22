import styled from "styled-components";

export const DisplayContainer = styled.div``;
export const SideMenu = styled.div`
  height: 70%;
  margin: auto 0;

  display: flex;
  align-items: center;
  width: 30%;
`;
export const MenuList = styled.ul`
  list-style: none;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15%;
    height: 100%;
    background-color: #202235;
  }
  li {
    font-size: 2rem;
    padding: 1.5rem;
    z-index: 1;
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  li i {
    color: white;
  }
`;
