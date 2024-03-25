import styled from "styled-components";

const Create = () => {
  return (
    <CreateContainer>
      <Content />
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

const Content = styled.canvas`
  width: 100%;
  height: 10rem;
`;
