import React, { useState } from "react";

function EditRow({ emp, setEmployees }) {
  const [firstName, setFirstName] = useState(emp.first_name);
  const [lastName, setLastName] = useState(emp.last_name);
  const [salary, setSalary] = useState(emp.salary);
  const [position, setPosition] = useState(emp.position);

  const editFormData = {
    first_name: firstName,
    last_name: lastName,
    salary: salary,
    position: position,
  };

  function editEmployeeOnSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/employees/${emp.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editFormData),
    })
    .then(r=> r.json())
    .then(editedEmployee => console.log(editedEmployee));
  }

  return (
    <tr key={emp.id}>
      <td>
        <input
          value={firstName}
          type="text"
          required="required"
          placeholder="First Name..."
          name="first_name"
          onChange={e => setFirstName(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          value={lastName}
          type="text"
          required="required"
          placeholder="Last Name..."
          name="last_name"
          onChange={e => setLastName(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          value={position}
          type="text"
          required="required"
          placeholder="Position..."
          name="position"
          onChange={e => setPosition(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          value={salary}
          type="text"
          required="required"
          placeholder="Salary..."
          name="salary"
          onChange={e => setSalary(e.target.value)}
        ></input>
      </td>
      <td>
        <button onSubmit={editEmployeeOnSubmit} type="submit">
          Save
        </button>
      </td>
    </tr>
  );
}

export default EditRow;
