import React, { Component } from 'react';
import {Navigator, View} from 'react-native';
import ExperimentList from './experimentList.js';
import NavigationRouteMapper from './navigationRouteMapper.js';
import EXPERIMENTS from './experiments/index.js';

export default class ExperimentChooser extends Component {
  setActiveExperiment(navigator, experiment) {
    navigator.push({experiment: experiment});
  }

  goExperimentList(navigator) {
    navigator.pop();
  }

  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{ experiment: null }}
        renderScene={(route, navigator) => {
          if (! route.experiment) {
            return (
              <ExperimentList
                experiments={EXPERIMENTS}
                setActiveExperiment={(experiment) => this.setActiveExperiment(navigator, experiment)}
              />
            );
          }
          else {
            const activeExperiment = route.experiment;
            return (
              <View style={styles.experimentContainer}>
                <View style={styles.experimentBody}>
                  {activeExperiment.component}
                </View>
              </View>
            );
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navigationBar}
            routeMapper={NavigationRouteMapper}
          />
        }
      />
    );
  }
}

const styles = {
  navigator: {
    padding: 20,
    paddingTop: 70,
  },
  navigationBar: {
    backgroundColor: '#BBB',
    height: 55,
  },
  experimentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  experimentBody: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
};
