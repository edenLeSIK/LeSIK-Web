import styled from "styled-components";

const MakeatMobile = () => {
  return (
    <MakeatMobileContainer>
      <div className="header">
        <header>
          <div></div>
          <div></div>
        </header>
      </div>
      <div className="app-main"></div>
      <div className="navigation"></div>
    </MakeatMobileContainer>
  );
};

const MakeatMobileContainer = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 60px;
  box-sizing: border-box;

  ::before {
    content: "";
    position: fixed;
    top: -1px;
    bottom: 0;
    left: 50%;
    width: 475px;
    max-width: 475px;
    border: 1px solid #e7e7e7;
    z-index: 10000;
    user-select: none;
    pointer-events: none;
  }

  @media (min-width: 915px) {
    max-width: 475px;
    margin-left: -17.5px;
  }

  @media (min-width: 475px) {
    left: 50%;
    margin-left: -237.5px;
  }

  .header {
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 10000;
    background: rgb(255, 255, 255);
  }
`;

export default MakeatMobile;
