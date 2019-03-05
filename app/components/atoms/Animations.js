import React from 'react'

import { Animated } from 'react-native'

/**
 * @file Often Used Animations.
 * @author Jacob Metzinger <jacob.adam.metzinger@gmail.com>
 */

export default class Animation extends React.Component{
  translate = (element, x, y, duration) => {
    Animated.timing(element, {
      toValue: { x: x, y: y },
      duration: duration
    }).start()
  }

  changeAppearance = (element, value, duration) => {
    Animated.timing(element, {
      toValue: value,
      duration: duration
    }).start()
  }
} 