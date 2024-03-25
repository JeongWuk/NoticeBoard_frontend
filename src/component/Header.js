import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { useLocation } from "react-router-dom";
import back from "../assets/images/back.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {location.pathname === "/" ? (
        <>
          <Logo>
            <LogoImage src={logo} alt="logo" />
          </Logo>
          <Menu>
            <Ham
              src={"https://cdn.banggooso.com/assets/images/icons/menu_2.png"}
              alt="ham"
            />
          </Menu>
        </>
      ) : (
        <>
          <Icon onClick={() => navigate("/")}>
            <IconImage src={back} alt="backIcon" />
          </Icon>
          <PageTitle>{location.pathname}</PageTitle>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: relative;
`;

const Logo = styled.div`
  width: 7rem;
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
`;

const Menu = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
`;

const Ham = styled.img`
  width: 100%;
  height: 100%;
`;

const Icon = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: auto;
  height: 100%;
`;

const PageTitle = styled.div`
  width: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
