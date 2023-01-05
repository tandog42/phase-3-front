import React from "react";
import Companybtn from "./Companybtn";
import CompanyForm from "./CompanyForm";
import Header from "./Header";
function Home({ companies, setCompanies }) {
  // Passing down State to CompanyBTN and CompanyForm
  return (
    <div>
      <Header />
      <Companybtn companies={companies} />
      <CompanyForm companies={companies} setCompanies={setCompanies} />
    </div>
  );
}

export default Home;
