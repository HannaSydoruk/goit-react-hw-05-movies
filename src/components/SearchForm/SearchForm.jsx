import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmitHandler }) => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(searchParams.get('query') ?? '');
  }, [searchParams]);

  const onChangeHandler = e => {
    setSearch(e.currentTarget.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="searchValue"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={search}
        onChange={onChangeHandler}
      />
      <button type="submit" style={{ marginLeft: '20px' }}>
        search
      </button>
    </form>
  );
};

export default SearchForm;
