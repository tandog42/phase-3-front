import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CompanyForm({ companies, setCompanies }) {
  const [compName, setCompName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();
    const newCompany = {
      company_name: compName,
      state: state,
      city: city,
    };

    fetch("http://localhost:9292/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCompany),
    })
      .then(r => r.json())
      .then(newSubmittedCompany => {
        const employeeArray = { employees: [] };
        const fullObj = Object.assign(newSubmittedCompany, employeeArray);

        setCompanies([...companies, fullObj]);
      });
  }

  return (
    <div id="company-input-form">
      <Box
        component="form"
        onSubmit={onSubmitHandler}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder="Company"
          value={compName}
          onChange={e => setCompName(e.target.value)}
          variant="outlined"
        />
        <br></br>
        <TextField
          id="outlined-basic"
          placeholder="State"
          value={state}
          onChange={e => setState(e.target.value)}
          variant="outlined"
        />
        <br></br>

        <TextField
          id="outlined-basic"
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
          variant="outlined"
        />
        <br></br>
        <Button type="submit" id="submit-btn" variant="contained">
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default CompanyForm;
