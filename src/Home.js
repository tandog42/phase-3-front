import React from "react";
import Companybtn from "./Companybtn";
import CompanyForm from "./CompanyForm";
import Header from "./Header";
function Home({ setEmployees, companies, setCompanies }) {
  return (
    <div>
      <Header />
      <Companybtn companies={companies} />
      <CompanyForm
        setEmployees={setEmployees}
        companies={companies}
        setCompanies={setCompanies}
      />
    </div>
  );
}

export default Home;
