//import Expo from 'expo';
import React, { Component } from 'react';
import { Platform, FlatList, TouchableHighlight } from 'react-native';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text,
    Button,
    Icon,
    Title,
    Input,
    Item,
    Footer,
    FooterTab,
} from 'native-base';
import styles from './styles/styles';

export default class ListViewData extends React.Component {
    render(){
        return(
            <Content>
                <TouchableHighlight onPress={()=>{this.props.dataSource.onFetchAllDataPlayer('DESC')}}>
                    <Button block info>
                        <Text>Reresh Data</Text>
                    </Button>
                </TouchableHighlight>
                <List>
                    <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => (
                    <ListItem>
                        <Text>A</Text>
                    </ListItem>                    
                    )}
                    />
                </List>
            </Content>
        );
    }
}