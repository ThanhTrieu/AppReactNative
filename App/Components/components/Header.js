import React, {Component} from 'react';
import {View, Text, Image, Button, TouchableHighlight} from 'react-native';
import Styles from '../styles/Styles1';
export default class Header extends React.Component {
    render() {
        return(
            <View style={Styles.header}>
                <Text style={Styles.logo}>This is Demo simple </Text>
            </View>
        );
    }
}