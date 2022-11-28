import React, { useEffect, useState } from "react";
import Header from "./Header";
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
      <Header />
      <Home companies={companies} setCompanies={setCompanies} />
    </div>
  );
}


//import routes
//setup routes for each component/ setup path
//passed state down to company comp
//
export default App;
