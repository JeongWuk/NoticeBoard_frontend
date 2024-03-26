import styled from "styled-components";

const BoardList = () => {
  return (
    <>
      <BoardListContainer></BoardListContainer>
    </>
  );
};

export default BoardList;

const BoardListContainer = styled.ul`
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoardItem = styled.li``;
