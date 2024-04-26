import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { useLocation } from "react-router-dom";
import back from "../assets/images/back.png";
import { useNavigate } from "react-router-dom";
import create from "../assets/images/create.png";
import detail from "../assets/images/detail.png";
import login from "../assets/images/login.png";
import signup from "../assets/images/signup.png";
import Menu from "./Menu";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  let pageTitleImage = null;

  switch (location.pathname.split("/")[1]) {
    case "":
      pageTitleImage = logo;
      break;
    case "create":
      pageTitleImage = create;
      break;
    case "detail":
      pageTitleImage = detail;
      break;
    case "login":
      pageTitleImage = login;
      break;
    case "signup":
      pageTitleImage = signup;
      break;
    default:
      pageTitleImage = null;
      break;
  }

  return (
    <>
      <HeaderContainer>
        {location.pathname === "/" ? (
          <>
            <Logo>
              <LogoImage src={logo} alt="logo" />
            </Logo>
            <MenuContainer onClick={() => setIsOpen(!isOpen)}>
              <Ham
                src={"https://cdn.banggooso.com/assets/images/icons/menu_2.png"}
                alt="ham"
              />
            </MenuContainer>
          </>
        ) : (
          <PageTitleContainer>
            <Icon onClick={() => navigate("/")}>
              <IconImage src={back} alt="backIcon" />
            </Icon>
            <PageTitle src={pageTitleImage} alt="page-image" />
          </PageTitleContainer>
        )}
      </HeaderContainer>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
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

const MenuContainer = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
`;

const Ham = styled.img`
  width: 100%;
  height: 100%;
`;

const PageTitleContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

const PageTitle = styled.img`
  height: 100%;
  width: auto;
`;
