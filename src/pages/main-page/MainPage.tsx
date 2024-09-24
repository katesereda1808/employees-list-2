// import { useState } from 'react'
import Filters from "../../UI/filters/Filters";
import EmployeeCard from "../../UI/employee-card/EmployeeCard";
import Search from "../../UI/search/Search";
import styles from './MainPage.module.css';
import { useState } from "react";
import EmployeeList from "../../UI/employee-list/EmployeeList";

function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.employeesList}>
      <Search onSearchChange={handleSearchChange} />
      <EmployeeList searchTerm={searchTerm} />
        {/* {EMPLOYEES.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        )) } */}
      </div>
      <Filters/>
    </div>
  )
}

export default EmployeesPage;
