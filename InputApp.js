/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class App1 extends Component<{}> {
    render() {
        let aLongString = '我很长,显示不下怎么办?我很长,显示不下怎么办?我很长,显示不下怎么办?';
        return (
            <View style={styles.container}>

                <TextInput style={styles.textInputStyle}
                           defaultValue={'happy!Ajfg你好!1!'}/>
            </View>
        )

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
    textInputStyle: {
        width: 200
        , height: 70
        , fontSize: 50
        , alignItems: 'center'
        , justifyContent: 'center',
        backgroundColor: "blue"
    }
});
