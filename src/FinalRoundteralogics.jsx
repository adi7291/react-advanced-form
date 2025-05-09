import { useCallback, useState } from "react";
import FinalTaskRow from "./FinalTaskRow";

//create input to add task in table.
//first column will have task list
//second column will have status with checkbox and completed pending
// third column will have timer
//forth column will have start and  Delete button
//when we click on start it will start the timer and
// after 10 sec the timer will stop and checkbox get checked and render as completed.

const TaskApp = () => {
  const [inputTask, setInputTask] = useState("");

  const [taskList, setTaskList] = useState([]);

  const handleInput = useCallback((e) => {
    console.log("keypress");
    setInputTask(e.target.value);
  }, []);

  const addTask = useCallback(() => {
    setTaskList((prev) => [
      ...prev,
      { id: Date.now(), name: inputTask, isPending: true, count: 0 },
    ]);
    console.log("task added", taskList);
    setInputTask("");
  }, [inputTask]);

  const onStartTask = (id) => {
    console.log(id);
    
  };
  const onDeleteTask = (id) => {
    let filteredList = taskList.filter((item) => item.id !== id);
    setTaskList(filteredList);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "20px", margin: "30px" }}>
        <input
          type="text"
          placeholder="Add tasks..."
          value={inputTask}
          onChange={handleInput}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <table BORDER="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>TASK</th>
            <th>STATUS</th>
            <th>TIMER</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task) => (
            <FinalTaskRow
              task={task}
              key={task.id}
              onStartTask={onStartTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TaskApp;
