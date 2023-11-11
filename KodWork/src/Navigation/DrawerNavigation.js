import React from 'react';
import 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import Favorities from '../screens/Favorities/Favorities';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#f44336',
          drawerInactiveTintColor: 'black',
        }}>
        <Drawer.Screen name="Jobs" component={StackNavigation} />
        <Drawer.Screen name="Favorities" component={Favorities} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
