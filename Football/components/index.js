//import Expo from 'expo';
import React, { Component } from 'react';
import {Platform, FlatList, View} from 'react-native';
import {
  Container
} from 'native-base';
import Headers from './header';
import Search from './search';
import ListViewData from './listviewData';
import Footers from './footer';

export default class managerComponents extends React.Component {
  render() {
    return (
      <Container>
        <Headers/>
        <Search/>
        <ListViewData dataSource={this.props}/>
        <Footers/>
      </Container>
    );
  }
}
