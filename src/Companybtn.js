import { Button } from "@mui/material";
import React from "react";


function Companybtn({ companies}) {
 
  return (
    <div id="company">
      {companies.map(company => (
        <Button id="comBTN" key={company.city}>
          {company.company_name}
        </Button>
      ))}
     
    </div>
  );
}

export default Companybtn;
