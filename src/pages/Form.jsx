const Form = (props) => {
  const cgpaFunc = props.cgpa >= 8 ? "successful" : "failed";

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Department: {props.dept}</p>
      <p>CGPA: {props.cgpa}</p>
      <p>{cgpaFunc}</p>
    </div>
  );
};

export default Form;
