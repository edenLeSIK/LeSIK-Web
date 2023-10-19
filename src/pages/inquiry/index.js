import { useRouter } from "next/router";
import styled from "styled-components";
import InquiryForm from "@/components/InquiryForm";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import {
  purple,
  contentBackground,
  main,
  white,
  darkGray,
} from "@/styles/theme";
import { inquiryPageContentList } from "@/constants/inquiry";

const Inquiry = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <InquiryContainer>
      <section className="headline-wrapper">
        <BsFillArrowLeftSquareFill className="icon" onClick={goBack} />
        <div className="content">
          <h1 className="headline">{inquiryPageContentList.headline}</h1>
          <h4 className="desc">{inquiryPageContentList.desc}</h4>
        </div>
      </section>
      <section className="inquiry-content">
        <div className="left">
          <ul>
            {inquiryPageContentList.contents.map((el) => (
              <li key={el.content}>{el.content}</li>
            ))}
          </ul>
        </div>
        <div className="right">
          <InquiryForm />
        </div>
      </section>
    </InquiryContainer>
  );
};

const InquiryContainer = styled.main`
  width: 100vw;
  min-height: 100vh;

  .headline-wrapper {
    padding-left: 4.44vw;
    padding-right: 4.44vw;
    padding-top: 50px;
    padding-bottom: 48px;
    background-color: ${main};

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      padding: 48px 5.33vw 0;
    }

    .icon {
      color: ${white};
      font-size: 3.5rem;
    }

    .icon:hover {
      opacity: 0.7;
      cursor: pointer;
    }

    .content {
      position: relative;
      width: 44.45vw;
      padding-top: 80px;

      @media screen and (max-width: 766px) {
        width: 100%;
        padding: 48px 5.33vw 30px;
        text-align: center;
      }

      .headline {
        font-size: 4.5rem;
        margin-bottom: 40px;
        color: ${white};
        white-space: normal;
        word-break: keep-all;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 2.5rem;
        }
      }

      .desc {
        margin-bottom: 60px;
        color: ${white};
        font-size: 1.6666666667rem;
        font-weight: 400;
        line-height: 1.15;
        letter-spacing: -0.01rem;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 1.1111111111rem;
          line-height: 1.25;
        }
      }
    }
  }

  .inquiry-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 4.44vw;
    padding-right: 4.44vw;
    background-color: ${contentBackground};

    @media screen and (max-width: 766px) and (max-width: 766px) {
      padding: 0;
    }

    @media screen and (max-width: 766px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .left {
      position: sticky;
      top: 100px;
      width: 40.45vw;

      @media screen and (max-width: 766px) and (max-width: 766px) {
        position: relative;
        top: 0;
        padding: 0 5.33vw;
        width: 100%;
      }

      @media screen and (max-width: 766px) {
        width: 100%;
      }

      ul {
        padding-top: 48px;
        padding-left: 32px;
        font-size: 1.3333333333rem;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -0.01rem;

        @media screen and (max-width: 766px) {
          padding: 36px 32px 20px;
          font-size: 1rem;
        }

        li {
          margin-bottom: 24px;
          padding: 0;
          list-style: disc;
          color: ${darkGray};
        }
      }
    }

    .right {
      width: 40vw;
      transform: translateY(-30vh);

      @media screen and (max-width: 939px) {
        transform: translateY(-20vh);
      }

      @media screen and (max-width: 766px) and (max-width: 766px) {
        position: relative;
        width: 100%;
        padding: 0 5.33vw;
        transform: translateY(0%);
        z-index: 0;
      }
    }

    @media screen and (max-width: 766px) and (max-width: 766px) {
      .right::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 40%;
        background-color: ${purple};
        z-index: -1;
      }
    }
  }
`;

export default Inquiry;
