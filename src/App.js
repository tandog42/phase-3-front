import React, { useEffect, useState } from "react";
import Companybtn from "./Companybtn";
import Header from "./Header";
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
      <Companybtn companies={companies} setCompanies={setCompanies} />
    </div>
  );
}

export default App;
