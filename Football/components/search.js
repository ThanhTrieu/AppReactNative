//import Expo from 'expo';
import React, { Component } from 'react';
import {Platform, FlatList} from 'react-native';
import {
  Container,
  Header,
  Text,
  Button,
  Icon,
  Title,
  Input,
  Item,
} from 'native-base';
import styles  from './styles/styles';

export default class Search extends React.Component {
    render(){
        return(
            <Header searchBar rounded style={styles.searchHeader}>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
        );
    }
}