import { useState } from "react";

const MatrixObject = () => {
  const [data, setData] = useState({
    row: 1,
    col: 1,
  });

  const IncreaseRow = () => {
    setData((prev) => {
      return { ...prev, row: prev.row + 1 };
    });
  };
  const IncreaseCol = () => {
    setData((prev) => {
      return { ...prev, col: prev.col + 1 };
    });
  };
  // console.log(data.row, data.col);
  return (
    <>
      <button
        style={{ margin: "10px", backgroundColor: "#849", color: "#fff" }}
        onClick={IncreaseRow}
      >
        Increase Row
      </button>
      <button
        style={{ margin: "10px", backgroundColor: "#549", color: "#fff" }}
        onClick={IncreaseCol}
      >
        Increase Col
      </button>
      {[...Array(data.row)].map((_, rowIndex) => {
        return (
          <div style={{ display: "flex", margin: "10px" }}>
            {[...Array(data.col)].map((_, colIndex) => {
              return (
                <div
                  style={{
                    border: "1px solid red",
                    padding: "5px",
                    margin: "5px",
                  }}
                >
                  {rowIndex}
                  {colIndex}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
export default MatrixObject;
