/**
 * Variables experiment
 * Created by Jen
 */

import React, { Component } from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default class Variables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 5,
      y: 2,
      z: 1,
    };
  }
  changeThings() {
    this.setState({
      x: this.state.y,
      z: 6,
      y: this.state.z,
    });
  }
  changeMoreThings() {
    this.setState({
      x: this.state.z - 2,
      y: Math.pow(this.state.x, 2),
      z: 3 % this.state.x,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.variableValue}>
          x is {this.state.x}
        </Text>
        <Text style={styles.variableValue}>
          y is {this.state.y}
        </Text>
        <Text style={styles.variableValue}>
          z is {this.state.z}
        </Text>
        <Button onPress={() => this.changeThings()} title="Change" />
        <Button onPress={() => this.changeMoreThings()} title="Change More" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  variableValue: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

