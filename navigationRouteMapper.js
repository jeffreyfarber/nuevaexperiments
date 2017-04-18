import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

const routeMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (! route.experiment) {
      return null;
    }
    else {
      return (
        <TouchableHighlight onPress={() => navigator.pop()}>
          <Text>Back</Text>
        </TouchableHighlight>
      );
    }
  },
  Title: (route, navigator, index, navState) => {
    if (route.experiment) {
      return <Text style={styles.experimentActive}>{route.experiment.title}</Text>;
    }
    else {
      return <Text>Choose an Experiment</Text>;
    }
  },
  RightButton: (route, navigator, index, navState) => {
    return null;
  },
};

const styles = {
  experimentActive: {
    fontWeight: 'bold',
    color: 'green',
  },
};

export default routeMapper;
