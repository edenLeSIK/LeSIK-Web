import styled from "styled-components";
import {
  main,
  mainHover,
  vividPink,
  pinkHover,
  purple,
  yellow,
  yellowHover,
  orange,
  orangeHover,
  black,
} from "../../theme";

const Button = ({ icon, text, color, onClick, disabled, className }) => {
  return (
    <ButtonContainer
      color={color}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {icon}
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  padding: 15px 20px;
  font-size: 1rem;
  font-size: ${(props) => props.color === "transparent" && "0.75rem"};
  font-weight: 700;
  line-height: 1.5;
  background: ${(props) => props.color === "main" && `${main}`};
  background: ${(props) => props.color === "purple" && "transparent"};
  background: ${(props) => props.color === "yellow" && `${yellow}`};
  background: ${(props) => props.color === "pink" && `${vividPink}`};
  background: ${(props) => props.color === "orange" && `${orange}`};
  background: ${(props) => props.color === "transparent" && "transparent"};
  border: ${(props) => props.color === "purple" && `1px solid ${purple}`};
  border-radius: 54px;
  transition: all ease 0.2s;

  &:hover {
    background: ${(props) => props.color === "main" && `${mainHover}`};
    background: ${(props) => props.color === "purple" && `${purple}`};
    background: ${(props) => props.color === "yellow" && `${yellowHover}`};
    background: ${(props) => props.color === "pink" && `${pinkHover}`};
    background: ${(props) => props.color === "orange" && `${orangeHover}`};
    color: ${(props) => props.color === "transparent" && "rgba(0,0,0,0.7)"};
    cursor: pointer;
  }

  &:disabled {
    background: ${(props) => props.color === "main" && `${main}`};
    background: ${(props) => props.color === "purple" && "transparent"};
    background: ${(props) => props.color === "yellow" && `${yellow}`};
    background: ${(props) => props.color === "pink" && `${vividPink}`};
    background: ${(props) => props.color === "orange" && `${orange}`};
    border: ${(props) => props.color === "purple" && `1px solid ${purple}`};
    color: ${black};
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    min-width: 100px;
    padding: 15px 21px;
    font-size: 0.9rem;
    font-size: ${(props) => props.color === "transparent" && "0.5rem"};
    line-height: 1;
  }
`;

export default Button;
