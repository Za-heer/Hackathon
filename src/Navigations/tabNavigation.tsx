import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '../Screen/Order';
import MainScreen from '../Screen/MainScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../Screen/Cart';
import Navbar from '../Component/Navbar';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'mainscreen') {
            iconName = focused ? 'home-account' : 'home-alert-outline';
          } else if (route.name === 'navbar') {
            iconName = focused ? 'truck-fast' : 'truck-fast-outline';
          } else if (route.name === 'order') {
            iconName = focused ? 'account' : 'account-multiple';
          } else if (route.name === 'cart') {
            iconName = focused ? 'card' : 'card-outline';
          }

          return <Icon name={`${iconName}`} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="mainscreen" component={MainScreen} />
      <Tab.Screen name="navbar" component={Navbar} />
      <Tab.Screen name="order" component={Order} />
      <Tab.Screen name="cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
