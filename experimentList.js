import React, {Component, PropTypes} from 'react';
import {View, Button} from 'react-native';

export default class ExperimentList extends Component {
  handleButtonPress(experiment) {
    this.props.setActiveExperiment(experiment);
  }

  render() {
    return (
      <View>
        {this.props.experiments.map(experiment => {
          return (
            <Button
              key={experiment.title}
              title={experiment.title}
              onPress={() => this.handleButtonPress(experiment)}
            />
          );
        })}
      </View>
    );
  }
}

ExperimentList.propTypes = {
  experiments: PropTypes.array.isRequired,
  setActiveExperiment: PropTypes.func.isRequired,
};
