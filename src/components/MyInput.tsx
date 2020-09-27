import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

export interface MyInputProps {
  label?: string;
  border?: boolean;
  round?: boolean;
  margin?: number | string;
  padding?: number | string;
  shadow?: boolean;
  borderRadius?: number;
  height?: number | string;
  tailElement?: JSX.Element | JSX.Element[];
}

function MyInput(props: MyInputProps & TextInputProps) {
  const {
    label,
    secureTextEntry,
    border,
    round,
    margin,
    padding,
    shadow,
    borderRadius,
    height,
    tailElement,
    ...rest
  } = props;
  const [isHidden, setIsHidden] = useState(secureTextEntry);

  useEffect(() => {
    setIsHidden(!!secureTextEntry);
  }, [secureTextEntry]);

  const toggle = useCallback(() => {
    setIsHidden(!isHidden);
  }, [isHidden]);

  const _containerStyle: any[] = [
    !label && styles.block,
    margin && {margin},
    padding && {padding},
  ];
  const _inputContainerStyle: any[] = [
    styles.inputContainer,
    round && styles.round,
    borderRadius && {borderRadius},
    border && styles.border,
    shadow && styles.shadow,
    height && {height},
  ];

  return (
    <View style={_containerStyle}>
      {label ? <Text style={styles.label}>{label}</Text> : undefined}
      <View style={_inputContainerStyle}>
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
        {tailElement && (
          <View style={styles.tailElementContainer}>{tailElement}</View>
        )}
      </View>
    </View>
  );
}

export default MyInput;

const styles = StyleSheet.create({
  block: {flex: 1},
  input: {
    padding: 10,
    flex: 1,
  },
  label: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  border: {
    borderWidth: 1,
    borderColor: 'grey',
  },
  round: {
    borderRadius: 8,
    borderColor: 'grey',
  },
  shadow: {
    shadowOpacity: 0.14,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {height: 0, width: 0},
    backgroundColor: '#fff',
  },
  tailElementContainer: {
    marginRight: 10,
  },
});
