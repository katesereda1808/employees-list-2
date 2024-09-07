import 'react';
import { Employee } from '../../types/types';

const EmployeeCard = (employee: Employee ) => {
  // if (!employee) return;
  return (
    <div id={employee.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{employee.name}</h2>
      <p>Role: {employee.role}</p>
      <p>age: {employee.age}</p>
    </div>
  );
};


export default EmployeeCard;
