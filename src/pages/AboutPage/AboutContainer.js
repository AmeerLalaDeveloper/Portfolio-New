import React from "react";
import * as S from "./About.style";
import myImage from "../../assets/images/Me.jpg";
import { AboutComponentData } from "../../utils/HardCodedData";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
export default function AboutContainer() {
  const { description, highlights } = AboutComponentData;
  return (
    <S.AboutContainer id="About">
      <SectionHeader title={"About Me"} subTitle={"Why Choose Me?"} />
      <S.AboutContent>
        <S.MyImage src={myImage}></S.MyImage>
        <S.Info>
          <S.Description>{description}</S.Description>
          <S.Highlights>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </S.Highlights>
          <S.Actions>
            <a href="#Contact">Hire Me</a>
            <button onClick={() => console.log("Should Open CV")}>
              Get Resume
            </button>
          </S.Actions>
        </S.Info>
      </S.AboutContent>
    </S.AboutContainer>
  );
}
