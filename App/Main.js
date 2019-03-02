import React from 'react';
import {View, StyleSheet} from 'react-native';
import Lession from './Basics/Lession1';
import Lession2 from './Basics/Lession2';
import LifeCyle from './LifeCyle/index';

// this is page controll the other folders
export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Lession2/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});