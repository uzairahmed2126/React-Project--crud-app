import { useEffect, useState } from "react";
import InputData from "../InputsData";
function Inputs() {
  return (
    <div>
      <form id="hey">
        <input
          id="employee-name"
          type="text"
          placeholder="Employee Name"
          // value={formData.empName}
          // onChange={handleInputChange}
        />
        <input
          id="employee-age"
          type="number"
          placeholder="Employee Age"
          // value={formData.empAge}
          // onChange={handleInputChange}
        />
        <input
          id="employee-position"
          type="text"
          placeholder="Employee Position"
          // value={formData.empPosition}
          // onChange={handleInputChange}
        />
        <button type="submit">Add Item</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{formData.empName}</td>
            <td>{formData.empAge}</td>
            <td>{formData.empPosition}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// function Inputs() {
//   return <InputData a={"a"} b={"b"} c={"c"} />;
// }
export default Inputs;
