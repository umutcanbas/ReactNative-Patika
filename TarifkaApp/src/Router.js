import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories/Categories';
import Details from './pages/Details/Details';
import Meals from './pages/Meals/Meals';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CategoriesScreen" component={Categories} />
        <Stack.Screen name="MealsScreen" component={Meals} />
        <Stack.Screen name="DetailsScreen" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
