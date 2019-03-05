// packages
import { createStackNavigator } from 'react-navigation'

// atoms
import { BASE } from './style'

// screens
import { SplashScreen, RegisterScreen, OnboardScreen } from '../components/screens'

const NoAuthStack = createStackNavigator(
  {
    // Splash: {
    //   screen: SplashScreen,
    //   path: '/',
    //   navigationOptions: {
    //     title: 'Getting Started'
    //   }
    // },
    // Register: {
    //   screen: RegisterScreen,
    //   path: '/register'
    // },
    Onboard: {
      screen: OnboardScreen,
      path: '/onboard',
    }
  },
  {
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: BASE.light,
      headerBackTitle: null
    }
  }
)

export { NoAuthStack }
