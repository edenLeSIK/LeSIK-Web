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
        label="Franchises & Businesses"
        headline="makeat assemble"
        text="Do you want makeat?"
        onClick={navigateToFranchisePage}
      />
      <SubContent
        color="on"
        label="Customers"
        headline="How we makeat?"
        text="makeat 알아보기"
        onClick={navigateToCustomerPage}
      />
      {/* <SubContent
        label="Creators"
        headline="share own your recipe"
        text="Learn more"
      />
      <Feed /> */}
      <AdsContent />
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  min-height: 100vh;
  width: 100vw;
`;

export default Home;
