import styled from "styled-components";

const StageContent = () => {
  return (
    <SectionContainer>
      <div className="stage-wrapper">
        <h6>check it out</h6>
        <h2>How do you makeat?</h2>
        <h5>
          Select the existing equipment that can be found in your kitchen.
        </h5>
        <div className="stage">
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
          <div className="option"></div>
        </div>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding-left: 4.44vw;
  padding-right: 4.44vw;
  padding-top: 120px;
  padding-bottom: 32px;
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

  .stage {
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: stretch;
    align-items: stretch;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 48px 0;
    flex-wrap: wrap;
    margin: 0px auto;
    padding-left: 15.5566666667vw;
    padding-right: 15.5566666667vw;

    .option {
      border: 1px solid #9797a1;
      border-radius: 16px;
      width: 164px;
      height: 164px;
      display: -webkit- flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
      cursor: pointer;
      margin: 16px;
    }
  }
`;

export default StageContent;
