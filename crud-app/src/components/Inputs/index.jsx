import InputData from "../InputsData";
function Inputs() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("sdf");
  }
  return (
    <div>
      <form id="hey" onSubmit={handleSubmit}>
        <input id="employee-name" type="text" placeholder="Employee Name" />
        <input id="employee-age" type="number" placeholder="Employee Age" />
        <input
          id="employee-position"
          type="text"
          placeholder="Employee Position"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

// function Inputs() {
//   return <InputData a={"a"} b={"b"} c={"c"} />;
// }
export default Inputs;
