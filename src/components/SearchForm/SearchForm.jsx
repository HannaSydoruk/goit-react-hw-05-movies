import React from 'react';

const SearchForm = ({ onSubmitHandler }) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="searchValue"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;
