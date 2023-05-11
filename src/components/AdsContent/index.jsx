import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import { orange, white } from "../../theme";

const AdsContent = () => {
  const navigate = useNavigate();

  const navigateToInquiryPage = () => {
    navigate("/inquiry");
  };

  return (
    <ContentContainer>
      <div className="content-wrapper">
        <h2 className="headline">
          Ready <br /> to Makeat?
        </h2>
        <Button
          text="바로 참여하기"
          color="yellow"
          onClick={navigateToInquiryPage}
        />
      </div>
    </ContentContainer>
  );
};

const ContentContainer = styled.section`
  padding: 100px 4.44vw;
  background: #20202b;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    padding: 48px 5.33vw;
  }

  .content-wrapper {
    position: relative;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 120px 0;
    border-radius: 24px;
    overflow: hidden;
    background: ${orange};

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      padding: 64px 0;
    }

    .headline {
      width: 44.45vw;
      margin: 32px 0;
      text-align: center;
      color: ${white};
      font-size: 5rem;
      font-weight: 700;
      line-height: 0.95;
      letter-spacing: 0.01rem;
      text-transform: uppercase;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 66.5933333333vw;
        font-size: 2.5rem;
      }
    }
  }
`;

export default AdsContent;
