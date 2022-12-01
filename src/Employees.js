import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

function Employees({ companies, setCompanies }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/employees")
      .then(r => r.json())
      .then(allemployees => {
        setEmployee(allemployees);
      });
  }, []);

  function onSubmitHandler(e) {
    e.preventDefault();
    const newEmployee = {
      first_name: firstName,
      last_name: lastName,
      position: position,
      salary: salary,
    };
    fetch("http://localhost:9292/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    })
      .then(r => r.json())
      .then(newEmp => {
        setEmployee([...employee, newEmp]);
      });
  }

  return (
    <div className="employee-container">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employee.map(emp => (
            <tr>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.position}</td>
              <td>${emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add a Employee</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={firstName}
          required="required"
          onChange={e => setFirstName(e.target.value)}
          placeholder=" Enter a First Name"
        />
        <input
          type="text"
          value={lastName}
          required="required"
          onChange={e => setLastName(e.target.value)}
          placeholder=" Enter a Last Name"
        />
        <input
          type="text"
          value={position}
          required="required"
          onChange={e => setPosition(e.target.value)}
          placeholder=" Enter a Position"
        />
        <input
          type="text"
          value={salary}
          required="required"
          onChange={e => setSalary(e.target.value)}
          placeholder=" Enter a Salary"
        />
        <Button type="submit" className="submit-btn" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Employees;
