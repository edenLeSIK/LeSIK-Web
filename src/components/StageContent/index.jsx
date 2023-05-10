import { useState } from "react";
import styled from "styled-components";
import Step from "../Step";

const StageContent = () => {
  return (
    <SectionContainer>
      <div className="stage-wrapper">
        <h6>check it out</h6>
        <h2>How do you makeat?</h2>
        <h5>
          Select the existing equipment that can be found in your kitchen.
        </h5>
        <Step />
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding-left: 4.44vw;
  padding-right: 4.44vw;
  padding-top: 120px;
  padding-bottom: 100px;
  border-top: 1px solid #f1f2f6;
  text-align: center;

  .stage-wrapper {
    box-sizing: border-box;
    text-align: center;

    h6 {
      margin-bottom: 24px;
      color: #4a4a5a;
      font-size: 0.8888888889rem;
      font-weight: 400;
      line-height: 1.1;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }

    h2 {
      margin-bottom: 32px;
      font-size: 4rem;
      font-weight: 700;
      line-height: 0.95;
      letter-spacing: 0.01rem;
      text-transform: uppercase;
    }

    h5 {
      text-align: center;
    }
  }
`;

export default StageContent;
