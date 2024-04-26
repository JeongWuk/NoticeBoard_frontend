import styled from "styled-components";
import LoginForm from "../component/LoginForm";

const Login = () => {
  return (
    <LoginContainer>
      <LoginImage />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const LoginImage = styled.img`
  width: auto;
  height: 3rem;
`;
