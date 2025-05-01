import { useState } from "react";

import {
  selectOptions,
  genderOption,
  educationOptions,
  hobbyOptions,
} from "./reactFormdata";

import FormInputField from "./FormInputField";

const FormAdvance = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    education: [],
    hobbies: [],
    gender: "",
    option: "React",
    review: "",
  });
  const [error, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      if (type == "checkbox") {
        let arrayField = name === "education" ? "education" : "hobbies";

        return {
          ...prev,
          [arrayField]: checked
            ? [...prev[arrayField], value]
            : prev[arrayField].filter((item) => item !== value),
        };
      }
      return { ...prev, [name]: value };
    });
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name Field is required";
    if (!formData.lastName.trim())
      newErrors.lastName = "last Name Field is required";

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/))
      newErrors.email = "Email is invalid";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (formData.education.length == 0)
      newErrors.education = "Please select at least one field";
    if (formData.hobbies.length == 0)
      newErrors.hobbies = "Please select at least one field";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationError = validateForm();

    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
      return;
    }
    console.log(
      `My first name is ${formData.firstName} and last name is ${formData.lastName}. ` +
        `My email id is ${formData.email}. I am skilled with ${formData.option}. ` +
        `I am a ${formData.gender}. My education are ${formData.education.join(
          ", "
        )} ` +
        `My hobbies are ${formData.hobbies.join(", ")}. My review is ${
          formData.review
        }`
    );
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      option: "React",
      gender: "",
      education: [],
      hobbies: [],
      review: "",
    });
    setErrors({});
  };

  return (
    <form
      className="flex flex-col justify-center items-center  border-2 "
      onSubmit={handleSubmit}
    >
      <legend>
        <h1 className="text-3xl font-bold my-5">
          Fill the advance and Optimize form!!
        </h1>
      </legend>
      <div>
        <div>
          <FormInputField
            error={error.firstName}
            label="First Name"
            name="firstName"
            value={formData.firstName}
            handleChange={handleChange}
          />
        </div>
        <div>
          <FormInputField
            label="Last Name"
            name="lastName"
            error={error.lastName}
            value={formData.lastName}
            handleChange={handleChange}
          />
        </div>
        <div>
          <FormInputField
            label="Email"
            error={error.email}
            name="email"
            value={formData.email}
            handleChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="option" className="mb-1 mr-2 my-2">
            Select Technology:
          </label>
          <select
            id="option"
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="border rounded-xl p-1"
          >
            {selectOptions.map((element) => (
              <option key={element.value}>{element.label}</option>
            ))}
          </select>
        </div>
        <div className="flex my-2">
          <label className="mb-1 mr-3">Hobbies: </label>
          {hobbyOptions.map((element, index) => (
            <div key={index} className="flex gap-1 mx-2">
              <input
                id={element.value}
                type={element.type}
                value={element.value}
                checked={formData.hobbies.includes(element.value)}
                name="hobbies"
                onChange={(e) => handleChange(e)}
              />
              <label
                htmlFor={element.value}
                className="flex items-center gap-1"
                key={element.value}
              >
                {element.value.charAt(0).toUpperCase() + element.value.slice(1)}
              </label>
            </div>
          ))}
          {error.hobbies && (
            <span className="text-red-500 text-sm ml-2">{error.hobbies}</span>
          )}
        </div>
        <div className="flex my-2 ">
          <label className="mb-1 mr-3">Education: </label>
          {educationOptions.map((element, index) => (
            <div key={index} className="flex gap-1 mx-2">
              <input
                id={element.value}
                type={element.type}
                checked={formData.education.includes(element.value)}
                value={element.value}
                name="education"
                onChange={(e) => handleChange(e)}
              />
              <label
                htmlFor={element.value}
                className="flex items-center gap-1"
                key={element.value}
              >
                {element.value.charAt(0).toUpperCase() + element.value.slice(1)}
              </label>
            </div>
          ))}
          {error.education && (
            <span className="text-red-500 text-sm  ml-2">
              {error.education}
            </span>
          )}
        </div>
        <div className="flex my-2">
          <label className="mb-1 mr-3">Gender: </label>
          {genderOption.map((element, index) => (
            <div key={index} className="flex gap-1 mx-4">
              <input
                className="mx-1"
                type="radio"
                value={element.value}
                name="gender"
                onChange={handleChange}
              />
              <label className="mx-0" htmlFor="{element.value">
                {element.value.charAt(0).toUpperCase() + element.value.slice(1)}
              </label>
            </div>
          ))}
          {error.gender && (
            <span className="text-red-500 text-sm  ml-2">{error.gender}</span>
          )}
        </div>
        <div>
          <label htmlFor="review">Comments: </label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="border rounded-md mt-4"
          />
        </div>
        <button
          type="submit"
          className="button p-2 px-4 rounded-xl text-center my-5 border-none bg-amber-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default FormAdvance;
