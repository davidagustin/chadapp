/**
 * Animation controller.
 *
 * @class Animation
 * @author Jacob Metzinger <jacob.adam.metzinger@gmail.com>
 */

 /* eslint-disable space-before-function-paren */

// packages
import { Animated } from 'react-native'

/* remember to leave JSDoc style comments for the class and methods */

export default class Animation {
  
	changeAppearance(element, value, duration) {
	  Animated.timing(element, {
	    toValue: value,
	    duration: duration
	  }).start()
	}

	translate(element, x, y, duration) {
	  Animated.timing(element, {
	    toValue: { x: x, y: y },
	    duration: duration
	  }).start()
	}
}