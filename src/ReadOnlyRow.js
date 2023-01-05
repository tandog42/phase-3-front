import React from "react";

function ReadOnlyRow({ employees, setEmployees, emp, handleEditClick }) {
  function onDeleteEmployee() {
    const deletedEmployee = employees.filter(
      employee => employee.id !== emp.id
    );
    setEmployees(deletedEmployee);
    fetch(`http://localhost:9292/employees/${emp.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "apllication/json",
      },
    });
  }
  return (
    <tr key={emp.id}>
      <td>{emp.first_name}</td>
      <td>{emp.last_name}</td>
      <td>{emp.position}</td>
      <td>${emp.salary}</td>
      <td>
        <button onClick={e => handleEditClick(e, emp)}>Edit</button>
        <button onClick={e => onDeleteEmployee()}>Delete</button>
      </td>
    </tr>
  );
}

export default ReadOnlyRow;
