import styled from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <LoginImage />
      <LoginForm>
        <EmailInput />
        <PasswordInput />
      </LoginForm>
      <LoginButton>로그인</LoginButton>
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
`;

const LoginImage = styled.img`
  width: auto;
  height: 3rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmailInput = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: 1rem;
  outline: none;
`;

const PasswordInput = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: 1rem;
  outline: none;
`;

const LoginButton = styled.button`
  width: 20rem;
  height: 3rem;
  border-radius: 1rem;
`;
