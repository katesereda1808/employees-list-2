import React from 'react';
import { EMPLOYEES } from '../../data/data'; // Import the array of employees
import EmployeeCard from '../employee-card/EmployeeCard'; // EmployeeCard component
import styles from './EmployeeList.module.css';


interface EmployeeListProps {
  searchTerm: string; // Explicitly define searchTerm as a string
}

const EmployeeList: React.FC<EmployeeListProps> = ({ searchTerm }) => {
  // Filter employees based on search term (case-insensitive)
  const filteredEmployees = EMPLOYEES.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.listContainer}>
      {filteredEmployees.length > 0 ? (
        filteredEmployees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
};

export default EmployeeList;