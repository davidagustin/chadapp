// packages
import { createStackNavigator } from 'react-navigation'

// atoms
import { BASE } from '../components/atoms'

// screens
import { SplashScreen, RegisterScreen, OnboardScreen } from '../components/screens'

const NoAuthStack = createStackNavigator(
  {
    // Splash: {
    //   screen: SplashScreen,
    //   path: '/'
    // },
    // Register: {
    //   screen: RegisterScreen,
    //   path: '/register',
    //   navigationOptions: {
    //     title: 'Create Account'
    //   }
    // },
    Onboard: {
      screen: OnboardScreen,
      path: '/onboard',
      navigationOptions: {
        title: 'Welcome'
      }
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
