import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyInput from './MyInput';

const Navbar = (props: any) => {
  let {callback} = props;
  return (
    <ScrollView style={styles.navcontainer}>
      <View style={styles.Nav}>
        <Icon name="close" size={40} color="#FFFFFF" onPress={callback} />
      </View>
      <View style={styles.NavAll}>
        <View style={styles.NavIcon}>
          <Icon name="shopping" size={40} color="#FFFFFF" />
          <Text style={styles.NavIconText}>Shop</Text>
        </View>
        <View style={styles.NavIcon}>
          <Icon name="spa" size={40} color="#FFFFFF" />
          <Text style={styles.NavIconText}>Plant Care</Text>
        </View>
        <View style={styles.NavIcon}>
          <Icon name="account-multiple" size={40} color="#FFFFFF" />
          <Text style={styles.NavIconText}>Community</Text>
        </View>
        <View style={styles.NavIcon}>
          <Icon name="account" size={40} color="#FFFFFF" />
          <Text style={styles.NavIconText}>My Account</Text>
        </View>
        <View style={styles.NavIcon}>
          <Icon name="truck-fast-outline" size={40} color="#FFFFFF" />
          <Text style={styles.NavIconText}>Track Order</Text>
        </View>
      </View>
      <View>
        <Text style={styles.dirt}>Get The Dirt.</Text>
      </View>
      <View style={styles.NavInp}>
        <MyInput
          mode="outlined"
          type="email-address"
          placeHolder="Enter Your Email"
        />
      </View>
      <View style={{paddingTop: 30}}>
        <Text style={styles.NavFoot}>FAQ</Text>
        <Text style={styles.NavFoot}>ABOUT US</Text>
        <Text
          style={styles.NavFoot}
          onPress={() => {
            // navigation.navigate('order');
          }}>
          CONTACT US
        </Text>
      </View>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navcontainer: {
    backgroundColor: '#0D986A',
    width: '100%',
    height: '100%',
  },
  Nav: {
    position: 'relative',
    left: 300,
    paddingTop: 30,
  },
  NavAll: {
    paddingVertical: 20,
    paddingHorizontal: 80,
  },
  NavIcon: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginVertical: 10,
  },
  NavIconText: {
    color: '#FFFFFF',
    paddingTop: 5,
    fontSize: 20,
    fontWeight: '600',
  },
  dirt: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
  },
  NavInp: {
    marginHorizontal: 30,
    backgroundColor: '#0D986A',
    marginTop: 20,
  },
  NavFoot: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
