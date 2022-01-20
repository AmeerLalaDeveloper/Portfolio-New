import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  font-size: 2.5rem;
  position: fixed;
  top: 0;
  color: white;
  padding-top: 5rem;
`;
export const NavBarWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Logo = styled.div`
  font-size: 4rem;
  font-weight: 700;
`;
export const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 0 2rem;

  a {
    padding: 1.5rem 3rem;
    border-radius: 1rem;
    cursor: pointer;
    &:hover {
      background: #f94a1f;
    }
  }
`;
