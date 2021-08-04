import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./List.css";

interface IProps {
  taskNo: number;
  taskName: string;
  handleRemove: (taskNo: number) => void;
}

const List = ({ taskNo, taskName, handleRemove }: IProps) => {
  const [taskDone, setTaskDone] = useState<boolean>(false);
  return (
    <div className="list-single-div">
      <div className={`${taskDone && "task-done"} task-name-single rounded-1`}>
        <h5 style={{ margin: "0" }}>{taskName}</h5>
      </div>
      <button
        className="btn task-done-btn ms-3"
        type="button"
        onClick={() => setTaskDone(!taskDone)}
      >
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button
        className="btn task-delete-btn ms-2"
        type="button"
        onClick={() => handleRemove(taskNo)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default List;
