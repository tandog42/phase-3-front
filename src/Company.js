import React from "react";
import { useParams } from "react-router-dom";

function Company({ companies, setCompanies }) {
  let { id } = useParams();

  let comp = companies.find(com => com.id == id);
  return <h1 id="companyTitle">{comp.company_name}</h1>;
}
//useparams
//find
export default Company;
