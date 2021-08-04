import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import List from "./List/List";
import "./Lists.css";

interface Itask {
  taskNo: number;
  taskName: string;
}

const Lists = () => {
  const [taskCount, setTaskCount] = useState<number>(1);
  const [task, setTask] = useState<Itask>({
    taskNo: taskCount,
    taskName: "",
  });

  const [taskList, setTaskList] = useState<Itask[]>([]);

  const onClick = () => {
    setTaskList([...taskList, task]);
    setTask({
      taskNo: taskCount + 1,
      taskName: "",
    });
    setTaskCount(taskCount + 1);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleRemove = (taskNo: number) => {
    const newTaskList = taskList.filter((t) => t.taskNo !== taskNo);
    setTaskList(newTaskList);
  };

  return (
    <section>
      <h1
        style={{ fontSize: "3rem", fontWeight: "bold", color: "#443F79" }}
        className="mt-4 mb-5 text-center"
      >
        To Do App
      </h1>
      <div className="todo-main-div">
        {taskList.map((task) => (
          <List
            key={task.taskNo}
            taskNo={task.taskNo}
            taskName={task.taskName}
            handleRemove={handleRemove}
          />
        ))}
        <div className="input-group task-input">
          <input
            value={task.taskName}
            onChange={onChange}
            name="taskName"
            type="text"
            className="form-control border-0 rounded-0"
            placeholder="Add task"
          />
          <button
            onClick={onClick}
            className="btn rounded-1 ms-3"
            type="button"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Lists;
