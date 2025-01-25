// function InputData({ employeeName, employeeAge, employeePosition }) {
//   return (
//     <div>
//       <p>{employeeName}</p>
//       <p>{employeeAge}</p>
//       <p>{employeePosition}</p>
//     </div>
//   );
// }

// export default InputData;
function InputData({ handleClick, a, b, c }) {
  return (
    <div>
      <p>{handleClick}</p>
      <p>{a}</p>
      <p>{b}</p>
      <p>{c}</p>
    </div>
  );
}
export default InputData;
