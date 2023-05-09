import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navList } from "../../constants/nav";
import logo from "../../assets/cooksup_logo.png";
import { white } from "../../theme";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="info">
        <address className="address">
          <strong className="company">주식회사 래식</strong>
          <p>사업자 등록번호 : 452-88-01682 | 대표 : 김한성</p>
          <p>
            호스팅 서비스 : 주식회사 래식 | 통신판매업 신고번호 :
            2022-대전유성-0960 &nbsp;
            <a
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4528801682"
              target="_blank"
            >
              사업자정보확인
            </a>
          </p>
          <p>34002 대전광역시 유성구 과학나래2길 1 201-1호</p>
        </address>
        {/* <div className="menu">
          {navList.map((nav) => (
            <NavLink key={nav.id} to={nav.category}>
              {nav.category}
            </NavLink>
          ))}
        </div> */}
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>
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
  );
};

const FooterContainer = styled.footer`
  padding: 48px 4.44vw;
  border-top: 2px solid #fff;
  background: #20202b;

  .info {
    display: flex;
    flex-direction: column;

    address {
      color: #8b95a1;
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
        a {
          color: inherit;
        }

        a:hover {
          color: ${white};
        }
      }
    }

    .menu {
      display: flex;
      flex-direction: row;
      margin-left: 40px;
      color: #8b95a1;

      a {
        color: inherit;
      }

      a + a {
        margin-left: 30px;
      }
    }

    .logo {
      margin-top: 7rem;

      img {
        height: 90px;
      }
    }

    .legal {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding-top: 30px;
      border-top: 1px solid ${white};
      color: #8b95a1;

      .legal-pages {
        display: flex;
        flex-direction: row;
        color: #8b95a1;

        a {
          color: inherit;
        }

        a + a {
          margin-left: 20px;
        }
      }
    }
  }
`;

export default Footer;
