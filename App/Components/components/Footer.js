import React, {Component} from 'react';
import {View, Text, Image, Button, TouchableHighlight} from 'react-native';
import Styles from '../styles/Styles1';
export default class Footer extends React.Component {
    render() {
        return(
            <View style={Styles.notification}>
                <Text>Continute Updating....</Text>
            </View>
        );
    }
}