// packages
import { createStackNavigator } from 'react-navigation'

// atoms
import { BASE } from './style'

// screens
import { SplashScreen, RegisterScreen } from '../components/screens'

const NoAuthStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      path: '/',
      navigationOptions: {
        title: 'Getting Started'
      }
    },
    Register: {
      screen: RegisterScreen,
      path: '/register'
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
