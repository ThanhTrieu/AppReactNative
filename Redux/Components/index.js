import React, {Component} from 'react';
import {View, Text, Image, Button, TouchableHighlight} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import Styles from './styles/Styles1';

export default class ManagerComponent extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.content}>
                    <Header/>
                    <Counter actionUsers={this.props} />
                </View>
                <Footer/>
            </View>
        );
    }
}