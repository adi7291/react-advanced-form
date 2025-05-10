import { useState } from "react";
// I need to render dynamic input fields.
//need to have button to render list of dynamic input fields.
//handle the input fields add validation.
//each input field will have button to remove the input fields.

const DynamicInputFields = () => {
  const [dynamicInput, setDynamicInput] = useState([
    { id: Date.now(), value: "" },
  ]);
  const handleChange = (e, id) => {
    setDynamicInput((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, value: e.target.value } : field
      )
    );
  };

  const addFields = () => {
    console.log("field added", dynamicInput);
    setDynamicInput((prev) => [...prev, { id: Date.now(), value: "" }]);
  };
  const removeFields = (id) => {
    setDynamicInput(dynamicInput.filter((field) => field.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = dynamicInput.filter((field) => !field.value.trim());
    if (value.length > 0) {
      alert("the field is empty");
    }
    console.log(
      `there are ${
        dynamicInput.length
      } input field rendered and the input values are ${dynamicInput.map(
        (field) => Object.values(field)[1]
      )}`
    );
    setDynamicInput(
      dynamicInput.map((field) => (Object.values(field)[1] = ""))
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {dynamicInput.map((field) => (
          <div key={field.id}>
            <input
              placeholder="Add input value..."
              value={field.value}
              onChange={(e) => handleChange(e, field.id)}
            />
            <button
              type="button"
              onClick={() => removeFields(field.id)}
              disabled={dynamicInput.length === 1}
            >
              Remove Fields
            </button>
          </div>
        ))}
        <div>
          <button type="button" onClick={addFields}>
            Add Fields
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
export default DynamicInputFields;
