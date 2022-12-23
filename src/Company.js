import React from "react";

import { useParams } from "react-router-dom";
import Employees from "./Employees";

function Company({ companies, setCompanies }) {
  let { id } = useParams();

  let comp = companies.find(com => com.id == id);

  return comp ? (
    <div>
      <h1 id="companyHeader">{comp.company_name}</h1>
      <Employees
        comp={comp}
        companies={companies}
        setCompanies={setCompanies}
      />
    </div>
  ) : (
    <div></div>
  );
}

export default Company;
