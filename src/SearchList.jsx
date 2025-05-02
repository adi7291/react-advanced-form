import { useState } from "react";

const list = [
  "katihar",
  "Bangalore",
  "Kolkata",
  "Bihar",
  "Jagaddal",
  "Kharda",
  "Ayodha",
  "Apple",
  "pinapple",
];

function SearchList() {
  const [filterList, setFilterList] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setFilterList(e.target.value);
  };

  let filterItem = list.filter((item) =>
    item.toLowerCase().includes(filterList.toLowerCase())
  );

  return (
    <>
      <input
        style={{ border: "1px solid black", padding: "15px", margin: "10px" }}
        placeholder="search something..."
        type="search"
        onChange={(e) => handleChange(e)}
      />
      {filterItem.map((item, index) => {
        return (
          <li
            style={{ listStyle: "none", fontSize: "20px", padding: "10px" }}
            key={index}
          >
            {item}
          </li>
        );
      })}
    </>
  );
}
export default SearchList;
