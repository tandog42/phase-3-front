import React, { useState } from "react";
import Button from "@mui/material/Button";
import ReadOnlyRow from "./ReadOnlyRow";
import EditRow from "./EditRow";
import { useParams } from "react-router-dom";
function Employees({ comp, companies, setCompanies }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [employees, setEmployees] = useState(comp.employees);
  const [editEmployee, setEditEmployee] = useState(null);
  let { id } = useParams();

  function onSubmitHandler(e) {
    e.preventDefault();
    const newEmployee = {
      first_name: firstName,
      last_name: lastName,
      position: position,
      salary: salary,
      company_id: id,
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
        const companiesNotChanging = companies.filter(
          company => company.id !== newEmp.company_id
        );
        const changingCompany = companies.filter(
          company => company.id === newEmp.company_id
        )[0];
        changingCompany.employees.push(newEmp);
        setCompanies([...companiesNotChanging, changingCompany]);
      });
  }
  const handleEditClick = (e, employees) => {
    e.preventDefault();
    setEditEmployee(employees.id);
  };

  return (
    <div className="employee-container">
      <form>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <>
                {editEmployee === emp.id ? (
                  <EditRow key={emp.id} emp={emp} setEmployees={setEmployees} />
                ) : (
                  <ReadOnlyRow
                    key={emp.id}
                    handleEditClick={handleEditClick}
                    emp={emp}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a Employee</h2>
      <form id="newEmployeeForm" onSubmit={onSubmitHandler}>
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
