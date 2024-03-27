import { useState } from "react";
import styled from "styled-components";
import { createAPI } from "../api";
import SubmitButton from "../component/SubmitButton";

const Create = () => {
  const [formData, setFormData] = useState({
    writer: "",
    password: "",
    title: "",
    content: "abc",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createAPI(formData);
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
      <FormContainer onSubmit={(e) => handleSubmit(e)}>
        <WriterContainer>
          <Writer
            type="text"
            user
            placeholder="이름"
            name="writer"
            onChange={(e) => handleInputChange(e)}
          />
          <Password
            type="password"
            placeholder="비밀번호"
            autoComplete="current-password"
            name="password"
            onChange={(e) => handleInputChange(e)}
          />
        </WriterContainer>
        <CreateTitle
          placeholder="제목을 입력해주세요."
          name="title"
          onChange={(e) => handleInputChange(e)}
        />
      </FormContainer>
      <SubmitButton onClick={handleSubmit} />
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
  margin-top: 1rem;
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
