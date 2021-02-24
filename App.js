import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Search from "./src/components/Search";
import ListResults from "./src/components/ListResult";
import data from "./src/helpers/filmDatas";

export default function App() {
  const [searchText, setSearchText] = useState("mon Text");
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState(data);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getSearchMovies = (searchedText) => {
    console.log(searchedText);
    const newMovies = data.filter((movie) =>
      movie.title.toLowerCase().includes(searchedText.toLowerCase())
    );
    setMovies(newMovies);
  };
  return (
    <>
      <Search
        searchText={searchText}
        onSearch={(searchedText) => getSearchMovies(searchedText)}
      />
      <ListResults
        isLoading={isLoading}
        movies={movies}
        searchedText={searchText}
      />
    </>
  );
}
