import React from "react";
const FinalTaskRow = React.memo(({ task, onStartTask, onDeleteTask }) => {
  return (
    <>
      <tr>
        <td style={{ padding: "10px" }}>{task.name}</td>
        <td style={{ padding: "10px" }}>
          <input type="checkbox" />
          Pending/Completed
        </td>
        <td style={{ padding: "10px" }}>{task.count}</td>
        <td style={{ padding: "10px" }}>
          <button
            style={{
              backgroundColor: "green",
              color: "#fff",
              marginRight: "10px",
            }}
            onClick={() => onStartTask(task.id)}
          >
            Start
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "#fff",
            }}
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
});
export default FinalTaskRow;
