import 'react';
import { Employee } from '../../types/types';
import styles from './EmployeeCard.module.css';

const EmployeeCard = (employee: Employee ) => {
  // if (!employee) return;
  return (
    <div className={styles.cardContainer} id={employee.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <div className={styles.cardRow}>
        <span className={styles.employeeName}>Константинопольский Константин Константинович{employee.name}</span>
        <span className={styles.employeeINN}>ИНН 1234567890</span>
        <span className={styles.employeeContract}>СМЗ</span>
        <span className={styles.employeeRole}>промышленный альпинист {employee.role}</span>
      </div>
      <div className={styles.cardRow}>
        <span className={styles.extraInfo}>RU 4002 571654</span>
        <span className={styles.extraInfo}>г. Санкт-Петербург</span>
        <span className={styles.extraInfo}>Дата рождения: 23.06.2001</span>
        <span className={styles.extraInfo}>Возраст: 21 год {employee.age}</span>
        <span className={styles.extraInfo}>Пол: мужской</span>
      </div>
    </div>
  );
};


export default EmployeeCard;
