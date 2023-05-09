import styled from "styled-components";
import { main, mainHover, purple, yellow } from "../../theme";

const Button = ({ text, color, onClick }) => {
  return (
    <ButtonContainer color={color} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 190px;
  height: 20px;
  padding: 15px 20px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  background: ${(props) => props.color === "main" && `${main}`};
  background: ${(props) => props.color === "purple" && "transparent"};
  background: ${(props) => props.color === "yellow" && `${yellow}`};
  border: ${(props) => props.color === "purple" && `1px solid ${purple}`};

  border-radius: 54px;

  &:hover {
    background: ${(props) => props.color === "main" && `${mainHover}`};
    background: ${(props) => props.color === "purple" && `${purple}`};
    cursor: pointer;
  }
`;

export default Button;
