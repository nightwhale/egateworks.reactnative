import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

//import Button from '@ant-design/react-native/lib/button';

import { Button, Provider, Toast } from '@ant-design/react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Provider>
        <Button onPress={() => Toast.info('This is a toast tips')}>
          Start
        </Button>
      </Provider>
    );
  }
}