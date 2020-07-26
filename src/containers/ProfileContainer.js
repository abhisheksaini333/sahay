/**
 * Sahay App
 * @author: Abhishek Saini
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.renderProfile = this.renderProfile.bind(this);
  }

  renderProfile() {
    const {
      listings,
    } = this.props;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>
          Profile Container
        </Text>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ paddingRight: 30 }}
          vertical
        >
          {this.renderProfile()}
        </ScrollView>
      </View>
    );
  }
}

ProfileContainer.propTypes = {
  listings: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 40,
  },
});
