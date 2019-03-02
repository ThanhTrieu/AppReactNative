//import Expo from 'expo';
import React, { Component } from 'react';
import {Platform, FlatList} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Button,
  Icon,
  Title
} from 'native-base';
import styles  from './styles/styles';

export default class Headers extends React.Component {
    render(){
        return(
            <Header>
                <Left>
                    <Button transparent>
                    <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Demo API</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
        );
    }
}