import React from 'react';
import { Text, KeyboardAvoidingView, View, } from 'react-native';
import { WebBrowser } from 'expo';

// atoms
import Layout from '../../atoms/components/Layout';
import Wrapper from '../../atoms/components/Wrapper';

// styles
import helpers from '../../atoms/style/helpers.style';
import ads_splash from '../style/Splash.style';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Layout gradient={true}>
        <Wrapper keyboard style={[ads_splash.wrapper]}>
          {/* logo text and tagline */}
          <View style={[helpers.ada_div, ads_splash.div]}>
            <Text style={ads_splash.heading}>Chad</Text>
            <Text style={ads_splash.subheading}>
              Message anyone in world, through location based chatrooms.
            </Text>
          </View>
        </Wrapper>
      </Layout>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}