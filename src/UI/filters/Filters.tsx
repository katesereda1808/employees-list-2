import { useState } from 'react';
import styles from './Filters.module.css';
import Button from '../button/Button';

interface FiltersProps {
  onApplyFilters: (filters: {
    citizenship: string;
    gender: string;
    role: string;
    contract: string;
  }) => void;
  onClearFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({ onApplyFilters, onClearFilters }) => {
  const [citizenship, setCitizenship] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [contract, setContract] = useState('');

  const applyFilters = () => {
    onApplyFilters({ citizenship, gender, role, contract });
  };

  const clearFilters = () => {
    setCitizenship('');
    setGender('');
    setRole('');
    setContract('');
    onClearFilters();
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={`${styles.block} ${styles.addNewEmployeeBlock}`}>
        <Button
          className={styles.block}
          content="Добавить нового сотрудника"
          color="#00B6ED"
          onClick={clearFilters}
        />
      </div>
      <div className={`${styles.block} ${styles.filtersBody}`}>
        <h2 className={styles.filtersHeading}>Фильтр</h2>

        <div className={styles.filtersRow}>
          <div className={styles.filtersItem}>
            <label>Гражданство:</label>
            <select className={styles.filtersSelect} value={citizenship} onChange={(e) => setCitizenship(e.target.value)}>
              <option value="">Все страны</option>
              <option value="RU">Россия</option>
              <option value="TJ">Таджикистан</option>
            </select>
          </div>
          <div className={styles.filtersItem}>
            <label>Пол:</label>
            <select className={styles.filtersSelect} value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Без разницы</option>
              <option value="мужской">Мужской</option>
              <option value="женский">Женский</option>
            </select>
          </div>
        </div>

        <div className={styles.filtersRow}>
          <div className={styles.filtersItem}>
            <label>Должность:</label>
            <select className={styles.filtersSelect} value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="все">Все должности</option>
              <option value="промышленный альпинист">Промышленный альпинист</option>
            </select>
          </div>
        </div>

        <div className={styles.filtersRow}>
          <div className={styles.filtersItem}>
            <label>Тип договора:</label>
            <select className={styles.filtersSelect} value={contract} onChange={(e) => setContract(e.target.value)}>
              <option value="">Все</option>
              <option value="СМЗ">СМЗ</option>
              <option value="ГПХ">ГПХ</option>
            </select>
          </div>
        </div>

        <div className={styles.filtersRow}>
          <Button content="Применить" color="#00AE5B" onClick={applyFilters} />
          <Button content="Очистить" color="#84909B" onClick={clearFilters} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
