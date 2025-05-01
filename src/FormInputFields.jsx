const FormInputFields = ({
  label,
  name,
  handleChange,
  type = "text",
  value,
  error,
}) => {
  return (
    <div className="flex my-2 ">
      <label htmlFor={name} className="mb-1 mr-3">
        {label}:
      </label>
      <input
        className={`border rounded-xs p-1 ${
          error ? "border-red-500" : "border"
        }`}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <div>
        {error && <span className="text-red-500 text-sm  ml-2">{error}</span>}
      </div>
    </div>
  );
};
export default FormInputFields;
