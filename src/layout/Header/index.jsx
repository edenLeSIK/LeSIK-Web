import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { navList } from "../../constants/nav";
import logo from "../../assets/cooksup_logo.png";
import { CgMenuRound } from "react-icons/cg";
import { black, white, darkGray } from "../../theme";
import Button from "../../components/Button";

const Header = () => {
  const [isHeaderModal, setIsHeaderModal] = useState(false);
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
  const iconColor =
    scrollPosition > window.innerHeight ? `${darkGray}` : `${white}`;

  const handleHeader = () => {
    setIsHeaderModal(!isHeaderModal);
  };

  return (
    <HeaderContainer
      bgColor={bgColor}
      iconColor={iconColor}
      fontColor={fontColor}
      boxShadow={boxShadow}
    >
      <div className="header-wrapper">
        <CgMenuRound onClick={handleHeader} />
        <Link to="/" className="link">
          <img alt="logo" src={logo} />
        </Link>
        {/* <ul>
          {navList.map((nav) => (
            <li key={nav.id}>
              <NavLink to={nav.link}>{nav.category}</NavLink>
            </li>
          ))}
        </ul> */}
        <div className="button-wrapper">
          <Button color="main" text="구매하기" className="hide-on-mobile" />
        </div>
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
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: ${(props) => props.bgColor};
  transition: background-color 0.2s ease;
  z-index: 50;
  box-shadow: ${(props) => props.boxShadow};

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    padding: 12px 4.44vw;
  }

  @media screen and (max-width: 939px) and (min-width: 767px) and (max-width: 766px),
    screen and (max-width: 766px) and (max-width: 766px) {
    padding: 12px 5.33vw;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    width: 92%;
    max-width: calc(100% - 48px);
    margin: 0 auto;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      width: 100%;
      max-width: 100%;
    }

    svg {
      margin: auto 0;
      color: ${(props) => props.iconColor};
      font-size: 3rem;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        min-width: auto;
        font-size: 2rem;
      }
    }

    .link {
      margin: auto 0;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        height: 40px;
      }

      img {
        display: flex;
        align-items: center;
        height: 50px;
        margin-right: 24px;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          height: 100%;
        }
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
