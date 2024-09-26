import { useState } from 'react';
import EmployeeCard from "../../UI/employee-card/EmployeeCard";
import Search from "../../UI/search/Search";
import Filters from "../../UI/filters/Filters";
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

  const handleApplyFilters = (filters: {
    citizenship: string;
    gender: string;
    role: string;
    contract: string;
  }) => {
    const filtered = EMPLOYEES.filter(employee => {
      const matchesCitizenship = !filters.citizenship || employee.citizenship === filters.citizenship;
      const matchesGender = !filters.gender || employee.gender === filters.gender;
      const matchesRole = !filters.role || employee.role.toLowerCase().includes(filters.role.toLowerCase());
      const matchesContract = !filters.contract || employee.contract === filters.contract;
  
      return matchesCitizenship && matchesGender && matchesRole && matchesContract;
    });
  
    setFilteredEmployees(filtered);
  };

  const handleClearFilters = () => {
    setFilteredEmployees(EMPLOYEES); // Reset to original employee list
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.employeesList}>
        <Search onSearch={handleSearch} />
        {filteredEmployees.length > 0 ? (
                filteredEmployees.map(employee => (
                  <EmployeeCard key={employee.id} employee={employee} />
                ))
              ) : (
                <div className={styles.notFound}>По запросу ничего не найдено</div>
              )}
      </div>
      <Filters onApplyFilters={handleApplyFilters} onClearFilters={handleClearFilters} />
    </div>
  );
};

export default EmployeeList;