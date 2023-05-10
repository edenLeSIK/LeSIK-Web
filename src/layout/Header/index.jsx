import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import { navList } from "../../constants/nav";
import logo from "../../assets/cooksup_logo.png";
import { black, white, gray, main } from "../../theme";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor =
    scrollPosition > window.innerHeight ? `${white}` : "transparent";
  const fontColor =
    scrollPosition > window.innerHeight ? `${black}` : `${white}`;
  const boxShadow =
    scrollPosition > window.innerHeight
      ? "0px 5px 10px rgba(0, 0, 0, 0.1)"
      : "none";

  const redirectToExternalPage = () => {
    window.location.href = "http://www.cooksup.co.kr/";
  };

  return (
    <HeaderContainer
      bgColor={bgColor}
      fontColor={fontColor}
      boxShadow={boxShadow}
    >
      <div className="header-wrapper">
        <Link to="/" className="link">
          <img alt="logo" src={logo} />
        </Link>
        <ul>
          {navList.map((nav) => (
            <li key={nav.id}>
              <NavLink to={nav.link}>{nav.category}</NavLink>
            </li>
          ))}
        </ul>
        {/* <Button
          text="makeat 구매하기"
          color="main"
          onClick={redirectToExternalPage}
        /> */}
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.nav`
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  background-color: ${(props) => props.bgColor};
  transition: background-color 0.2s ease;
  z-index: 50;
  box-shadow: ${(props) => props.boxShadow};

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    width: 92%;
    max-width: calc(100% - 48px);
    margin: 0 auto;

    .link {
      margin: auto 0;

      img {
        display: flex;
        align-items: center;
        height: 40px;
        margin-right: 24px;
      }
    }

    ul {
      display: flex;
      align-items: center;
      padding: 0;

      li > a {
        padding: 0 8px;
        color: ${(props) => props.fontColor};
        font-size: 1.125rem;
        font-weight: 700;
      }

      li > a:hover {
        color: ${main};
        font-size: 1.125rem;
        font-weight: 700;
      }

      li + li {
        margin-left: 30px;
      }
    }

    .link-button {
      width: 150px;
      padding: 13px;
      border-radius: 20px;
      background: #00b590;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
    }

    .link-button:hover {
      background: lightgray;
    }
  }
`;

export default Header;
