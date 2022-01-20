import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import IntroPageView from "./IntroPageView";
import * as S from "./IntroPage.style";
import backGroundImage from "../../assets/images/Intro-bg.jpg";
export default function IntroPageContainer() {
  return (
    <S.Background image={backGroundImage}>
      <NavBar />
      <IntroPageView />
    </S.Background>
  );
}
