import styled from "styled-components";
import { darkGray, main, white } from "@/styles/theme";

const Dropdown = ({ setIsDropdown }) => {
  return (
    <DropdownList>
      <li onClick={() => setIsDropdown(false)}>한국어</li>
      <li onClick={() => setIsDropdown(false)}>English</li>
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