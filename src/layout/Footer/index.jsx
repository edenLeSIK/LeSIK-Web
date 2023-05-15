import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/cooksup_logo.png";
import { gray, purple, white, yellow } from "../../theme";
import Button from "../../components/Button";

const Footer = () => {
  const navigate = useNavigate();
  const navigateToMakeatPage = () => navigate("/makeat");

  return (
    !(location.pathname === "/makeat") && (
      <FooterContainer>
        <div className="info">
          <div className="row">
            <address className="address">
              <strong className="company">주식회사 래식</strong>
              <p>사업자 등록번호 : 452-88-01682 | 대표 : 김한성</p>
              <p>
                호스팅 서비스 : 주식회사 래식 |&nbsp;
                <span>통신판매업 신고번호 : 2022-대전유성-0960 &nbsp;</span>
                <a
                  href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4528801682"
                  target="_blank"
                >
                  사업자정보확인
                </a>
              </p>
              <p>34002 대전광역시 유성구 과학나래2길 1 201-1호</p>
            </address>
            <div className="button-wrapper">
              <Button
                color="pink"
                text="makeat 구매하기"
                onClick={navigateToMakeatPage}
              />
            </div>
          </div>
          <Link to="/" className="logo">
            <img alt="logo" src={logo} />
          </Link>
          <div className="legal">
            <p>Copyright © LeSIK. All Rights Reserved.</p>
            <div className="legal-pages">
              <a>
                <p>개인정보 처리방침</p>
              </a>
              <a>
                <p>개인정보 처리방침</p>
              </a>
              <a>
                <p>개인정보 처리방침</p>
              </a>
            </div>
          </div>
        </div>
      </FooterContainer>
    )
  );
};

const FooterContainer = styled.footer`
  padding: 48px 4.44vw;
  border-top: 2px solid ${white};
  background: #20202b;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    padding: 24px 5.33vw;
  }

  .info {
    display: flex;
    flex-direction: column;

    address {
      color: ${white};
      font-size: 15px;
      font-style: normal;
      line-height: 1.6;
      white-space: pre-wrap;

      .company {
        display: block;
        padding-bottom: 16px;
        font-size: 1rem;
        font-weight: 700;
      }

      p {
        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 0.6666666667rem;
        }

        span {
          @media screen and (max-width: 939px) and (min-width: 767px),
            screen and (max-width: 766px) {
            display: block;
          }
        }

        a {
          color: ${gray};
        }

        a:hover {
          color: ${purple};
        }
      }
    }

    .button-wrapper {
      max-width: 160px;
    }

    .logo {
      display: block;
      width: 21.115vw;
      padding: 0 0 16px;
      margin-top: 7rem;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 3rem;
      }

      img {
        height: 90px;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          width: 90vw;
          height: auto;
        }
      }
    }

    .legal {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding-top: 30px;
      border-top: 1px solid ${white};
      color: ${white};

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        flex-direction: column-reverse;
        row-gap: 20px;
        padding-top: 20px;
        font-size: 0.7777777778rem;
      }

      .legal-pages {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: inherit;

        a {
          color: inherit;
          cursor: pointer;
        }

        a:hover {
          color: ${yellow};
        }

        a + a {
          margin-left: 20px;
        }
      }
    }
  }
`;

export default Footer;
