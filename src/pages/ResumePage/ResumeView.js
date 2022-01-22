import React from "react";
import { ResumeMenuTopics } from "../../utils/HardCodedData";
import * as S from "./Resume.style";
export default function ResumeView() {
  const icons = [
    "fa fa-graduation-cap",
    "fa fa-history",
    "fa fa-code",
    "fa fa-line-chart",
  ];
  const renderList = ResumeMenuTopics.map((topic, idx) => (
    <li>
      <i className={icons[idx]}></i>
      <span>{topic}</span>
    </li>
  ));
  return (
    <div className="content">
      <S.SideMenu>
        <S.MenuList>{renderList}</S.MenuList>
      </S.SideMenu>
      <S.DisplayContainer></S.DisplayContainer>
    </div>
  );
}
