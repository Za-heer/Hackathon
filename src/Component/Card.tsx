import React from 'react';
import {View, StyleSheet} from 'react-native';

const MyCard = () => {
  return (
    <View>
      <View style={styles.unShapebox}></View>
    </View>
  );
};

export default MyCard;
const styles = StyleSheet.create({
  // container: {
  //   position: 'relative',
  //   width: 280,
  //   height: 300,
  //   overflow: 'hidden',
  //   borderRadius: 25,
  //   // backgroundColor: 'red',
  // },
  unShapebox: {
    // margin: 20,
    // position: 'absolute',
    // top: 30,
    // bottom: 0,
    // right: 0,
    // left: 30,
    // backgroundColor: 'aqua',
    // width: 100,
    // height: 200,
    // borderTopWidth: 50,
    // borderRightWidth: 25,
    // // borderBottomWidth: 50,
    // borderLeftWidth: 250,
    // borderTopColor: 'transparent',
    // borderRightColor: 'transparent',
    // borderBottomColor: 'transparent',
    // borderLeftColor: 'black',
    // // borderRadius: 10,
    // // transform: [{scaleX: 1}],
    // transform: [{skewX: '20deg'}],
    width: 100,
    height: 200,
    backgroundColor: 'black',
    borderRadius: 10,
    transform: [{skewX: '20deg'}],
  },
});
