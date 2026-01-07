import Form from "./Form";

function StudentData() {
  return (
    <div>
      <Form name="Kumudha" dept="CSE" cgpa={8.5} />
      <Form name="Happy" dept="CSE" cgpa={7.0} />
      <Form name="Annachi" dept="CSE" cgpa={8.2} />
    </div>
  );
}

export default StudentData;
