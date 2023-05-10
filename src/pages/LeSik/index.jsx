import styled from "styled-components";
import Feed from "../../components/Feed";
import MainSection from "../../components/MainContent";
import business from "../../assets/business.png";

const LeSik = () => {
  return (
    <LeSikContainer>
      <MainSection
        headline="hello everyone nice to meet you"
        image={business}
      />
      <Feed />
    </LeSikContainer>
  );
};

const LeSikContainer = styled.main``;

export default LeSik;
