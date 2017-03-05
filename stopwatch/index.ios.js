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
    <View style={[styles.header, this.border('yellow')]}>
    <View style={[styles.timeWrapper,this.border('red')]}>
      <Text>
        {formatTime(this.state.timeElapsed)}
      </Text>
    </View>
    <View style={[styles.buttonWrapper,this.border('green')]}>
       {this.startStopButton()}
       {this.lapButton()}
    </View>
    </View>

    <View style={[styles.footer, this.border('blue')]}>
      <Text>
        lap list
      </Text>
    </View>
    </View>
  },
  startStopButton: function(){
    return <TouchableHighlight onPress = {this.handleStartPress} 
    underlayColor="gray">
        <Text>
          Start
        </Text>
      </TouchableHighlight> 
  },
  lapButton: function() {
    return <View>
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
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
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
  }
});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);

