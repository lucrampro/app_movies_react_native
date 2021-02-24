import React from "react";
import { TextInput, View, StyleSheet, Button, Image } from "react-native";
import { Icon } from "react-native-elements";

export default class Search extends React.Component {
  render() {
    const { onSearch } = this.props;
    return (
      <View style={styles.main_container}>
        <View style={styles.search_content}>
          {/* <Image
                style={styles.moviePicture}
                source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png'}}></Image> */}
          <Icon name="search" size={30} />
          <TextInput
            style={styles.textinput}
            placeholder="Titre du film"
            onChangeText={(text) => onSearch(text)}
          />
          {/* <Button title='Rechercher' onPress={() => {}} color="#FC5C04"/> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#FC5C04",
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  textinput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  search_content: {
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderColor: "#000000",
    paddingHorizontal: 10,
  },
  moviePicture: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
