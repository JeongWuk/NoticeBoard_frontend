import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Menu = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <>
      <MenuContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <MenuDiv isOpen={isOpen} onClick={goToLoginPage}>
        로그인
      </MenuDiv>
    </>
  );
};

export default Menu;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000085;
  position: absolute;
  top: 0;
  z-index: 999;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
`;

const MenuDiv = styled.div`
  width: 40%;
  height: 100%;
  background-color: red;
  transform: translateX(${(props) => (props.isOpen ? "-100%" : "0")});
  transition: transform 0.3s ease-in-out;
  position: absolute;
  top: 0;
  right: -40%;
  z-index: 1000;
`;
