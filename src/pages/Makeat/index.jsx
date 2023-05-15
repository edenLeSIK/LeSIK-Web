import styled from "styled-components";
import MakeatPc from "../../components/MakeatPc";
import MakeatMobile from "../../components/MakeatMobile";

const Makeat = () => {
  return (
    <MakeatContainer>
      <MakeatPc />
      <MakeatMobile />
    </MakeatContainer>
  );
};

const MakeatContainer = styled.main``;

export default Makeat;
