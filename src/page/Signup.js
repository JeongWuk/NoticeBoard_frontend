import { useState } from "react";
import styled from "styled-components";
import { postUserInfoAPI } from "../api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const submitForm = async () => {
    const data = {
      email: email,
      password: password,
      username: username,
    };

    await postUserInfoAPI(data);
    navigate("/login");
  };

  return (
    <SignupContainer>
      <SignupForm>
        <Container>
          <Label>~이메일~</Label>
          <UserEmail
            placeholder="이메일"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Container>
        <Container>
          <Label>~비밀번호~</Label>
          <UserPassword
            type="password"
            placeholder="비밀번호"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Container>
        <Container>
          <Label>~이름~</Label>
          <UserName
            placeholder="이름"
            onChange={(event) => setUsername(event.target.value)}
          />
        </Container>
      </SignupForm>
      <SubmitForm onClick={submitForm}>회원가입</SubmitForm>
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 5rem;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const UserEmail = styled.input`
  width: 15rem;
  height: 3rem;
  border-radius: 1rem;
`;

const UserPassword = styled.input`
  width: 15rem;
  height: 3rem;
  border-radius: 1rem;
`;

const UserName = styled.input`
  width: 15rem;
  height: 3rem;
  border-radius: 1rem;
`;

const SubmitForm = styled.button``;
