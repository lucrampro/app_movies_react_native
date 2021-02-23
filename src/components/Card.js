import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default class Card extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View>
                <Image
                resizeMode= 'contain'
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://fr.web.img6.acsta.net/pictures/17/10/10/04/58/2061488.jpg'
                    }}
                />
                </View>
                <View style={styles.text}>
                    <Text style={styles.title}>
                        Star Wars VIII - Les derniers Jedi
                    </Text>
                    <Text style={styles.date}>
                        2017-12-13
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 30,
        flexDirection: 'row',
    },
    tinyLogo : {
        width: 100,
        height: 100,
    },
    text : {
        flex: 1,
        height: 100,
    },
    title : {
        flex: 1,
        fontSize : 18,
        fontWeight: '700',
    },
    date : {
        flex: 1,
        fontSize : 18,
        color: 'grey',
    }
});