/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { Text, View } from 'react-native'

// atoms
import { Button } from '../../atoms'

// styles
import { helpers } from '../../../config/style'

import terms from './Terms.style'

const Terms = () => {
  return (
    <View style={terms.container}>
      <Text style={helpers.light_text}>
        By creating an account, I accept
      </Text>

      <Button>
        <Text style={[helpers.light_text, helpers.span]}>
          Chad's Terms of Service
        </Text>
      </Button>
    </View>
  )
}

export default Terms
