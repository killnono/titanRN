/**
 * Created by killnono on 16/7/15.
 */

'use strict';

import React, { Component } from 'react';
import { View,
    ToastAndroid,
    Image,
    Text,
    Dimensions,
    NativeModules,
    DeviceEventEmitter,
    StyleSheet} from 'react-native';


var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;

var YCRCTAbilityModule = NativeModules.YCRCTAbilityModule;

var Splash = React.createClass({

    componentWillMount: function() {
        //DeviceEventEmitter.addListener('test', function(event) {
        //    YCRCTAbilityModule.sendMsg(event)
        //    console.log('hahhahhaahha');
        //});
        YCRCTAbilityModule.sendMsg('yeyeyeyyeyeyye');
    },

    render: function () {
        YCRCTAbilityModule.getUserData(function(msg){
            YCRCTAbilityModule.sendMsg(msg);
        });
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../img/splash.png')}/>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    cover: {
        flex: 1,
        width: 200,
        height: 1,
    },
    logo: {
        resizeMode: 'cover',
        height: h,
        width: w,
        backgroundColor: 'transparent',
    },
    text: {
        flex: 2,
        fontSize: 16,
        textAlign: 'center',
        color: 'blue',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 10,
        backgroundColor: 'transparent',
    }
});

module.exports = Splash;