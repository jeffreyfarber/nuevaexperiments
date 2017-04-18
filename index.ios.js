import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import ExperimentChooser from './experimentChooser.js';

export default class NuevaExperiments extends Component {
  render() {
    return <ExperimentChooser />;
  }
}

AppRegistry.registerComponent('NuevaExperiments', () => NuevaExperiments);
