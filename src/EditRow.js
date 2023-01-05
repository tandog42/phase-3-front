import React, { useState } from "react";

function EditRow({
  companies,
  setCompanies,
  emp,
  setEditEmployee,
  setEmployees,
  employees,
}) {
  const [first_name, setFirstName] = useState(emp.first_name);
  const [last_name, setLastName] = useState(emp.last_name);
  const [position, setPosition] = useState(emp.position);
  const [salary, setSalary] = useState(emp.salary);
  console.log(first_name, last_name, position, salary);

  const newFormData = {
    id: emp.id,
    first_name: first_name,
    last_name: last_name,
    position: position,
    salary: salary,
  };
 

  function editEmployeeOnSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/employees/${emp.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFormData),
    })
      .then(r => r.json())
      .then(newData => {
        const newCompanies = companies.map(company => {
          if (company.id === newData.company_id) {
            const companyEmployees = company.employees.map(employee => {
              if (employee.id === newData.id) {
                return newData;
              } else {
                return employee;
              }
            });
            setEmployees(companyEmployees);

            company.employees = companyEmployees;
            return company;
          } else {
            return company;
          }
        });

        setCompanies(newCompanies);
      });

    setEditEmployee(null);
  }

  return (
    <tr key={emp.id}>
      <td>
        <input
          value={first_name}
          type="text"
          required="required"
          placeholder="First Name..."
          name="first_name"
          onChange={e => setFirstName(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          value={last_name}
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
        <button onClick={editEmployeeOnSubmit}>Save</button>
      </td>
    </tr>
  );
}

export default EditRow;
