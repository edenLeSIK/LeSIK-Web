import styled from "styled-components";
import Button from "../Button";
import { purple, contentBackground } from "../../theme";

let list = [
  {
    headline: "Create Your Perfect makeat",
    text: "당신의 건강한 식단을 책임질게요 당신의 건강한 식단을 책임질게요당신의 건강한 식단을 책임질게요",
  },
  {
    headline: "Design Your Own makeat",
    text: "당신의 건강한 식단을 책임질게요당신의 건강한 식단을 책임질게요 당신의 건강한 식단을 책임질게요당신의 건강한 식단을 책임질게요당신의 건강한 식단을 책임질게요",
  },
  {
    headline: "Healthy makeat, Your Way",
    text: "당신의 건강한 식단을 책임질게요당신의 건강한 식단을 책임질게요",
  },
  {
    headline: "Build Your Ideal makeat",
    text: "당신의 건강한 식단을 책임질게요",
  },
];

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
          <div className="button-wrapper">
            {text && (
              <Button
                color="purple"
                text={text}
                onClick={onClick}
                className="hide-on-mobile"
              />
            )}
          </div>
        </div>
        <div className="content-wrapper">
          {list.map((content) => (
            <div className="content-item" key={content.headline}>
              <h3 className="sub-headline">{content.headline}</h3>
              <p className="text">{content.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="button-wrapper mobile-button">
        {text && (
          <Button
            color="purple"
            text={text}
            onClick={onClick}
            className="only-on-mobile"
          />
        )}
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 120px 4.44vw;
  background: ${(props) => props.color === "on" && `${contentBackground}`};

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    padding: 40px 4.44vw;
  }

  h6 {
    margin-left: 3px;
    margin-bottom: 24px;
    color: ${purple};
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      font-size: 0.6666666667rem;
      line-height: 1;
    }
  }

  .content {
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    /* margin-bottom: 30px; */

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
      row-gap: 40px;
    }

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

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 100%;
      }

      .headline {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 0.01rem;
        text-transform: uppercase;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 2.6666666667rem;
        }
      }

      .description {
        font-size: 1.3333333333rem;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -0.01rem;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 1rem;
          line-height: 1.25;
        }
      }
    }

    .content-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
      column-gap: 2.22vw;
      row-gap: 64px;
      align-items: flex-start;
      width: 44.45vw;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 100%;
        grid-template-columns: 1fr;
        row-gap: 35px;
      }

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

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          /* margin-left: 5.5583333333vw;
          margin-right: 5.5583333333vw; */
        }

        .sub-headline {
          font-size: 2.3333333333rem;
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: 0.04rem;
          text-transform: uppercase;

          @media screen and (max-width: 939px) and (min-width: 767px),
            screen and (max-width: 766px) {
            font-size: 1.3333333333rem;
          }
        }

        .text {
          margin: 40px 0 0;
          color: #4a4a5a;
          line-height: 1.2;

          @media screen and (max-width: 939px) and (min-width: 767px),
            screen and (max-width: 766px) {
            margin: 16px 0 0;
            font-size: 0.7777777778rem;
          }
        }
      }
    }
  }

  .mobile-button {
    margin: 0 auto;
  }

  .button-wrapper {
    max-width: 200px;
    margin-top: 30px;
  }
`;

export default SubContent;
