// import { useState } from 'react'
import Filters from "../../UI/filters/Filters";
import Button from "../../UI/button/Button";
import EmployeeCard from "../../UI/employee-card/EmployeeCard";
import Search from "../../UI/search/Search";
import { EMPLOYEES } from  "../../data/data";

function Employees() {
  return (
    <div>
      <h1>Employees</h1>
      <Search/>
      <Filters/>
      <Button/>
      {EMPLOYEES.map((employee) => (
        // console.log('employee', employee);
        <EmployeeCard key={employee.id} employee={employee} />
      )) }
      {/* employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        )) */}
      {/* <EmployeeCard/> */}
    </div>
  )
}

export default Employees;
