import * as S from "./IntroPage.style";
import React from "react";
import { GITHUB, LINKEDIN } from "../../utils/Links";
import ProfilePicture from "../../assets/images/Me.jpg";
export default function IntroPageView() {
  return (
    <S.ContainerPageView>
      <S.Intro>
        <S.Links>
          <li>
            <a href={LINKEDIN}>
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href={GITHUB}>
              <i className="fa fa-github"></i>
            </a>
          </li>
        </S.Links>
        <h3>
          Hellp ,I'M <span className="primary-color">Ameer</span>
        </h3>
        <h2>Junior FullStack Developer</h2>
        <S.Actions>
          <button>Hire Me</button>
          <button>Get Resume</button>
        </S.Actions>
      </S.Intro>
      <S.ProfileImageContainer>
        <S.ProfileImage src={ProfilePicture}></S.ProfileImage>
      </S.ProfileImageContainer>
    </S.ContainerPageView>
  );
}
