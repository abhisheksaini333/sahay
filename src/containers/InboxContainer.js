/**
 * Sahay App
 * @author: Abhishek Saini
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class InboxContainer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>
Inbox Container
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
});
