import styled from "styled-components";
import { purple } from "../../theme";
import phone from "../../assets/app_container.png";
import makeat from "../../assets/makeat_app.png";
import app from "../../assets/app_capture.png";

const AppGuide = () => {
  return (
    <AppGuideContainer>
      <div className="guide-wrapper">
        <div className="headline">
          <h1>makeat 오프라인 서비스</h1>
          <h2>나만의 셰프 makeat, 집 근처에서 pickup</h2>
        </div>
        <div className="app-image-container">
          <div className="app">
            <img className="phone" alt="makeat app" src={phone} />
            <img className="screen-shot" alt="screen shot" src={app} />
          </div>
          <div className="app2">
            <img className="phone" alt="makeat app" src={phone} />
            <img className="screen-shot" alt="screen shot" src={app} />
          </div>
        </div>
      </div>
    </AppGuideContainer>
  );
};

const AppGuideContainer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;

  .guide-wrapper {
    width: 100%;
    max-width: 1140px;
    height: 100%;
    margin: auto;
    padding: 250px 0 165px 0;

    .headline {
      /* 애니메이션 */

      h1 {
        font-size: 28px;
        font-weight: 700;
        line-height: 1.3;
        color: ${purple};
        margin-bottom: 30px;
      }

      h2 {
        font-size: 50px;
        font-weight: 700;
        line-height: 1.4;
        color: #191f28;
        word-break: keep-all;
        white-space: pre-wrap;
      }
    }

    .app-image-container {
      .app {
        position: relative;
        top: 0;
        left: -10%;
        width: 600px;
        height: 936px;

        .phone {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .screen-shot {
          position: absolute;
          top: 11.5%;
          left: 21.5%;
          width: 57%;
          height: auto;
          z-index: -1;
        }
      }

      .app2 {
        position: absolute;
        top: 26%;
        left: 40%;
        width: 600px;
        height: 936px;

        .phone {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .screen-shot {
          position: absolute;
          top: 11.5%;
          left: 21.5%;
          width: 57%;
          height: auto;
          z-index: -1;
        }
      }
    }
  }
`;

export default AppGuide;
