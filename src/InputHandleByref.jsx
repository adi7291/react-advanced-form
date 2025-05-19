import { useState, useRef, useEffect } from "react";

function InputHandleByref() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [message, SetMessage] = useState(false);
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const handleChange = () => {
    setName(nameRef.current.value);
    setError("");
  };

  const handleClick = () => {
    if (!name.trim()) {
      setError("Please Enter the field!!");
      return;
    }

    console.log("Form Submitted", name);
    setName("");
    SetMessage(true);
  };

  return (
    <div>
      <h2>Input handled by ref</h2>

      {message ? (
        <div>Thank you!! We will be connecting soon...</div>
      ) : (
        <div>
          <label htmlFor="name">Name: </label>

          <input
            name="name"
            value={name}
            ref={nameRef}
            onChange={handleChange}
            style={{ padding: "10px" }}
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button onClick={handleClick}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default InputHandleByref;
