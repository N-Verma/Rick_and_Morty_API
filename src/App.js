import React, { useState, useEffect } from "react";
import "./styles.css";
import Display from "./components/Display/display";
import Filter from "./components/Filter/filter";
import Pagination from "./components/Pagination/pagination";

const App = () => {
  let [word, setWord] = useState("");
  let [list, setList] = useState([]);
  let [info, setInfo] = useState({});

  let url = "https://rickandmortyapi.com/api/episode/";

  let [urls, setUrl] = useState(url);

  const pageTwo = () => {
    document.querySelector(".pg2").classList.add("active");
    document.querySelector(".pg1").classList.remove("active");
    setUrl("https://rickandmortyapi.com/api/episode/?page=2");
  };
  const pageOne = () => {
    document.querySelector(".pg1").classList.add("active");
    document.querySelector(".pg2").classList.remove("active");
    setUrl("https://rickandmortyapi.com/api/episode/?page=1");
  };

  useEffect(() => {
    fetch(urls)
      .then(response => response.json())
      .then(response => {
        setList(response.results);
        setInfo(response.info);
      })
      .catch(err => {
        alert("This episode Name Dosent Exist");
      });
  }, [urls]);

  const handleChange = e => {
    setWord(e);
    let encodedWord = encodeURIComponent(word);
    setUrl(`https://rickandmortyapi.com/api/episode/?name=${encodedWord}`);
  };

  return (
    <div className="container">
      <h1>
        <b>Rick & Morty Episodes</b>
      </h1>
      <Filter value={word} handleChange={e => handleChange(e.target.value)} />
      <Display list={list} />
      <Pagination info={info} pageTwo={pageTwo} pageOne={pageOne} />
    </div>
  );
};
export default App;
