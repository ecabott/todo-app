import Button from "react-bootstrap/Button";
import { Accordion } from "react-bootstrap";
import MsgAlert from "./Alert";
import ListSubtasks from "./ListSubtasks";
import AddSubtask from "./AddSubtask";
import { API_SERVER } from "../constants";
import { useContext } from "react";
import { DataContext } from "../contexts";

function ListTodo(props) {
  const { remove } = useContext(DataContext);

  const { todos } = props;

  return (
    <>
      {todos && todos.length > 0 ? (
        <>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            {todos.map((todo) => {
              return (
                <Accordion.Item key={todo?._id} eventKey={todo?._id}>
                  <Accordion.Header>{todo?.title}</Accordion.Header>
                  <Accordion.Body>
                    {todo?.subtasks && todo?.subtasks.length > 0 ? (
                      <ListSubtasks subtasks={todo?.subtasks} />
                    ) : (
                      <MsgAlert msg="No Subtask Found. Add one to get started..." />
                    )}
                    <AddSubtask
                      todo={todo}
                      label="Add new Subtask"
                      placeholder="Eg: Submit Homework"
                      url={`${API_SERVER}/subtasks`}
                    />
                    <Button
                      variant="outline-danger"
                      onClick={() => remove(`${API_SERVER}/todos`, todo?._id)}
                    >
                      Delete
                    </Button>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </>
      ) : (
        <>
          <MsgAlert msg="No Task Found. Add one to get started..." />
        </>
      )}
    </>
  );
}

export default ListTodo;
