import styled from "styled-components";
import {
  main,
  mainHover,
  vividPink,
  pinkHover,
  purple,
  mustardHover,
  orange,
  orangeHover,
  black,
  mustard,
  white,
  makeatRed,
  makeatWhite,
} from "@/styles/theme";

const Button = ({ icon, text, color, onClick, disabled, className }) => {
  return (
    <ButtonContainer
      suppressHydrationWarning
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
  width: 100%;
  min-width: 150px;
  padding: 13px 23px;
  color: ${(props) =>
    (props.color === "mustard" && `${mustard}`) ||
    (props.color === "main" && `${white}`) ||
    (props.color === "makeat" && `${makeatRed}`)};
  font-size: 1.1rem;
  font-size: ${(props) =>
    (props.color === "transparent" && "0.75rem") ||
    (props.color === "makeat" && "1.25rem")};
  font-weight: 700;
  line-height: 1.5;
  background: ${(props) =>
    (props.color === "main" && `${main}`) ||
    (props.color === "purple" && "transparent") ||
    (props.color === "yellow" && `${mustard}`) ||
    (props.color === "pink" && `${vividPink}`) ||
    (props.color === "orange" && `${orange}`) ||
    (props.color === "transparent" && "transparent") ||
    (props.color === "makeat" && `${makeatWhite}`)};
  border: ${(props) =>
    (props.color === "purple" && `1px solid ${purple}`) ||
    (props.color === "mustard" && `1px solid ${mustard}`)};
  border-radius: 50px;
  border-radius: ${(props) =>
    (props.color === "mustard" && "10px") ||
    (props.color === "main" && "15px") ||
    (props.color === "makeat" && "15px")};
  transition: all ease 0.2s;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    min-width: 100px;
    padding: 15px 21px;
    font-size: 0.9rem;
    font-size: ${(props) =>
      (props.color === "transparent" && "0.5rem") ||
      (props.color === "makeat" && "1rem")};
    line-height: 1;
  }

  &:hover {
    background: ${(props) =>
      (props.color === "main" && `${mainHover}`) ||
      (props.color === "purple" && `${purple}`) ||
      (props.color === "yellow" && `${mustardHover}`) ||
      (props.color === "pink" && `${pinkHover}`) ||
      (props.color === "orange" && `${orangeHover}`)};
    color: ${(props) => props.color === "transparent" && "rgba(0,0,0,0.7)"};
    opacity: ${(props) =>
      (props.color === "makeat" && "0.9") ||
      (props.color === "mustard" && "0.8")};
    cursor: pointer;
  }

  &:disabled {
    background: ${(props) =>
      (props.color === "main" && `${main}`) ||
      (props.color === "purple" && "transparent") ||
      (props.color === "yellow" && `${mustard}`) ||
      (props.color === "pink" && `${vividPink}`) ||
      (props.color === "orange" && `${orange}`)};
    border: ${(props) => props.color === "purple" && `1px solid ${purple}`};
    color: ${black};
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
