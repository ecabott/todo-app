import Spinner from "react-bootstrap/Spinner";
import ListTodo from "../components/ListTodo";
import { useContext, useEffect } from "react";
import { DataContext } from "../contexts";
import { API_SERVER } from "../constants";

function Todo() {
  const { loading, data, error, fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData(`${API_SERVER}/todos`);
  }, [fetchData]);

  if (loading)
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  if (error) return <div>{error?.message}</div>;

  return <>{data && <ListTodo todos={data} />}</>;
}

export default Todo;
