import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = ({ children }) => {
  const navigate = useNavigate();

  const moveToCreate = () => {
    navigate("/create");
  };

  return (
    <ButtonContainer>
      <ButtonContent onClick={() => moveToCreate()}>{children}</ButtonContent>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 1rem 0;
`;

const ButtonContent = styled.div`
  width: 20rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border: 0.1rem solid black;
  border-radius: 5rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
`;
