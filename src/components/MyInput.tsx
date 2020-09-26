import React, {useState} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

function Input(props) {
  const {label, secureTextEntry, ...rest} = props;
  const [isSecureTextEntry, setSecureTextEntry] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholderTextColor="grey" style={styles.input} {...rest} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {},
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'grey',
  },
  label: {
    marginVertical: 10,
  },
});
