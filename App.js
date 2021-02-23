import React from 'react';
import Search from "./src/components/Search";
import { SafeAreaView, View, StyleSheet, ListView } from 'react-native';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={Styles.body}>
      <View style={Styles.header}>
        <Search />
      </View>
        <View style={Styles.bottom}>
          <Card/>
        </View>
    </View>
  );
}
const padding_number = 15;

const Styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FC634E',
    flex: 1,
    paddingLeft: padding_number,
    paddingRight: padding_number,
    paddingTop: 30,
    borderRadius: 15,
  },
  bottom: {
    flex: 7,
    backgroundColor: '#fff'
  }
})
