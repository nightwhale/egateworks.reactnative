import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Box extends React.Component {

  render() {
    return (
      <>
        <View>
          <Text>에기에작업요</Text>
        </View>
      </>
    );
  }
}