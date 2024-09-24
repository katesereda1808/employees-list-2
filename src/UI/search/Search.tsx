import { useState } from 'react';
import styles from './Search.module.css';
import SearchIcon from '../../assets/search-icon.svg';

interface SearchProps {
  onSearchChange: (searchTerm: string) => void; // Callback to parent
}

const Search: React.FC<SearchProps> = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;
    setSearchTerm(newTerm);
    onSearchChange(newTerm); // Pass search term to parent
  };

  return (
    <div className={styles.searchBlock}>
      <div className={styles.inputContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Поиск сотрудника"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button>
          <img src={SearchIcon} alt="search btn" />
        </button>
      </div>
      <span className={styles.hint}>Например, Ивано Иван</span>
    </div>
  );
};

export default Search;
