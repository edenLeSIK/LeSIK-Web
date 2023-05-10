import styled from "styled-components";
import Button from "../Button";
import { purple, contentBackground } from "../../theme";

const SubContent = ({ color, label, headline, text, onClick }) => {
  return (
    <SectionContainer color={color}>
      <h6>{label}</h6>
      <div className="content">
        <div className="headline-wrapper">
          <h2 className="headline">{headline}</h2>
          <h5 className="description">
            dmkfmdkfkdnkdkndk nknknaknkandknkadmkf mdkfkdnk dkndknknkna
            knkandknkadmk fmdkfkdn kdkndknknk naknkandknkadmkf mdkfkdnkdkndk
            nknknaknkandknk admkfmdkfkdnkdkndknknknaknk andknka
          </h5>
          {text && <Button color="purple" text={text} onClick={onClick} />}
        </div>
        <div className="content-wrapper">
          <div className="content-item">
            <h3 className="sub-headline">Create Your Perfect makeat</h3>
            <p className="text">
              당신의 건강한 식단을 책임질게요 당신의 건강한 식단을 책임질게요
              당신의 건강한 식단을 책임질게요
            </p>
          </div>
          <div className="content-item">
            <h3 className="sub-headline">Design Your Own makeat</h3>
            <p className="text">당신의 건강한 식단을 책임질게요</p>
          </div>
          <div className="content-item">
            <h3 className="sub-headline">Healthy makeat, Your Way</h3>
            <p className="text">당신의 건강한 식단을 책임질게요</p>
          </div>
          <div className="content-item">
            <h3 className="sub-headline">Build Your Ideal makeat</h3>
            <p className="text">당신의 건강한 식단을 책임질게요</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 120px 4.44vw;
  background: ${(props) => props.color === "on" && `${contentBackground}`};

  h6 {
    margin-left: 3px;
    margin-bottom: 24px;
    color: ${purple};
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  .content {
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-justify-content: space-between;
    justify-content: space-between;

    .headline-wrapper {
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: flex-start;
      align-items: flex-start;
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
      width: 31.1133333333vw;
      row-gap: 16px;

      .headline {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 0.01rem;
        text-transform: uppercase;
      }

      .description {
        font-size: 1.3333333333rem;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -0.01rem;
      }
    }

    .content-wrapper {
      width: 44.45vw;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
      column-gap: 2.22vw;
      row-gap: 64px;
      align-items: flex-start;

      .content-item {
        position: relative;
        display: -webkit- flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: stretch;
        align-items: stretch;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        padding: 16px;
        border-left: 1.5px solid black;

        .sub-headline {
          font-size: 2.3333333333rem;
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: 0.04rem;
          text-transform: uppercase;

          /* @media screen and (max-width: 850px) {
            font-size: 1rem;
          } */
        }

        .text {
          margin: 40px 0 0;
          color: #4a4a5a;
          line-height: 1.2;
        }
      }
    }
  }
`;

export default SubContent;
