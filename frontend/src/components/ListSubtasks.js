import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useContext } from "react";

import { API_SERVER } from "../constants";
import { DataContext } from "../contexts";

function ListSubtasks(props) {
  const { update, remove } = useContext(DataContext);
  const { subtasks } = props;
  return (
    <>
      <div>
        <Form>
          {subtasks?.map((subtask) => {
            return (
              <ButtonToolbar
                className="justify-content-between"
                key={subtask?._id}
              >
                <ButtonGroup className="me-2">
                  <Form.Check
                    type="checkbox"
                    checked={subtask?.status === "pending" ? false : true}
                    label={subtask?.title}
                    onChange={() =>
                      update(`${API_SERVER}/subtasks`, subtask?._id, {
                        status:
                          subtask?.status === "pending"
                            ? "completed"
                            : "pending",
                      })
                    }
                  />
                </ButtonGroup>
                <ButtonGroup className="mb-2">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() =>
                      remove(`${API_SERVER}/subtasks`, subtask?._id)
                    }
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            );
          })}
        </Form>
      </div>
    </>
  );
}

export default ListSubtasks;
