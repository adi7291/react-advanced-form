import { useState } from "react";

function Matrix() {
  const [row, setRow] = useState(1);
  const [col, setCol] = useState(1);

  const increaseRow = () => {
    setRow(row + 1);
  };
  const increaseCol = () => {
    setCol(col + 1);
  };

  return (
    <>
      <button style={{ margin: "10px", backgroundColor: "#849", color: "#fff" }} onClick={increaseRow} > Increase Row</button>
      <button style={{ margin: "10px", backgroundColor: "#549", color: "#fff" }} onClick={increaseCol}>Increase Column</button>
     <div>
        {[...Array(row)].map((_, rowIndex) => {
          return (
            <div style={{ display: "flex", gap: "5px" }} key={rowIndex}>
              {[...Array(col)].map((_, colIndex) => {
                return (
                  <div
                    key={colIndex}
                    style={{
                      display: "flex",
                      border: "1px solid red ",
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
      </div>
    </>
  );
}
export default Matrix;
