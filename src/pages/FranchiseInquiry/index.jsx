import styled from "styled-components";
import Form from "../../components/Form";
import { purple, darkGray, contentBackground } from "../../theme";

const FranchiseInquiry = () => {
  return (
    <FranchiseInquiryContainer>
      <section className="headline-wrapper">
        <div className="content">
          <h1 className="headline">Optimize your kitchen today</h1>
          <h4 className="desc">
            We’re the market leaders in running delivery-only virtual brands.
          </h4>
        </div>
      </section>
      <section className="inquiry-content">
        <div className="left"></div>
        <div className="right">
          <Form />
        </div>
      </section>
    </FranchiseInquiryContainer>
  );
};

const FranchiseInquiryContainer = styled.main`
  min-height: 100vh;
  width: 100vw;

  .headline-wrapper {
    padding-left: 4.44vw;
    padding-right: 4.44vw;
    padding-top: 120px;
    padding-bottom: 48px;
    background-color: ${purple};

    .content {
      position: relative;
      width: 44.45vw;
      padding-top: 120px;

      .desc {
        color: ${darkGray};
        font-size: 1.6666666667rem;
        font-weight: 400;
        line-height: 1.15;
        letter-spacing: -0.01rem;
      }
    }
  }

  .inquiry-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 4.44vw;
    padding-right: 4.44vw;
    background-color: ${contentBackground};

    .right {
      width: 44.45vw;
      transform: translateY(-40vh);
    }
  }
`;

export default FranchiseInquiry;
