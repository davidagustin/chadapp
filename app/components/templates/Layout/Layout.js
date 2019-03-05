/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import {
  StatusBar, ScrollView, ImageBackground, Platform
} from 'react-native'

// images
import bkg from '../../../assets/images/bkg.png'

// styles
import { helpers } from '../../../config/style'

const Layout = props => {
  const { gradient, hidden, children } = props

  let status_bar = { hidden: hidden, barStyle: 'light-content' }
  let image = { source: bkg, style: { height: '100%', width: '100%' } }

  return (
    <ScrollView contentContainerStyle={helpers.ada_container}>
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
    </ScrollView >
  )
}

export default Layout
