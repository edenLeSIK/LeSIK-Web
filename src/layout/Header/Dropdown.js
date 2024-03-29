import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { darkGray, main, white } from "@/styles/theme";

const Dropdown = ({ setIsDropdown }) => {
  const { i18n } = useTranslation();
  const { protocol, host, pathname } = window.location;

  const handleLanguage = (language) => {
    if (i18n.language === language) {
      setIsDropdown(false);
      return;
    }

    const newLanguage = i18n.language === "ko" ? "/en" : "";
    const newPath = pathname.replace(/^\/en(\/|$)/g, "/");
    const route = `${protocol}//${host}${newLanguage}${newPath}`;
    window.location.href = route;

    setIsDropdown(false);
  };

  return (
    <DropdownList>
      <li onClick={() => handleLanguage("ko")}>한국어</li>
      <li onClick={() => handleLanguage("en")}>English</li>
    </DropdownList>
  );
};

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 30%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0.275rem;
  background: ${white};
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 10000;
  list-style: none;

  li {
    padding: 0.875rem;
    border-radius: 0.25rem;
    color: ${darkGray};
    cursor: pointer;

    &:hover {
      background: ${main};
      color: ${white};
      opacity: 0.8;
    }
  }
`;

export default Dropdown;
