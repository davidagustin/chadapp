/* eslint-disable camelcase */

// packages
import React from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'

// styles
import ada_wrapper from './wrapper.style'

const Wrapper = props => {
  const { keyboard, behavior, children, style } = props

  return (
    keyboard
      ? (
        <KeyboardAvoidingView
          style={[ada_wrapper.wrapper, style]}
          contentContainerStyle={[ada_wrapper.wrapper, style]}
          behavior={behavior}
        >
          {children}
        </KeyboardAvoidingView>
      )
      : (
        <ScrollView
          contentContainerStyle={[ada_wrapper.wrapper, style]}
        >
          {children}
        </ScrollView>
      )
  )
}

export default Wrapper
