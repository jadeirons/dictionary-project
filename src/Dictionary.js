import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Definition from "./Definition";

export default function Dictionary() {
  let [searchTerm, setSearchTerm] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Dictionary</h1>
        <form onSubmit={search}>
          <input
            type="Search"
            className="search"
            placeholder="Search for a word..."
            onChange={handleSearchTerm}
          ></input>
        </form>
      </section>

      <Definition definition={definition} />
    </div>
  );
}
