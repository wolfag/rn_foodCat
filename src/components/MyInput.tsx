import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {MyButtonProps} from './MyButton';

export interface MyInputProps {
  label: string;
}

function MyInput(props: MyButtonProps & TextInputProps) {
  const {label, secureTextEntry, ...rest} = props;
  const [isHidden, setIsHidden] = useState(secureTextEntry);

  useEffect(() => {
    setIsHidden(!!secureTextEntry);
  }, [secureTextEntry]);

  const toggle = useCallback(() => {
    setIsHidden(!isHidden);
  }, [isHidden]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="grey"
          style={styles.input}
          {...rest}
          secureTextEntry={isHidden}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={toggle}>
            <Feather
              name={isHidden ? 'eye' : 'eye-off'}
              size={20}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default MyInput;

const styles = StyleSheet.create({
  container: {},
  input: {
    padding: 10,
    flex: 1,
  },
  label: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'grey',
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});
