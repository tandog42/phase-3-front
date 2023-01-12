import React, { useState } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import EditRow from "./EditRow";

function EmployeeRows({ employees, setEmployees, setCompanies, companies }) {
  const [editEmployee, setEditEmployee] = useState(null);

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
                  <EditRow
                    setCompanies={setCompanies}
                    companies={companies}
                    key={emp}
                    emp={emp}
                    setEmployees={setEmployees}
                    setEditEmployee={setEditEmployee}
                  />
                ) : (
                  <ReadOnlyRow
                    key={emp}
                    employees={employees}
                    setEmployees={setEmployees}
                    handleEditClick={handleEditClick}
                    emp={emp}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default EmployeeRows;
