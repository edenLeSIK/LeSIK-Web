import styled from "styled-components";
import { white } from "../../theme";
import Button from "../Button";

const MainSection = ({ image, headline, desc, onClick, text, color }) => {
  return (
    <SectionContainer>
      <figure>
        <img alt="main-image" src={image} />
      </figure>
      <div className="main-content">
        <h1>{headline}</h1>
        <h5>{desc}</h5>
        <div className="button-wrapper">
          {text && <Button color={color} text={text} onClick={onClick} />}
        </div>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    min-height: unset;
  }

  figure {
    width: 100%;
    height: 100vh;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .main-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40.6716666667vw;
    padding: 0 0 56px;
    padding-left: 4.44vw;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      padding-left: 4.44vw;
    }

    h1 {
      width: 36.6716666667vw;
      padding: 0 0 32px;
      color: ${white};
      font-size: 5.3333333333rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.01rem;
      text-transform: uppercase;
      text-shadow: 0px 10px 10px rgba(32, 32, 43, 0.2);

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 91.12vw;
        padding: 0 0 16px;
        font-size: 3.5555555556rem;
      }
    }

    h5 {
      width: 30.33333333333vw;
      color: ${white};
      font-size: 1.3333333333rem;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: -0.01rem;
      text-shadow: 0px 10px 10px rgba(32, 32, 43, 0.2);

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 70.005vw;
        font-size: 1rem;
        line-height: 1.25;
      }
    }

    .button-wrapper {
      display: flex;
      width: 200px;
      margin-top: 10%;

      img + img {
        margin-left: 50px;
      }
    }

    div + div {
      margin-left: 20px;
    }
  }
`;

export default MainSection;
