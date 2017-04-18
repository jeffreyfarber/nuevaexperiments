/**
 * Global/state counter and rendering experiment
 * Created by Jeff
 */

import React, { Component } from 'react';
import {StyleSheet, Button, View} from 'react-native';
import StateButton from './globalCounterRender__stateButton.js';
import GlobalButton from './globalCounterRender__globalButton.js';

export default class GlobalCounterRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberButtonsState: 1,
      numberButtonsGlobal: 1,
    };
  }

  renderButtons(buttonType, numButtons) {
    var buttons = [];
    for (var i = 0; i < numButtons; i++) {
      if (buttonType === 'state') {
        buttons.push(<StateButton key={i} />);
      }
      else {
        buttons.push(<GlobalButton key={i} />);
      }
    }
    return (
      <View style={styles.displayButtonsContainer}>
        {buttons}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderButtons('state', this.state.numberButtonsState)}
        {this.renderButtons('global', this.state.numberButtonsGlobal)}
        <View style={styles.addButtonsContainer}>
          <Button
            onPress={() => this.setState({numberButtonsState: this.state.numberButtonsState + 1})}
            title="Add State"
            style={styles.button}
          />
          <Button
            onPress={() => this.setState({numberButtonsGlobal: this.state.numberButtonsGlobal + 1})}
            title="Add Global"
            style={styles.button}
          />
          <Button
            onPress={() => this.forceUpdate()}
            title="Force Re-render"
            style={styles.button}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButtonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  displayButtonsContainer: {
    margin: 10,
    backgroundColor: '#CCC',
  },
});

