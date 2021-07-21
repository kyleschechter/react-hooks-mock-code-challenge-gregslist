import React from "react";
import Search from "./Search";


function Header({ setSearch, handleSortClick }) {
  return (
    <header>
        <h1>
          <span className="logo" role="img">
            ☮
          </span>
          gregslist
        </h1>
        <Search 
        setSearch={setSearch}
        />
        <button onClick={handleSortClick}>Sort Locations</button>
    </header>
  );
}

export default Header;
