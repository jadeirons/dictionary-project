import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";
import Definition from "./Definition";
import Image from "./Image";

export default function Dictionary() {
  let [searchTerm, setSearchTerm] = useState("");
  let [definition, setDefinition] = useState(null);
  let [image, setImage] = useState(null);

  function handleDictionaryResponse(response) {
    setDefinition(response.data[0]);
  }

  function handleImageResponse(response) {
    setImage(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    const imageApiKey =
      "563492ad6f917000010000017d6740801d0c416189dd728c93a9d032";
    const imageApiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=9`;
    const headers = { Authorization: `Bearer ${imageApiKey}` };
    axios.get(imageApiUrl, { headers: headers }).then(handleImageResponse);
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
      <Image image={image} />
    </div>
  );
}
