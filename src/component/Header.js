import styled from "styled-components";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoImage src={logo} alt="logo" />
      </Logo>
      <Menu>
        <Ham
          src={"https://cdn.banggooso.com/assets/images/icons/menu_2.png"}
          alt="ham"
        />
      </Menu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
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
