import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from '../Component/Button';

const Home = ({navigation}: {navigation: any}) => {
  let btnProps = () => {
    navigation.navigate('login');
    console.log('clicked');
  };
  return (
    <View>
      <View style={styles.mainbox}>
        <View style={styles.circle1}></View>
        <View style={styles.circle2}></View>
        <View style={styles.circle3}></View>
        <View style={styles.curve}></View>
        <View style={styles.line}></View>
        <Text style={styles.heading}>PLANTIFY</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.text1}>GET READY {'\n'}BE HYGYENIC</Text>
        <Text style={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          consequuntur
        </Text>
        <MyButton mode="contained" text="Lets Go" callback={btnProps} />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  mainbox: {
    position: 'relative',
    backgroundColor: '#0D986A',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: '60%',
  },
  circle1: {
    position: 'absolute',
    top: 100,
    left: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  circle2: {
    position: 'absolute',
    top: 50,
    left: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  circle3: {
    position: 'absolute',
    top: 100,
    left: 210,
    backgroundColor: '#FFFFFF',
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
    borderBottomColor: '#FFFFFF',
    // borderLeftColor: '#FFFFFF',
    // borderLeftWidth: 1,
    // borderRightColor: '#FFFFFF',
    // borderTopColor: '#0D986A',
    // borderRightWidth: 1,
    borderBottomWidth: 2,
    borderRadius: 100,
  },
  line: {
    position: 'absolute',
    top: 120,
    left: 177,
    width: 150,
    height: 140,
    borderLeftColor: '#FFFFFF',
    borderLeftWidth: 1,
  },
  heading: {
    fontSize: 45,
    fontWeight: '700',
    color: '#FFFFFF',
    position: 'absolute',
    top: 285,
    left: 55,
  },
  text: {
    padding: 15,
  },
  text1: {
    fontSize: 30,
    color: '#0D986A',
    fontFamily: 'Philosopher',
  },
  text2: {
    marginVertical: 20,
    color: '#0D986A',
  },
});
