import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

export const Card = ({ movieTitle, releaseDate }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#FC5C04"
      onPress={() => alert("Pressed!")}
    >
      <View style={styles.main_container}>
        <View style={styles.image}>
          <Image
            resizeMode="contain"
            source={{
              uri:
                "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
            }}
            style={styles.movie}
          ></Image>
        </View>
        <View style={styles.description}>
          <Text style={styles.text_title}>{movieTitle}</Text>
          <Text style={styles.text_date}>{releaseDate}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flexDirection: "row",
    height: 155,
    paddingVertical: 10,
  },
  image: {
    width: 100,
    marginRight: 10,
  },
  description: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  movie: {
    flex: 1,
  },
  text_title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  text_date: {
    fontWeight: "300",
    color: "grey",
    fontSize: 18,
  },
});
