import styled from "styled-components";
import Check from "./Check";
import { purple } from "@/styles/theme";

const CheckContent = ({ list, onClick }) => {
  const styledHeadline = list.headline.replace(
    "cooksup",
    '<span class="cooksup">cooksup</span>'
  );

  return (
    <SectionContainer>
      <div className="content">
        <div className="headline-wrapper">
          <h6>{list.label}</h6>
          <h2
            className="headline"
            dangerouslySetInnerHTML={{ __html: styledHeadline }}
          />
          <h5 className="description">{list.desc}</h5>
        </div>
        <Check contents={list.equipments} onClick={onClick} />
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 100px 4.44vw;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    padding: 40px 8vw;
  }

  .content {
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-justify-content: space-between;
    justify-content: space-between;

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
      width: 30vw;
      row-gap: 16px;
      white-space: normal;
      word-break: keep-all;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        -webkit-align-items: center;
        align-items: center;
        width: 100%;
      }

      h6 {
        margin-left: 3px;
        color: ${purple};
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
        text-transform: uppercase;

        @media (min-width: 940px) and (max-width: 1439px) {
          font-size: 1rem;
        }

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 0.875rem;
          line-height: 1;
        }
      }

      .headline {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 0.01rem;
        text-transform: uppercase;
        vertical-align: bottom;

        @media (min-width: 1280px) and (max-width: 1439px) {
          font-size: 3rem;
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          font-size: 2.85rem;
        }

        @media (min-width: 940px) and (max-width: 1023px) {
          font-size: 2.5rem;
        }

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 2rem;
          text-align: center;
        }
      }

      .cooksup {
        font-size: 3.6rem;

        @media screen and (min-width: 1280px) and (max-width: 1439px) {
          font-size: 3.225rem;
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          font-size: 3.05rem;
        }

        @media (min-width: 940px) and (max-width: 1023px) {
          font-size: 2.75rem;
        }

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 2.2rem;
        }
      }

      .description {
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -0.01rem;

        @media screen and (min-width: 940px) and (max-width: 1439px) {
          font-size: 1.125rem;
        }

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 1rem;
          line-height: 1.25;
          text-align: center;
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

  .web {
    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      display: none;
    }
  }
`;

export default CheckContent;
