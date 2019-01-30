import { StyleSheet } from 'react-native';

import * as Colors from './colors.style';

// utility functions
import { size, percentage } from '../../../utilities/style.utilities';

import { WRAPPER_HEIGHT, WRAPPER_WIDTH } from './variables.style';

const helpers = StyleSheet.create({
  ada_container: {
    flex: 1
  },
  ada_content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: percentage(100)
  },
  ada_wrapper: {
    display: 'flex',
    height: WRAPPER_HEIGHT,
    width: WRAPPER_WIDTH
  },
  ada_div: {
    width: percentage(100)
  }
});

export default helpers;
