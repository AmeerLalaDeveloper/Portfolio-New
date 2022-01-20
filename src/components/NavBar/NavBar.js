import React from "react";
import * as S from "./NavBar.style";
export default function NavBar() {
  const links = ["Home", "About", "Resume", "Contact"];
  const menuItems = links.map((link) => (
    <S.ListItem key={link}>
      <a href={"#" + link}>{link}</a>
    </S.ListItem>
  ));
  return (
    <S.Container>
      <S.NavBarWrapper>
        <S.Logo>Ameer Lala</S.Logo>
        <S.Menu>{menuItems}</S.Menu>
      </S.NavBarWrapper>
    </S.Container>
  );
}
