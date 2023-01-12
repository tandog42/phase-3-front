import React, { useState } from "react";
import Button from "@mui/material/Button";
import EmployeeRows from "./EmployeeRows";
import { useParams, useNavigate } from "react-router-dom";

function NewEmployeeForm({ comp, companies, setCompanies }) {
  const [employees, setEmployees] = useState(comp.employees);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();
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
       setEmployees(employees)
      });

    setFirstName("");
    setLastName("");
    setPosition("");
    setSalary("");
  }

  return (
    <div>
      <EmployeeRows
        setEmployees={setEmployees}
        employees={employees}
        comp={comp}
        companies={companies}
        setCompanies={setCompanies}
      />
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
        <Button type="submit" variant="contained">
          Submit
        </Button>
      <Button className="employeeForm-BTN" variant="outlined" onClick={()=> navigate("/")}>HOME</Button>
      </form>
    </div>
  );
}

export default NewEmployeeForm;
