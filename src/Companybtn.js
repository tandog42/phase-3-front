import { Button } from "@mui/material";
import React from "react";
import CompanyForm from "./CompanyForm";


function Companybtn({ companies, setCompanies }) {
 
  return (
    <div id="company">
      {companies.map(company => (
        <Button id="comBTN" key={company.city}>
          {company.company_name}
        </Button>
      ))}
      <CompanyForm companies={companies} setCompanies={setCompanies} />
    </div>
  );
}

export default Companybtn;
