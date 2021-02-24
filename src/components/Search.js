import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput, View, StyleSheet} from "react-native";

export default class Search extends React.Component {
  render() {
      return ((
      <View style={styles.main_container}>
        <View style={styles.container}>
          <Icon style={styles.icon} name='search' size={24} color='black'/>
          <TextInput style={styles.textinput} placeholder='Titre du film'/>
        </View>
      </View>
))
}};

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 30,
    },
    container : {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#000',
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      paddingLeft: 15,
      backgroundColor: '#fff',
      borderRadius: 17,
    },
    textinput: {
        flex: 1,
        paddingLeft: 10,
    },

})


