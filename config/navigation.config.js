// packages
import React from 'react';
import { createStackNavigator } from 'react-navigation';

// screens
import SplashScreen from '../app/screens/components/Splash';


const NoAuthStack = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    path: '/splash'
  }
});

export { NoAuthStack };
