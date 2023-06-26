import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  //input state
  const [personName, setPersonName] = useState("");
  const [personAge, setPersonAge] = useState("");

  const nameChangeHandeler = (e) => {
    setPersonName(e.target.value);
  };

  const ageChangeHandeler = (e) => {
    setPersonAge(e.target.value);
  };

  // if the input fields are wrong
  let wrongInput = false;
  const submitFormHandeler = (e) => {
    e.preventDefault();
    if (personName.trim() === "" || personAge.trim() === "") {
      wrongInput = true;
      return;
    }
    const submitDetails = {
      inputName: personName,
      inputAge: personAge,
      id: Math.random(),
    };
    props.onSubmitHandeler(submitDetails);
    setPersonName("");
    setPersonAge("");
  };

  return (
    <div className="conatiner">
      <form onSubmit={submitFormHandeler} className="main-form">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-input"
          value={personName}
          onChange={nameChangeHandeler}
        />
        <label className="form-label">Age</label>
        <input
          type="number"
          className="form-input"
          value={personAge}
          onChange={ageChangeHandeler}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="wrong-age-container wrong-input">
        <h2>Age Must be above 18</h2>
        <button>Ok</button>
      </div>
    </div>
  );
};

export default Form;
