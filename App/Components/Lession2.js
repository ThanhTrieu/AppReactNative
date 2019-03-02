import React, { Component } from 'react';
import {View, Text, Image, Button, TouchableHighlight} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Styles from './styles/Styles1';

export default class Lession extends React.Component {
    render(){
        return(
            <View style={Styles.container}>
                <View style={Styles.content}>
                    <Header/>
                    {/* name call props of components */}
                    <Content name="123"/>
                    {/* 23 call props childen */}
                    {/* <Content>23</Content> */}
                </View>
                <Footer/>
            </View>
        );
    }
}