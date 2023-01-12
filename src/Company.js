import React from "react";

import { useParams } from "react-router-dom";
import NewEmployeeForm from "./NewEmployeeForm";


function Company({ companies, setCompanies }) {
  let { id } = useParams();

  let comp = companies.find(com => com.id == id);

  return comp ? (
    <div>
      <h1 id="companyHeader">{comp.company_name}</h1>
      <NewEmployeeForm
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
