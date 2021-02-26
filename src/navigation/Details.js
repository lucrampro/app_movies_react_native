import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from "react-native-elements";
import { getDetailsMovies } from "../../Network";

export default function Details({navigation, route}) {
    const [informationMovie, setInformationMovie] = useState({});
    useEffect(() => {
        getDetailsMovies(route.params.id).then( response => {
            setInformationMovie(response)
        })
    }, [])
    return (
        <View>
            <View>
                <Image/>
            </View>

            <View>
                <View>
                    <Image>

                    </Image>
                    <Text>
                        {informationMovie.title}
                    </Text>
                    <Text>

                    </Text>
                </View>
                <View>
                    <Icon>

                    </Icon>
                </View>
            </View>

            <View>
                <SafeAreaView>
                    <Text>

                    </Text>
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({



})