import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Company from "./Company";

import Home from "./Home";
function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/companies")
      .then(r => r.json())
      .then(allCompanies => {
        setCompanies(allCompanies);
      });
  }, []);

  return (
    <div className="App">
     
      <Routes>
      <Route path = "/" element={<Home companies={companies} setCompanies={setCompanies} />}/>
      <Route path="/company/:id" element={<Company  companies={companies} setCompanies={setCompanies}/>} />
      
      </Routes>
    </div>
  );
}


//import routes
//setup routes for each component/ setup path
//passed state down to company comp
//
export default App;
