import React from "react";
import { CenterDiv } from "../styled-components/Wizard";
import MultiStepForm from "../components/multistepform";

export default function Home() {
  return (
    <CenterDiv>
      <MultiStepForm
        onSubmit={(values) => {
          console.log("Form Submitted", values);
        }}
      />
    </CenterDiv>
  );
}
