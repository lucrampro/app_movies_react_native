import React from "react";
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'
import Details from './Details'
import ListResults from "../components/ListResult";
import AllMovies from "../screen/AllMovies";

export const MainNavigation = ({Stack}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" options={{title: '', headerTransparent: true,}} component={AllMovies} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
};