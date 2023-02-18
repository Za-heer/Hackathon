import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const MyInput = (props: any) => {
  let {mode, placeHolder, value, type, lable, textEntry, icon, onChange} =
    props;
  // const [inputValue, setInputValue] = useState('');
  return (
    <TextInput
      outlineStyle={styles.outline}
      label={lable}
      style={styles.input}
      mode={mode}
      placeholder={placeHolder}
      value={value}
      keyboardType={type}
      secureTextEntry={textEntry}
      onChangeText={onChange}
      left={
        <TextInput.Icon
          icon={icon}
          onPress={() => {
            console.log('pressed');
          }}
        />
      }
    />
  );
};

export default MyInput;

const styles = StyleSheet.create({
  input: {
    // marginHorizontal: 10,
  },
  outline: {
    borderColor: 'gray',
  },
});
