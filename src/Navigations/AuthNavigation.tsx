import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import Signup from '../Screen/Signup';
import TabNavigation from './tabNavigation';
import SingleProduct from '../Screen/SingleProduct';
import {useDispatch} from 'react-redux';
import {addProduct} from '../store/slice/ProductSlice';
import {myApi} from '../data/Api';
import Navbar from '../Component/Navbar';
// import MainScreen from '../Screen/MainScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
  const dispatch = useDispatch();
  useEffect(() => {
    myApi.map(items => {
      dispatch(addProduct(items));
    });
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="plantdetail" component={SingleProduct} />
      <Stack.Screen name="tab" component={TabNavigation} />
      {/* <Stack.Screen name="mainscreen" component={MainScreen} /> */}
      {/* <Stack.Screen name="navbar" component={Navbar} />
      <Stack.Screen name="order" component={Order} /> */}
    </Stack.Navigator>
  );
}
export default AuthNavigator;
