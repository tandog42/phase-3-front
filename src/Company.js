import React from "react";

import { useParams } from "react-router-dom";

function Company({ companies, setCompanies }) {
  let { id } = useParams();

  let comp = companies.find(com => com.id == id);
  return <div>
    <h1 id="companyHeader">{comp.company_name}</h1>
    </div>

}
//useparams
//find
export default Company;
