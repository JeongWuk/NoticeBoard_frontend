import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import submitImage from "../assets/images/submit.png";

const SubmitButton = (props) => {
  const navigate = useNavigate();
  const { onClick } = props;

  const moveToHome = (event) => {
    onClick(event);
    navigate("/");
  };

  return (
    <ButtonContainer>
      <ButtonContent onClick={(e) => moveToHome(e)}>
        <SubmitButtonImage src={submitImage} alt="submitImage" />
      </ButtonContent>
    </ButtonContainer>
  );
};

export default SubmitButton;

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

const SubmitButtonImage = styled.img`
  width: auto;
  height: 100%;
`;
