/* eslint-disable camelcase */
/* eslint-disable space-before-function-paren */

// packages
import React from 'react'
import { Image } from 'react-native'
import { ImagePicker } from 'expo'

// atoms
import { Button } from '../../atoms'

export default class ProfileImage extends React.Component {
  default_image = 'https://firebasestorage.googleapis.com/v0/b/chadnetworkbase.appspot.com/o/assets%2Fimages%2Flogo.png?alt=media&token=1de94e75-5ffe-42dc-8e20-e4f55b966d03'

  state = { image: this.default_image }

  choose_image = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    })

    console.log(result)

    if (!result.cancelled) {
      this.setState({ image: result.uri })
    }
  }

  render() {
    const { button_style, image_style } = this.props
    const { image } = this.state

    return (
      <Button style={button_style} onClick={async () => this.choose_image}>
        <Image source={{ uri: image }} style={image_style} />
      </Button>
    )
  }
}
