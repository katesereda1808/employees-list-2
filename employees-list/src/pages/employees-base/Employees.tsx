// import { useState } from 'react'
import Filters from "../../UI/filters/Filters";
import Button from "../../UI/button/Button";
import EmployeeCard from "../../UI/employee-card/EmployeeCard";
import Search from "../../UI/search/Search";
import { EMPLOYEES } from  "../../data/data";

function Employees() {
  return (
    <div>
      <div>
        <Search/>
        <Button/>
        {EMPLOYEES.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        )) }
      </div>
      <Filters/>
    </div>
  )
}

export default Employees;
