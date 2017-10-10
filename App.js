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
    View
} from 'react-native';

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
                <Text style={styles.textStyle}
                      numberOfLines={1}
                      ellipsizeMode='head'>
                    {aLongString}
                </Text>
                <Text style={styles.textStyle}
                      numberOfLines={1}
                      ellipsizeMode='middle'>
                    {aLongString}
                </Text>
                <Text style={styles.textStyle}
                      numberOfLines={1}
                      ellipsizeMode='tail'>
                    {aLongString}
                </Text>
                <Text style={styles.textStyle}
                      numberOfLines={1}>
                    {aLongString}
                </Text>
                <Text style={{
                    fontSize: 30,
                    textAlign: 'center'
                }}>
                    我是30号字体!!!
                    <Text style={{fontWeight: 'bold'}}>
                        {'\r\n'}我是加粗30号字体!!!


                        <Text style={{color: 'black'}}>
                            {'\r\n'}我是加粗黑色30号字体!!!


                        </Text>

                    </Text>

                </Text>

                <Text style={styles.baseStyle}>
                    我是30号字体!!!
                    <Text style={{fontWeight: 'bold'}}>
                        {'\r\n'}我是加粗30号字体!!!

                    </Text>
                </Text>
            </View>

    )
        ;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
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

    baseStyle: {
        fontSize: 20,
        textAlign: 'center'
        , color: 'blue'
        , textShadowOffset: {width: 5, height: 5}
        , textShadowRadius: 2
        , textShadowColor: 'red'

    }
});
