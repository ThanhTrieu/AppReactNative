import React, {Component} from 'react';
import {View, Text, Image, Button, TouchableHighlight} from 'react-native';
import Styles from './styles/Styles1';
export default class Counter extends React.Component {
    render() {
        return(
            <View style={Styles.boxContent}>
                <View style={Styles.result}>
                    <Text style={Styles.textResut}> {this.props.actionUsers.times} </Text>
                </View>
                <View style={Styles.caculate}>
                    <TouchableHighlight
                    style={Styles.submit}
                    onPress={() => {this.props.actionUsers.onIncrement(1)}}
                    underlayColor='#fff'>
                        <Text style={Styles.submitText}>Add + </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                    style={Styles.submit}
                    onPress={() => {this.props.actionUsers.onDecrement(1)}}
                    underlayColor='#fff'>
                        <Text style={Styles.submitText}>Minus - </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}