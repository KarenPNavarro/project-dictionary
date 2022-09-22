import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000017e18d0a9b25c4685bd8e2ae9a4e2997d";
    let pexelsApiUrl =
      "https://api.pexels.com/v1/search?query=nature&per_page=1";
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form className="Dictionary-search" onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Search for a word"
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
