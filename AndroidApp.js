/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var aImage = require('./dialog.png');
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        let aLongString = '我很长,显示不下怎么办?我很长,显示不下怎么办?我很长,显示不下怎么办?';
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    happy!<Image source={aImage} style={styles.imageInTextStyles}/>
                </Text>
                <Text style={styles.textStyle}>
                    忧伤!
                </Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        height: 45,
        width: 200,
        fontSize: 30,
        backgroundColor: 'gray'
    },

    textStyle: {
        fontSize: 20,
        textAlign: 'center'
        , color: 'blue'
    },
    imageInTextStyles:{
        width:600
        ,height:600
        ,resizeMode:'cover'
    }
});
