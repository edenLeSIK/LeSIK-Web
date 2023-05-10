import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainContent from "../../components/MainContent";
import Banner from "../../components/FigureBanner";
import SubContent from "../../components/SubContent";
import StageContent from "../../components/StageContent";
import kitchen from "../../assets/kitchen.png";

const Franchise = () => {
  const navigate = useNavigate();
  const navigateToInquiryPage = () => {
    navigate("/inquiry");
  };

  return (
    <FranchiseContainer>
      <MainContent
        image={kitchen}
        headline="여기는 Franchise에게 안내하는 페이지"
        text="입점 신청하기"
        onClick={navigateToInquiryPage}
        color="orange"
      />
      <Banner />
      <SubContent headline="what do you makeat?" />
      <SubContent color="on" headline="why you makeat?" />
      <Banner color="off" />
      <StageContent />
    </FranchiseContainer>
  );
};

const FranchiseContainer = styled.main``;

export default Franchise;
