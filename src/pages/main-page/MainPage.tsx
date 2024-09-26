import Filters from "../../UI/filters/Filters";
import styles from './MainPage.module.css';
import EmployeeList from "../../UI/employee-list/EmployeeList";

function EmployeesPage() {

  return (
    <div className={styles.pageContainer}>
      {/* <div className={styles.employeesList}> */}
      <EmployeeList />
      {/* </div> */}
      {/* <Filters/> */}
    </div>
  )
}

export default EmployeesPage;
