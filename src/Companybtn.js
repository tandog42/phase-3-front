import { Button } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

function Companybtn({ companies }) {
  return (
    <div id="company">
      {companies.map(company => (
        <Link key={company.id} to={'company/' + company.id }>
        <Button id="comBTN" key={company.city}>
          {company.company_name}
        </Button>
          </Link>
      ))}
    </div>
  );
}

export default Companybtn;
