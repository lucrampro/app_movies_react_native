import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Search from "../components/Search";
import ListResults from "../components/ListResult";
import data from "../helpers/filmDatas";
import {getMovies} from '../../Network'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function AllMovies({navigation}) {
  const [search_text, setsearch_text] = useState("");
  const [current_page, setcurrent_page] = useState(1);
  const [movies, setMovies] = useState([]);
  const [total_pages, settotal_pages] = useState(0);
  const [is_loading, setis_loading] = useState(false);

  const getSearchMovies = (searchedText) => {
    setsearch_text(searchedText);
    getMovies(searchedText, current_page).then(response => {
      console.log(response.results)
      setMovies(response.results);
    })
  };
  // SCRIPT
  useEffect(()=> {
    getMovies(search_text, current_page).then(response => {
      setMovies([...movies, ...response.results]);
      
    })
    
  }, [ current_page ] );

  function updatePage () { 
    setcurrent_page(current_page + 1)
    
  }

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
        updatePage={updatePage}
        navigation={navigation}
      />
    </>
  );
}
