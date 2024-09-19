// import { useState } from 'react'
import Filters from "../../UI/filters/Filters";
import EmployeeCard from "../../UI/employee-card/EmployeeCard";
import Search from "../../UI/search/Search";
import { EMPLOYEES } from  "../../data/data";
import styles from './Employees.module.css';

function Employees() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.employeesList}>
        <Search/>
        {EMPLOYEES.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
          // employee.number, employee.name, employee.inn, employee.status, employee.role, employee.city, employee.birthday, employee.age, employee.gender
        )) }
      </div>
      <Filters/>
    </div>
  )
}

export default Employees;
