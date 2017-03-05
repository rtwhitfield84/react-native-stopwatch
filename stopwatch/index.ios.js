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
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
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
    {this.laps()}
    </View>
    </View>
  },
  laps: function() {
    return this.state.laps.map(function(time, index) {
      return <View>
        <Text>
          Lap#{index + 1}
        </Text>
        <Text>
          {formatTime(time)}
        </Text>
      </View>
    })
  },
  startStopButton: function(){
    var style =  this.state.running ? styles.stopButton : styles.startButton;

    return <TouchableHighlight onPress = {this.handleStartPress} 
    underlayColor="gray"
    style={[styles.button, style]}>
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight> 
  },
  lapButton: function() {
    return <TouchableHighlight onPress = {this.handleLapPress} 
    underlayColor="gray" style={styles.button}>
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
  },
  handleLapPress: function() {
    var lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  },
  handleStartPress: function() {
    if(this.state.running){
      clearInterval(this.interval);
      this.setState({running: false});
      return
  }

    this.setState({startTime: new Date()});
    //update state with new value
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true
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
  startButton: {
    borderColor: '#00CC00'
  }, 
  stopButton: {
    borderColor: '#CC0000'
  }
});

AppRegistry.registerComponent('stopwatch', () => Stopwatch);

