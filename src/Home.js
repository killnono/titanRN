/**
 * Created by killnono on 16/7/18.
 */
import React, { Component } from 'react';
import { View,
    ToastAndroid,
    Image,
    Text,
    Dimensions,
    StyleSheet} from 'react-native';


var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;

var Home = React.createClass({

    render: function () {
        return (
            <Text textAlign="center">Home Page </Text>
        )
    }
});

module.exports = Home;