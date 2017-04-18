import React, { Component } from 'react';
import {StyleSheet, Button} from 'react-native';

var counter = 0;

export default class GlobalCounterRender__GlobalButton extends Component {
  render() {
    return (
      <Button
        onPress={() => {
          counter = counter + 1;
        }}
        title={counter + ' (click to count with global)'}
        style={styles.button}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 30,
  },
});

