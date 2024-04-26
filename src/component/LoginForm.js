import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { checkUserInfoAPI } from "../api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const kakaoLogin = () => {};

  const checkLogin = async () => {
    const data = {
      email: email,
      password: password,
    };
    const response = await checkUserInfoAPI(data);
    if (response.data.data) {
      navigate("/");
    } else {
      alert("회원가입 하세요!");
    }
  };

  return (
    <>
      <LoginFormContainer>
        <EmailInput
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="username"
        />
        <PasswordInput
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          autoComplete="current-password"
        />
      </LoginFormContainer>
      <LoginButton onClick={checkLogin}>로그인</LoginButton>
      <SignupButton onClick={() => navigate("/signup")}>회원가입</SignupButton>
      <SocialLoginContainer>
        <KakaoImage
          src="https://cdn.banggooso.com/assets/images/game207/result/kakao.png"
          alt="kakao"
          onClick={kakaoLogin}
        />
      </SocialLoginContainer>
    </>
  );
};

export default LoginForm;

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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

const SignupButton = styled.button`
  width: 5rem;
  height: 2rem;
  background: transparent;
`;

const SocialLoginContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoImage = styled.img`
  width: 3rem;
  height: 3rem;
`;
