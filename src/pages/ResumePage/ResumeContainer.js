import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ResumeView from "./ResumeView";

export default function ResumeContainer() {
  return (
    <section id="Resume">
      <SectionHeader title={"Resume"} subTitle={"my format Bio Details"} />
      <ResumeView />
    </section>
  );
}
