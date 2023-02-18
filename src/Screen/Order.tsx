import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyButton from '../Component/Button';

const Order = () => {
  return (
    <View>
      <View style={styles.main}>
        <Text style={styles.head}>Order</Text>
        <Text style={styles.head}>Received</Text>
        <Text style={styles.text}>Order ID : #293092309</Text>
      </View>
      <View style={styles.mainbox}>
        <View style={styles.circle1}></View>
        <View style={styles.circle2}></View>
        <View style={styles.circle3}></View>
        <View style={styles.curve}></View>
        <View style={styles.line}></View>
      </View>
      <View>
        <MyButton mode="contained" text="Done" />
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  main: {
    paddingTop: 150,
  },
  head: {
    textAlign: 'center',
    color: '#0D986A',
    fontSize: 40,
    fontWeight: '800',
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
  },

  mainbox: {
    position: 'relative',
    borderRadius: 20,
    height: '44%',
  },
  circle1: {
    position: 'absolute',
    top: 100,
    left: 70,
    backgroundColor: '#0D986A',
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  circle2: {
    position: 'absolute',
    top: 50,
    left: 140,
    backgroundColor: '#0D986A',
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  circle3: {
    position: 'absolute',
    top: 100,
    left: 210,
    backgroundColor: '#0D986A',
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  curve: {
    position: 'absolute',
    top: 50,
    left: 100,
    width: 155,
    height: 170,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderRadius: 100,
  },
  line: {
    position: 'absolute',
    top: 120,
    left: 177,
    width: 150,
    height: 140,
    borderLeftColor: 'black',
    borderLeftWidth: 1,
  },
});
