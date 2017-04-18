import React, { Component } from 'react';
import {StyleSheet, Button} from 'react-native';

export default class GlobalCounterRender__StateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <Button
        onPress={() => this.setState({counter: this.state.counter + 1})}
        title={this.state.counter + ' (click to count with state)'}
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

