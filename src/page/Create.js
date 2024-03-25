import { useState } from "react";
import styled from "styled-components";

const Create = () => {
  const [formData, setFormData] = useState({
    writer: "",
    password: "",
    title: "",
    content: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <CreateContainer>
      <FormContainer onSubmit={handleSubmit}>
        <WriterContainer>
          <Writer type="text" user placeholder="이름" />
          <Password
            type="password"
            placeholder="비밀번호"
            autoComplete="current-password"
          />
        </WriterContainer>
        <CreateTitle placeholder="제목을 입력해주세요." />
      </FormContainer>
    </CreateContainer>
  );
};

export default Create;

const CreateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const WriterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Writer = styled.input`
  width: 40%;
  height: 3rem;
  border-radius: 1rem;
  border: 0.1rem solid black;
  padding: 0 0.5rem;
  font-size: 1rem;
  outline: none;
`;

const Password = styled.input`
  width: 40%;
  height: 3rem;
  border-radius: 1rem;
  border: 0.1rem solid black;
  padding: 0 0.5rem;
  font-size: 1rem;
  outline: none;
`;

const CreateTitle = styled.input`
  width: 83%;
  height: 3rem;
  border-radius: 1rem;
  border: 0.1rem solid black;
  padding: 0 0.5rem;
  font-size: 1rem;
  outline: none;
`;
