// packages
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// navigation config
import { NoAuthStack } from '../config/navigation.config';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  NoAuth: NoAuthStack,
}));