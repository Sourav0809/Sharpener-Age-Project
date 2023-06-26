import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Section from "./Section";
function App() {
  const [inputs, setNewInput] = useState([]);
  const [inputValidation, setInputValidation] = useState(true);
  const handelWrongInput = (values) => {
    setInputValidation(values);
  };
  const formSubmit = (updatedInputs) => {
    console.log(updatedInputs);
    setNewInput((oldInputs) => {
      return [...oldInputs, updatedInputs];
    });
  };
  // if the list is empty

  let displayContent = (
    <div className="empty-list-container">
      <h1 className="empty-list-heading"> No Person Listed</h1>
    </div>
  );
  if (inputs.length != 0) {
    displayContent = (
      <div className="main-conatiner">
        <div className="items-conatiner">
          {inputs.map((showInputs) => {
            return (
              <Section
                key={showInputs.id}
                name={showInputs.inputName}
                age={showInputs.inputAge}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return inputValidation ? (
    <>
      <Form
        onSubmitHandeler={formSubmit}
        onWrongInputHandeler={handelWrongInput}
      />
      {displayContent}
    </>
  ) : (
    <div className="wrong-age-container wrong-input">
      <div className="wrong-input-items">
        <h2>Age Must be above 18</h2>
        <button
          onClick={() => {
            setInputValidation(true);
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default App;
