import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainContent from "../../components/MainContent";
import SubContent from "../../components/SubContent";
import Feed from "../../components/Feed";
import AdsContent from "../../components/AdsContent";
import consult from "../../assets/consult.png";
import food from "../../assets/food2.png";

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
        image={food}
        headline={
          <>
            당신에게
            <br /> 맞춘 <br /> 건강식단, <br /> makeat
          </>
        }
        desc="안녕하세요 여러분 makeat 구매해주시죠"
        onClick={navigateToMakeatPage}
        text="makeat 구매하기"
        color="orange"
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
