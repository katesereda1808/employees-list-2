import styles from './Search.module.css';

function Search() {
  return (
    <div className={styles.searchBlock}>
      <input className={styles.searchInput} type="text" placeholder="Поиск сотрудника" />
      <span className={styles.hint}>Например, Ивано Иван</span>
    </div>
  );
}

export default Search;
