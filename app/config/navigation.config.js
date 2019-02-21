// packages
import { createStackNavigator } from 'react-navigation'

// atoms
import { BASE } from '../components/atoms'

// screens
import { SplashScreen, RegisterScreen } from '../components/screens'

const NoAuthStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      path: '/'
    },
    Register: {
      screen: RegisterScreen,
      path: '/register',
      navigationOptions: {
        title: 'Create Account'
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
