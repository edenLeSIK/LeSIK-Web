import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const AdsContent = () => {
  const navigate = useNavigate();

  const navigateToInquiryPage = () => {
    navigate("/inquiry");
  };

  return (
    <ContentContainer>
      <div className="content-wrapper">
        <h2 className="headline">Ready to Makeat your kitchen?</h2>
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
    background: #ff6e40;

    .headline {
      width: 44.45vw;
      margin: 32px 0;
      text-align: center;
      color: #fff;
      font-size: 5rem;
      font-weight: 700;
      line-height: 0.95;
      letter-spacing: 0.01rem;
      text-transform: uppercase;
    }
  }
`;

export default AdsContent;
