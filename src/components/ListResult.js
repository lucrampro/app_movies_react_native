import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { Card } from "./Card";
import { data } from "../helpers/filmDatas";

export default class ListResults extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            ItemSeparatorComponent={({ highlighted }) => (
              <View
                style={[styles.separator, highlighted && { marginLeft: 0 }]}
              ></View>
            )}
            style={{ flex: 1 }}
            data={movies}
            keyExtractor={(key) => String(key.id) + Math.random()}
            renderItem={(movies, key) => (
              <Card
                key={key}
                movieTitle={movies.item.title}
                releaseDate={movies.item.release_date}
              />
            )}
          />
        </View>
      </SafeAreaView>
      // <View style={styles.container}>
      //     <FlatList
      //     data={data}
      //     renderItem={({item}, key) => <Card key={key} movieTitle={item.title} releaseDate={item.release_date}/>}
      //   keyExtractor={({key}) => key}
      // />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    padding: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
});
