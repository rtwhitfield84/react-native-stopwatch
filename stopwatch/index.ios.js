var formatTime = require('minutes-seconds-milliseconds');
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


var Stopwatch = React.createClass({
  getInitialState: function() {
  //run by react when component created
    return {
      timeElapsed: null

    }
  },
  render: function() {
    return <View style={styles.container}>
    <View style={styles.header}>
    <View style={styles.timeWrapper}>
      <Text style={styles.timer}>
        {formatTime(this.state.timeElapsed)}
      </Text>
    </View>
    <View style={styles.buttonWrapper}>
       {this.startStopButton()}
       {this.lapButton()}
    </View>
    </View>

    <View style={styles.footer}>
      <Text>
        lap list
      </Text>
    </View>
    </View>
  },
  startStopButton: function(){
    return <TouchableHighlight onPress = {this.handleStartPress} 
    underlayColor="gray"
    style={[styles.button, styles.startbutton]}>
        <Text>
          Start
        </Text>
      </TouchableHighlight> 
  },
  lapButton: function() {
    return <View style={styles.button}>
        <Text>
          Lap
        </Text>
      </View>
  },
  handleStartPress: function() {
    var startTime = new Date();

    //update state with new value
    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'//deafult flex dir column
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timeWrapper: { //red
    flex: 5, //5/8 of space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {//green
    flex: 3, //3/8 of space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startbutton: {
    borderColor: '#00CC00'
  }
});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);

