import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput, View, StyleSheet} from "react-native";

export default class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} leftIcon={
                    <Icon name='user' size={24} color='black'/>
                } placeholder='Titre du film'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 30
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        paddingLeft: 20,
        backgroundColor: '#fff',
        borderRadius: 17
    }
})
