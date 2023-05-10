import styled from "styled-components";
import MainContent from "../../components/MainContent";
import Banner from "../../components/FigureBanner";
import SubContent from "../../components/SubContent";
import AppGuide from "../../components/AppGuide";
import kitchen from "../../assets/kitchen.png";
import serve from "../../assets/serve.png";

const Customer = () => {
  return (
    <CustomerContainer>
      <MainContent
        image={serve}
        headline="makeat 구매 링크 구글 플레이 앱스토어"
        text="makeat 구매하기"
        color="pink"
      />
      <AppGuide />
    </CustomerContainer>
  );
};

const CustomerContainer = styled.main``;

export default Customer;
