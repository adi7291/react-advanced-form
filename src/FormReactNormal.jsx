import { useState } from "react";

const FormReactNormal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState("React");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState([]);
  const [review, setReview] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOption(e.target.value);
  };
  const handleGender = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };

  const handleEducation = (e) => {
    setEducation((prev) => {
      if (prev.includes(e.target.value)) {
        return prev.filter((item) => item != e.target.value);
      } else {
        return [...prev, e.target.value];
      }
    });
  };

  const handleReview = (e) => {
    setReview(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(` My first name is ${firstName} and last name is ${lastName}. My email id is ${email}. \
      I am skilled with ${option}.I am a ${gender}.I have education of ${education.join(
      ","
    )}.
       My hobbies are ${hobbies.join(",")}.My review is ${review}`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setOption("");
    setGender("");
    setEducation([]);
    setReview("");
    setHobbies([]);
  };

  const handleHobbies = (e) => {
    setHobbies((prev) => {
      if (!prev.includes(e.target.value)) {
        return [...prev, e.target.value];
      } else {
        return prev.filter((item) => item != e.target.value);
      }
    });
  };

  return (
    <>
      <h1>Please Fill and submit the form!!</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" flex p-4 flex-col gap-5 my-5"
      >
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            className="border rounded-xs"
            type="text"
            value={firstName}
            onChange={(e) => handleFirstName(e)}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            className="border rounded-xs"
            type="text"
            value={lastName}
            onChange={(e) => handleLastName(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            className="border rounded-xs"
            type="text"
            value={email}
            onChange={(e) => handleEmail(e)}
          />
        </div>
        <div>
          <select value={option} onChange={(e) => handleSelect(e)}>
            <option value="react">React</option>
            <option value="js">Javascript</option>
            <option value="jquery">Jquery</option>
            <option value="viewJs">ViewJS</option>
          </select>
        </div>
        <div>
          <label>GENDER: </label>
          <input
            id="male"
            type="radio"
            value="male"
            name="gender"
            onChange={(e) => handleGender(e)}
          />
          <label className="mr-4 ml-1" htmlFor="male">
            Male{" "}
          </label>
          <input
            value="female"
            id="female"
            name="gender"
            onChange={(e) => handleGender(e)}
            type="radio"
          />
          <label className="mr-4 ml-1" htmlFor="female">
            Female{" "}
          </label>
          <input
            value="others"
            id="others"
            name="gender"
            onChange={(e) => handleGender(e)}
            type="radio"
          />
          <label className="mr-4 ml-1" htmlFor="others">
            Others
          </label>
        </div>
        <div>
          <label>Hobbies: </label>
          <input
            id="chess"
            type="checkbox"
            value="chess"
            name={hobbies}
            onChange={(e) => handleHobbies(e)}
          />
          <label className="mr-4 ml-1" htmlFor="chess">
            chess
          </label>
          <input
            value="cricket"
            id="checkbox"
            name={hobbies}
            onChange={(e) => handleHobbies(e)}
            type="checkbox"
          />
          <label className="mr-4 ml-1" htmlFor="cricket">
            cricket
          </label>
          <input
            value="football"
            id="football"
            name={hobbies}
            onChange={(e) => handleHobbies(e)}
            type="checkbox"
          />
          <label className="mr-4 ml-1" htmlFor="football">
            football
          </label>
          <input
            value="baseball"
            id="baseball"
            name={hobbies}
            onChange={(e) => handleHobbies(e)}
            type="checkbox"
          />
          <label className="mr-4 ml-1" htmlFor="baseball">
            baseball
          </label>
        </div>

        <div>
          <label>Education: </label>
          <input
            id="secondary"
            type="checkbox"
            value="secondary"
            name="education"
            onChange={(e) => handleEducation(e)}
          />
          <label className="mr-3 ml-1" htmlFor="secondary">
            Secondary
          </label>
          <input
            onChange={(e) => handleEducation(e)}
            id="ss"
            name="education"
            type="checkbox"
            value="ss"
          />
          <label className="mr-3 ml-1" htmlFor="ss">
            Senior Secondary
          </label>
          <input
            onChange={(e) => handleEducation(e)}
            id="diploma"
            type="checkbox"
            value="diploma"
            name="education"
          />
          <label className="mr-3 ml-1" htmlFor="diploma">
            Diploma
          </label>
          <input
            onChange={(e) => handleEducation(e)}
            id="Engineering"
            type="checkbox"
            value="eng"
            name="education"
          />
          <label className="mr-3 ml-1" htmlFor="Engineering">
            Engineering
          </label>
          <input
            onChange={(e) => handleEducation(e)}
            id="Masters"
            type="checkbox"
            value="maters"
            name="education"
          />
          <label className="mr-3 ml-1" htmlFor="Masters">
            Masters
          </label>
          <input
            onChange={(e) => handleEducation(e)}
            value="phd"
            id="Phd"
            type="checkbox"
            name="education"
          />
          <label className="mr-3 ml-1" htmlFor="Phd">
            Phd
          </label>
        </div>
        <div>
          <label htmlFor="message">Comments:</label>
          <textarea
            className="ml-2 border rounded-xs"
            value={review}
            onChange={(e) => handleReview(e)}
            type="textArea"
          />
        </div>

        <div>
          <button
            type="submit"
            className="border-none p-2 px-4 rounded-2xl bg-amber-300"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
export default FormReactNormal;
