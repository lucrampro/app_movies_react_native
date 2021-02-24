import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Search from "./src/components/Search";
import ListResults from "./src/components/ListResult";
import data from "./src/helpers/filmDatas";
import Network from './Network'
export default function App() {
  const [search_text, setsearch_text] = useState("");
  const [current_page, setcurrent_page] = useState(1);
  const [movies, setMovies] = useState([]);
  const [total_pages, settotal_pages] = useState(0);
  const [is_loading, setis_loading] = useState(false);
  

  const getSearchMovies = (searchedText) => {
    setsearch_text(searchedText);
    Network.getMovies(search_text, current_page, setMovies);
  };
  // SCRIPT
  useEffect(()=> {
    console.error(Network)
    Network.getMovies(search_text, current_page, setMovies);
  },[]);
  // TEMPLATE
  return (
    <>
      <Search
        search_text={search_text}
        onSearch={(searchedText) => getSearchMovies(searchedText)}
      />
      <ListResults
        is_loading={is_loading}
        movies={movies}
        searchedText={search_text}
      />
    </>
  );
}
