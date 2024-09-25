import { useState } from 'react';
import styles from './Search.module.css';
import SearchIcon from '../../assets/search-icon.svg';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
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
        <button onClick={handleSearchClick}>
          <img src={SearchIcon} alt="search btn" />
        </button>
      </div>
    </div>
  );
};

export default Search;
