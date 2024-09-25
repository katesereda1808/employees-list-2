import { useState } from 'react';
import EmployeeCard from "../../UI/employee-card/EmployeeCard";
import Search from "../../UI/search/Search";
import { EMPLOYEES } from  "../../data/data";
import styles from './EmployeeList.module.css';

const EmployeeList = () => {
  const [filteredEmployees, setFilteredEmployees] = useState(EMPLOYEES);

  const handleSearch = (searchTerm: string) => {
    const searchResults = EMPLOYEES.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(searchResults);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.employeesList}>
        <Search onSearch={handleSearch} />
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;