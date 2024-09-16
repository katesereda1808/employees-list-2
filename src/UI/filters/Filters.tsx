import styles from './Filters.module.css';
import Button from '../button/Button';


function Filters() {
  const applyFilters = (buttonName: string) => {
    alert(`${buttonName} button clicked!`);
  };
  const clearFilters = (buttonName: string) => {
    alert(`${buttonName} button clicked!`);
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={`${styles.block} ${styles.addNewEmployeeBlock}`}>
        <Button
        content="Добавить нового сотрудника"
        color="#00B6ED"
        onClick={() => clearFilters('gray')}
        />
      </div>
      <div className={`${styles.block} ${styles.filtersBody}`}>
        <h2>Фильтр</h2>
      <div className={styles.filtersRow}>
        <Button
        content="Применить"
        color="#00AE5B"
        onClick={() => applyFilters('Green')}
        />
        <Button
        content="Очистить"
        color="#84909B"
        onClick={() => clearFilters('gray')}
        />
      </div>
      </div>
    </div>
  );
}

export default Filters;
