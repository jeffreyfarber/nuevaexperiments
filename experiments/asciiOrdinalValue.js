/**
 * Ascii Ordinal Values
 * Created by Jeff
 */

import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, TouchableHighlight, Linking} from 'react-native';

const CHART_URL = 'http://www.asciichart.com/';

export default class AsciiOrdinalValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char: null,
    };
  }

  setValue(stringValue) {
    const numberValue = parseInt(stringValue, 10);
    if (numberValue && numberValue >= 32 && numberValue <= 126) {
      this.setState({char: String.fromCharCode(numberValue)});
    }
    else {
      this.setState({char: null});
    }
  }

  goTranslationChart() {
    Linking.openURL(CHART_URL);
  }

  renderNoTranslationMessage() {
    return (
      <View>
        <Text style={styles.infoText}>Type a printable ordinal ASCII character value above!</Text>
        <TouchableHighlight
          onPress={() => this.goTranslationChart()}
        >
          <Text style={styles.link}>Click for a translation chart</Text>
        </TouchableHighlight>
      </View>
    );
  }

  renderCharacter() {
    return (
      <View>
        <Text>The ASCII translation is:</Text>
        <View style={styles.translatedCharacterContainer}>
          <Text style={styles.translatedCharacter}>
            {this.state.char}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChange={(event) => this.setValue(event.nativeEvent.text)}
          placeholder="ASCII Ordinal Value"
        />
        <View style={styles.resultContainer}>
          {this.state.char ? this.renderCharacter() : this.renderNoTranslationMessage()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    textAlign: 'center',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  translatedCharacterContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
  },
  translatedCharacter: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
  },
  infoText: {
    margin: 20,
  },
  link: {
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
    margin: 20,
  },
});

