/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View,
    NativeModules,
    DeviceEventEmitter
} from 'react-native';

var Splash = require('./src/Splash');
var Home = require('./src/Home');

var Communication = NativeModules.communication;
var titan = React.createClass({

    getInitialState: function () {
        return {
            splashed: false,
        };
    },

    //componentWillMount: function() {
    //    DeviceEventEmitter.addListener('test', function(event) {
    //        Communication.js2Native(event);
    //        console.log('hahhahhaahha');
    //    });
    //},

    componentDidMount: function () {
        console.log('componetDidmount');
        //Communication.js2NativeCallback(function (msg) {
        //    Communication.js2Native(msg);
        //});

        setTimeout(
            () => {
                this.setState({splashed: true});
            },
            3000
        );
    },

    RouteMapper: function (route, navigation, onComponentRef) {
        return (
            <View style={styles.container}>
                <Home navigator={navigation}/>
            </View>
        );
    },

    render: function () {
        if (this.state.splashed) {
            var initialRoute = {name: 'home'};
            return (
                <Navigator
                    initialRoute={initialRoute}
                    renderScene={this.RouteMapper}
                />)
        } else {
            return (
                <Splash />);
        }

    }

})

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
    },
});

var circle = React.createClass({

    render: function () {
        return (
            <Text textAlign="center"> ~排行榜~ </Text>
        )
    }

})


AppRegistry.registerComponent('titan', () => titan);
AppRegistry.registerComponent('circle', () => circle);
