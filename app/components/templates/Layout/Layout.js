/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import {
  StatusBar, View, ImageBackground, Platform
} from 'react-native'

// images
import bkg from '../../../assets/images/bkg.png'

// styles
import { helpers } from '../../atoms'

const Layout = props => {
  const { gradient, hidden, children } = props

  let status_bar = { hidden: hidden, barStyle: 'light-content' }
  let image = { source: bkg, style: { height: '100%', width: '100%' } }

  return (
    <View style={helpers.ada_container}>
      {
        Platform.OS === 'ios' &&
        <StatusBar {...status_bar} />
      }
      {
        gradient
          ? (
            <ImageBackground {...image}>
              {children}
            </ImageBackground>
          )
          : { children }
      }
    </View >
  )
}

export default Layout
