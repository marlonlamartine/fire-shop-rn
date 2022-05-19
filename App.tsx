/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/Home';
import CartScreen from './src/screens/Cart';
import { RootStackParams } from './src/types/routes';
import ProductsScreen from './src/screens/Products';



const Drawer = createDrawerNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Products"
          component={ProductsScreen}
        />
        <Drawer.Screen
          name="Cart"
          component={CartScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
