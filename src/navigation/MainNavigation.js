import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'
import Details from './Details'
import ListResults from "../components/ListResult";
import AllMovies from "../screen/AllMovies";

export const MainNavigation = ({Stack}) => {
    return (
        // <Stack.Navigation>
        //     <Stack.Screen name='Details' components={Details}></Stack.Screen>
        // </Stack.Navigation>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={AllMovies} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
};