import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import createImage from "../assets/images/write.png";

const CreateButton = ({ children }) => {
  const navigate = useNavigate();

  const moveToCreate = () => {
    navigate("/create");
  };

  return (
    <ButtonContainer>
      <ButtonContent onClick={() => moveToCreate()}>
        <CreateButtonImage src={createImage} alt="createImage" />
      </ButtonContent>
    </ButtonContainer>
  );
};

export default CreateButton;

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
  border: 0.2rem solid black;
  box-shadow: 0.2rem 0.2rem black;
  transition: all 0.1s linear;
  border-radius: 5rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;

  &:active {
    transform: translate(0.1rem, 0.1rem);
    box-shadow: none;
  }
`;

const CreateButtonImage = styled.img`
  width: auto;
  height: 100%;
`;
