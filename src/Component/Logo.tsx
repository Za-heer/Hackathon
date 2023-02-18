import React from 'react';
import {StyleSheet, View} from 'react-native';

const Logo = () => {
  return (
    <View>
      <View style={styles.mainbox}>
        <View style={styles.circle1}></View>
        <View style={styles.circle2}></View>
        <View style={styles.circle3}></View>
        <View style={styles.curve}></View>
        <View style={styles.line}></View>
      </View>
    </View>
  );
};

export default Logo;
const styles = StyleSheet.create({
  mainbox: {
    position: 'relative',
    width: 50,
    height: 50,
  },
  circle1: {
    position: 'absolute',
    top: 10,
    left: 2,
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#0D986A',
  },
  circle2: {
    position: 'absolute',
    top: 3,
    left: 16,
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#0D986A',
  },
  circle3: {
    position: 'absolute',
    top: 10,
    left: 30,
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#0D986A',
  },
  curve: {
    position: 'absolute',
    width: 30,
    height: 35,
    borderBottomWidth: 2,
    borderRadius: 100,
    left: 7,
  },
  line: {
    position: 'absolute',
    height: 28,
    width: 23,
    borderRightWidth: 1,
    top: 15,
  },
});
