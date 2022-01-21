import React from "react";
import * as S from "./SectionHeader.style";
export default function SectionHeader({ title, subTitle }) {
  return (
    <S.Header>
      <h2>{title}</h2>
      <span>{subTitle}</span>
      <S.HorzintalLine></S.HorzintalLine>
    </S.Header>
  );
}
