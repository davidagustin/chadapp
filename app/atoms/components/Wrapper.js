// packages
import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

// styles
import helpers from '../style/helpers.style';


const Wrapper = props => {
  const { keyboard, children, style } = props;

  return (
    keyboard
      ? (
        <KeyboardAvoidingView
          style={[helpers.ada_wrapper, ...style]}
        >
          {children}
        </KeyboardAvoidingView>
      )
      : (
        <ScrollView contentContainerStyle={[helpers.ada_wrapper, ...style]}>
          {children}
        </ScrollView>
      )
  )
}

export default Wrapper;