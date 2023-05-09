import styled from "styled-components";
import MainContent from "../../components/MainContent";
import Banner from "../../components/FigureBanner";
import SubContent from "../../components/SubContent";
import AppGuide from "../../components/AppGuide";
import kitchen from "../../assets/kitchen.png";

const Customer = () => {
  return (
    <div>
      <MainContent
        image={kitchen}
        headline="makeat 구매 링크 구글 플레이 앱스토어"
      />
      <AppGuide />
    </div>
  );
};

export default Customer;
