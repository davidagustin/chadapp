import React from 'react';
import {
  StatusBar,
  View,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { WebBrowser } from 'expo';

// images
import bkg from '../assets/images/bkg.png';

// styles
import * as Helpers from '../style/helpers.style';

const Layout = props => {
  const { gradient, hidden, children } = props;

  return (
    <View style={Helpers.ada_container}>
      {
        Platform.OS === 'ios' &&
        <StatusBar hidden={hidden} barStyle="light-content" />
      }
      {
        gradient
          ? (
            <ImageBackground
              source={bkg}
              style={{ height: '100%', width: '100%' }}
            >
              {children}
            </ImageBackground>
          )
          : { children }
      }
    </View >
  );
}

export default Layout;