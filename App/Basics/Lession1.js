import React, { Component } from 'react';
import {View, Text, Image, Button, TouchableHighlight} from 'react-native';
import Styles from './styles/Styles1';

export default class Lession extends React.Component {
    // hande events
    constructor(props){
        super(props);
        this.state = {
            res : 0,
            add : 1,
            min : 1
        };
    }
    add (num) {
        num +=this.state.res;
        this.setState({res: num});
    }
    minus(num) {
       nums =this.state.res - num;
       this.setState({res:nums});
    }
    render(){
        return(
            <View style={Styles.container}>
                <View style={Styles.content}>
                    <View style={Styles.header}>
                        <Text style={Styles.logo}>This is Demo simple </Text>
                    </View>
                    <View style={Styles.boxContent}>
                        <View style={Styles.result}>
                            <Text style={Styles.textResut}> {this.state.res} </Text>
                        </View>
                        <View style={Styles.caculate}>
                            <TouchableHighlight
                            style={Styles.submit}
                            onPress={() => this.add(1)}
                            underlayColor='#fff'>
                                <Text style={Styles.submitText}>Add + </Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                            style={Styles.submit}
                            onPress={() => this.minus(1)}
                            underlayColor='#fff'>
                                <Text style={Styles.submitText}>Minus - </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={Styles.notification}>
                    <Text>Continute Updating....</Text>
                </View>
            </View>
        );
    }
}