import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const MyButton = (props: any) => {
  let {mode, text, callback} = props;
  return (
    <SafeAreaView>
      <View>
        <Button
          mode={mode}
          style={styles.button}
          children={text}
          onPress={callback}></Button>
      </View>
    </SafeAreaView>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#52b788',
    marginHorizontal: 8,
  },
});
