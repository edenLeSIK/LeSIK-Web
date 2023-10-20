import Image from "next/image";
import styled from "styled-components";
import { white } from "@/styles/theme";
import Button from "../Button";

const MainContent = ({ image, headline, desc, onClick, text, color }) => {
  return (
    <SectionContainer>
      <figure>
        <Image
          alt="main-image"
          src={image}
          priority={true}
          className="main-image"
        />
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
    // width: 60.6716666667vw;
    padding: 0 0 56px;
    padding-left: 4.44vw;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      right: 0;
      bottom: 5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
    }

    @media screen and (max-width: 320px) {
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
      /* 작은 화면에 대한 스타일 */
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
      /* 중간 크기 화면에 대한 스타일 */
    }

    h1 {
      padding: 0 0 32px;
      color: ${white};
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: 0.01rem;
      text-transform: uppercase;
      text-shadow: 0px 10px 10px rgba(32, 32, 43, 0.2);
      white-space: normal;
      word-break: keep-all;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 85vw;
        font-size: 1.5rem;
        line-height: 1.3;
        text-align: center;
      }
    }

    h5 {
      // width: 30.33333333333vw;
      color: ${white};
      font-size: 1.3333333333rem;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: -0.01rem;
      text-shadow: 0px 10px 10px rgba(32, 32, 43, 0.2);
      white-space: normal;
      word-break: keep-all;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 80vw;
        font-size: 1rem;
        line-height: 1.25;
      }
    }

    .button-wrapper {
      display: flex;
      width: 160px;
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

export default MainContent;
