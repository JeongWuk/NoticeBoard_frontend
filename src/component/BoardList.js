import { useQuery } from "react-query";
import styled from "styled-components";
import { getBoardListAPI } from "../api";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const BoardList = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "boardList",
    getBoardListAPI
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      refetch();
    }
  }, [location.pathname, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data...</div>;
  }

  return (
    <>
      {data && (
        <BoardListContainer>
          {data.data.map((board, index) => (
            <BoardItem
              key={index}
              onClick={() => navigate(`/detail/${board.idx}`)}
            >
              <BoardTitle>{board.title}</BoardTitle>
              <BoardSubContainer>
                <BoardWriter>{board.writer}</BoardWriter>
                <BoardCreateDate>{board.date.slice(0, 10)}</BoardCreateDate>
              </BoardSubContainer>
            </BoardItem>
          ))}
        </BoardListContainer>
      )}
    </>
  );
};

export default BoardList;

const BoardListContainer = styled.ul`
  width: 90%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoardItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border: 0.1rem solid black;
`;

const BoardTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 0 1rem;
`;

const BoardSubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const BoardWriter = styled.div`
  font-size: 1rem;
`;

const BoardCreateDate = styled.div`
  font-size: 1rem;
`;
