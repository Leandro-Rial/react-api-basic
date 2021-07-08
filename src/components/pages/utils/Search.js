import React from "react";

const Search = ({ setSearchTerm }) => {
  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input type="text" className="inputSearch" placeholder="Search..." onChange={onChange} />
    </>
  );
};

export default Search;
