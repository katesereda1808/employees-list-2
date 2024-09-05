// import { useState } from 'react'
import Filters from "../../UI/filters/Filters";
import Button from "../../UI/button/Button";
import EmployeeCard from "../../UI/employee-card/EmployeeCard";
import Search from "../../UI/search/Search";

function Employees() {
  return (
    <div>
      <h1>Employees</h1>
      <Search/>
      <Filters/>
      <Button/>
      <EmployeeCard/>
    </div>
  )
}

export default Employees
