import 'react';
import { Employee } from '../../types/types';
import styles from './EmployeeCard.module.css';

const EmployeeCard = (employee: Employee ) => {
  // if (!employee) return;
  return (
    <div className={styles.card} id={employee.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2 className={styles.cardTitle}>{employee.name}</h2>
      <p className={styles.cardRole}>Role: {employee.role}</p>
      <p className={styles.cardDepartment}>age: {employee.age}</p>
    </div>
  );
};


export default EmployeeCard;
