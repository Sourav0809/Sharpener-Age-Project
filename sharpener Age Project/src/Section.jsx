import "./Section.css";
const Section = (props) => {
  return (
    <div className="list-container">
      <div className="list">
        <h1 className="items">{props.name}</h1>
        <h1 className="items">{props.age}</h1>
      </div>
    </div>
  );
};

export default Section;
