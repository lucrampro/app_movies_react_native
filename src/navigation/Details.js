import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getDetailsMovies } from "../../Network";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Details({navigation, route}) {
    const [informationMovie, setInformationMovie] = useState({});
    useEffect(() => {
        getDetailsMovies(route.params.id).then( response => {
            setInformationMovie(response)
        })
    }, [])
    return (
        <View style={styles.views}>
                {informationMovie.poster_path ? <Image
                resizeMode="cover"
                source={{
                uri: `https://image.tmdb.org/t/p/w500${informationMovie.poster_path}`,
                }}
                style={styles.backgroundPoster}
            ></Image> : null}
            <View style={styles.viewsPoster}>
                <View style={styles.poster}>
                    {informationMovie.poster_path ? <Image
                        source={{
                        uri: `https://image.tmdb.org/t/p/w500${informationMovie.poster_path}`,
                        }}
                        style={styles.posterLeft}
                    ></Image> : null}
                    <View style={styles.posterTitle}>
                        <Text style={styles.title}>
                            {informationMovie.title}
                        </Text>
                        <Text style={styles.originalTitle}>
                            {informationMovie.original_title}
                        </Text>
                    </View>
                    <View style={styles.viewIcon}>
                        <Icon style={styles.icon} name='play' size='50' type="font-awesom" color="#fff" />
                    </View>
                </View>
            </View>

            <View style={styles.overviewViews}>
                <SafeAreaView style={styles.overviewScrollViews}>
                    <ScrollView style={styles.scrollViews}>
                        <Text style={styles.scrollViewText}> 
                            {informationMovie.overview}
                            {informationMovie.overview}
                            {informationMovie.overview}
                            {informationMovie.overview}
                            {informationMovie.overview}
                            {informationMovie.overview}
                        </Text>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    views: {
        flex: 1,
    },
    poster: {
        position:'relative',
        flex:1,
        paddingLeft:20,
        flexDirection: "row",
        height:150,
    },

    posterTitle:{
        flex:1,
        height: 100,
        paddingLeft:10,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:"flex-start",
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
    },
    originlaTitle:{
        fontWeight:'bold',
        fontSize:20,
    },
    backgroundPoster:{
        flex:1,
    },
    posterLeft: {
        marginTop:-50,
        borderWidth:5,
        borderColor:'#fff',
        borderRadius:10,
        width:110,
        height:160,
    },
    viewIcon:{
        position:"absolute",
        top:-30,
        left:300,
        right:0,
        bottom:0,
        width:90,
        height:90,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FC5C04',
    }, 
    icon:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
    },
    overviewViews:{
        flex:1,
        marginTop:50,
        padding:30,
        paddingTop:50,
    },
    ScrollView:{
        flex:1,
        backgroundColor:'#000',
    },
    scrollViewText:{
        flex:1,
        fontSize:17,
    },
});