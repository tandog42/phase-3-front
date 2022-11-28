import React from 'react';
import Companybtn from './Companybtn';
import CompanyForm from './CompanyForm'
function Home({companies, setCompanies}) {
  return (
    <div>
      <Companybtn companies={companies}/>
      <CompanyForm companies={companies} setCompanies={setCompanies} />
    </div>
  )
}

export default Home