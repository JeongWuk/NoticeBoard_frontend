import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const CommonLayout = () => {
  return (
    <Common>
      <Header />
      <Outlet />
    </Common>
  );
};

export default CommonLayout;

const Common = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  position: relative;
`;
