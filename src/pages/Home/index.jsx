import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainContent from "../../components/MainContent";
import SubContent from "../../components/SubContent";
import Feed from "../../components/Feed";
import AdsContent from "../../components/AdsContent";
import consult from "../../assets/consult.png";
import food from "../../assets/food.png";

const Home = () => {
  const navigate = useNavigate();

  const redirectToExternalPage = () => {
    window.location.href = "http://www.cooksup.co.kr/";
  };
  const navigateToMakeatPage = () => {
    navigate("/makeat");
  };
  const navigateToCustomerPage = () => {
    navigate("/customer");
  };
  const navigateToFranchisePage = () => {
    navigate("/franchise");
  };

  return (
    <HomeContainer>
      <MainContent
        image={consult}
        headline="당신에게 맞춘 건강식단, makeat"
        desc="당신에게 맞춘 건강식단, makeat 당신에게 맞춘 건강식단, makeat 당신에게
        맞춘 건강식단, makeat 당신에게 맞춘 건강식단, makeat 당신에게 맞춘
        건강식단, makeat 당신에게 맞춘 건강식단, makeat 당신에게 맞춘
        건강식단, makeat"
        onClick={navigateToMakeatPage}
        text="makeat 구매하기"
      />
      <SubContent
        label="Customers"
        headline="How we makeat?"
        link="makeat 알아보기"
        onClick={navigateToCustomerPage}
      />
      <SubContent
        color="on"
        label="Franchises & Businesses"
        headline="makeat assemble"
        link="Do you want makeat?"
        onClick={navigateToFranchisePage}
      />
      <SubContent
        label="Creators"
        headline="share own your recipe"
        link="Learn more"
      />
      <Feed />
      <AdsContent />
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;

export default Home;
