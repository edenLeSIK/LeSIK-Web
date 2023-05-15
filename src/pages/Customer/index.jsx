import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MainContent from "../../components/MainContent";
import SubContent from "../../components/SubContent";
import AppGuide from "../../components/AppGuide";
import food from "../../assets/food3.png";

const Customer = () => {
  const navigate = useNavigate();
  const navigateToMakeatPage = () => navigate("/makeat");

  return (
    <CustomerContainer>
      <MainContent
        image={food}
        headline={
          <>
            This is
            <br /> makeat
          </>
        }
        text="makeat 다운로드"
        onClick={navigateToMakeatPage}
        color="pink"
      />
      <SubContent label="you all makeat" headline="ddd" />
      <SubContent color="on" label="you all makeat" headline="ddd" />
    </CustomerContainer>
  );
};

const CustomerContainer = styled.main``;

export default Customer;
