import styled from "styled-components";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { black, white } from "../../theme";

const list = [
  { figure: "20000+", text: "locations" },
  { figure: "20", text: "worldwide" },
  { figure: "600,000+", text: "orders sold" },
  { figure: "2MM+", text: "downloads" },
  { figure: "10", text: "aaa" },
  { figure: "11111", text: "bbb" },
  { figure: "2222", text: "ccc" },
  { figure: "3333", text: "ddd" },
  { figure: "4444", text: "fff" },
];

const FigureBanner = ({ color }) => {
  return (
    <BannerContainer color={color}>
      <div className="positioner">
        <div className="banner-wrapper">
          {list.map((el) => (
            <div className="item" key={el.text}>
              <h2 className="headline">{el.figure}</h2>
              <p className="text">{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </BannerContainer>
  );
};

const BannerContainer = styled.section`
  position: relative;
  height: 185px;
  background: #20202b;
  background: ${(props) => props.color === "off" && "lightpink"};
  overflow: hidden;

  .positioner {
    position: relative;
    width: 100vw;
    height: 100%;

    .banner-wrapper {
      position: absolute;
      top: 0px;
      left: 0px;
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
      width: max-content;
      height: inherit;

      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: max-content;
        height: 100%;
        margin-right: 120px;
        padding: 56px 0;
        column-gap: 24px;

        .headline {
          color: ${white};
          color: ${(props) => props.color === "off" && `${black};`};
          font-size: 4rem;
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: 0.01rem;
          text-transform: uppercase;
        }

        .text {
          color: ${white};
          color: ${(props) => props.color === "off" && `${black};`};
          font-size: 0.95rem;
          line-height: 1.2;
        }
      }
    }
  }
`;

export default FigureBanner;
