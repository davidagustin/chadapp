// packages
import { StyleSheet } from 'react-native'

// modules
import { percentage } from '../../../utilities'

/**
 * @file Manages a set of helper styles for the application.
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

const helpers = StyleSheet.create({
  ada_container: {
    flex: 1
  },
  ada_content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: percentage(100)
  },
  ada_div: {
    width: percentage(100)
  }
})

export default helpers
