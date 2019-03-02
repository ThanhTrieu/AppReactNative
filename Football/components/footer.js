//import Expo from 'expo';
import React, { Component } from 'react';
import { Platform, FlatList } from 'react-native';
import {
    Container,
    Text,
    Button,
    Icon,
    Footer,
    FooterTab,
} from 'native-base';
import styles from './styles/styles';

export default class Footers extends React.Component {
    render(){
        return(
            <Footer>
                <FooterTab>
                    <Button vertical>
                        <Icon name="apps" />
                        <Text>Apps</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button vertical active>
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}