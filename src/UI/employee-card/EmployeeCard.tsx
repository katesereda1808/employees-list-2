import 'react';
import { Employee } from '../../types/types';
import styles from './EmployeeCard.module.css';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({employee} ) => {
  // if (!employee) return;
  return (
    <div className={styles.cardContainer} id={employee.id}>
      <div className={`${styles.cardRow} ${styles.cardRowMainInfo}`}>
        <span className={styles.employeeName}>{employee.name}</span>
        <span className={styles.employeeINN}>ИНН {employee.inn}</span>
        <span className={styles.employeeContract}>{employee.status}</span>
        <span className={styles.employeeRole}>{employee.role}</span>
      </div>
      <div className={styles.cardRow}>
        <span className={styles.extraInfo}>{employee.citizenship} {employee.number}</span>
        <span className={styles.extraInfo}>{employee.city}</span>
        <span className={styles.extraInfo}>Дата рождения: {employee.birthday}</span>
        <span className={styles.extraInfo}>Возраст: {employee.age} {employee.age}</span>
        <span className={styles.extraInfo}>Пол: {employee.gender}</span>
      </div>
    </div>
  );
};


export default EmployeeCard;
