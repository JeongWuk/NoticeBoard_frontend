import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getBoardItemAPI } from "../api";

const BoardItem = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(["boardItem", id], {
    queryFn: () => getBoardItemAPI(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data...</div>;
  }

  return (
    <>
      <div>{data.data[0].writer}</div>
      <div>{data.data[0].password}</div>
      <div>{data.data[0].title}</div>
    </>
  );
};

export default BoardItem;
