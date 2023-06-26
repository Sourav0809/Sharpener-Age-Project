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

  const submitFormHandeler = (e) => {
    e.preventDefault();
    if (personName.trim() === "" || personAge.trim() === "") {
      alert("input Field can't be empty");
      return;
    } else if (personAge < 18) {
      props.onWrongInputHandeler(false);
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

  // if the input fields are wrong

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
    </div>
  );
};

export default Form;
