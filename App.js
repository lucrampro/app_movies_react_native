// import React from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import MainNavigation from './src/navigation/MainNavigation';
// import Text from "react-native";

// export default function App() {
  
//   // TEMPLATE
//   return (
//     <NavigationContainer>
//       {/* <MainNavigation/> */}
//       <Text>a</Text>
//     </NavigationContainer>
//     // <>
//     // </>
//   );
// }
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { Details } from './src/navigation/Details';
import { MainNavigation } from './src/navigation/MainNavigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation Stack={Stack}/>
    </NavigationContainer>
  );
}