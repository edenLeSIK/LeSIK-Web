import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { navList } from "../../constants/nav";
import logo from "../../assets/cooksup_logo.png";
import {
  black,
  white,
  gray,
  main,
  purple,
  orange,
  yellow,
  darkGray,
} from "../../theme";

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
        color: ${darkGray};
        font-size: 1.125rem;
        font-weight: 700;
      }

      li + li {
        margin-left: 30px;
      }
    }
  }
`;

export default Header;
