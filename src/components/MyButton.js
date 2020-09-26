import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function MyButton(props) {
  const {
    label,
    round,
    bold,
    labelColor,
    bgColor,
    headIcon,
    tailIcon,
    ...rest
  } = props;
  const _labelStyle = [styles.label];
  const _btnStyle = [styles.btn];

  if (round) {
    _btnStyle.push(styles.round);
  }
  if (bgColor) {
    _btnStyle.push({backgroundColor: bgColor});
  }

  if (bold) {
    _labelStyle.push({
      fontWeight: 'bold',
    });
  }
  if (labelColor) {
    _labelStyle.push({
      color: labelColor,
    });
  }

  return (
    <TouchableOpacity {...rest} style={_btnStyle}>
      {headIcon}
      <Text style={_labelStyle}>{label}</Text>
      {tailIcon}
    </TouchableOpacity>
  );
}

export default MyButton;

const styles = StyleSheet.create({
  label: {},
  btn: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  round: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
});
