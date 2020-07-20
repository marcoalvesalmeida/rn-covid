import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';
import List from './pages/List';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none" 
        screenOptions={{
          cardStyle: {
            backgroundColor: '#FFF'
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="List" component={List} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;