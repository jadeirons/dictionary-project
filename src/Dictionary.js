import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchTerm}`);
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="Search"
          className="search"
          placeholder="Search for a word..."
          onChange={handleSearchTerm}
        ></input>
      </form>
    </div>
  );
}
