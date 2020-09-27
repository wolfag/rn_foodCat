import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface MyButtonProps {
  headIcon?: JSX.Element | JSX.Element[];
  tailIcon?: JSX.Element | JSX.Element[];

  label?: string;
  bold?: boolean;
  textColor?: string;
  fontSize?: number;
  textStyle?: StyleProp<TextStyle>;

  round?: boolean;
  color?: string;
  block?: boolean;
  margin?: number | string;
  padding?: number | string;
  width?: number | string;
  height?: number | string;
  border?: boolean;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  centered?: boolean;
  middle?: boolean;
  shadow?: boolean;
  direction?: 'column' | 'row';
  style?: StyleProp<ViewStyle>;

  children?: JSX.Element | JSX.Element[];
}

function MyButton(props: MyButtonProps & TouchableOpacityProps) {
  const {
    headIcon,
    tailIcon,

    label,
    bold,
    fontSize,
    textStyle,
    textColor,

    round,
    color,
    block,
    margin,
    padding,
    width,
    height,
    border,
    borderWidth,
    borderColor,
    borderRadius,
    style,
    centered,
    middle,
    shadow,
    direction,

    children,
    ...rest
  } = props;
  const _labelStyle: any[] = [
    fontSize && {fontSize},
    textColor && {color: textColor},
    bold && {fontWeight: 'bold'},
    textStyle,
  ];
  const _btnStyle: any[] = [
    block && styles.block,
    margin && {margin},
    padding && {padding},
    width && {width},
    height && {height},
    round && styles.round,
    border && styles.border,
    borderWidth && {borderWidth},
    borderColor && {borderColor},
    borderRadius && {borderRadius},
    color && {backgroundColor: color},
    centered && styles.centered,
    middle && styles.middle,
    shadow && styles.shadow,
    direction && {flexDirection: direction},
    style,
  ];

  if (children) {
    return (
      <TouchableOpacity {...rest} style={_btnStyle}>
        {children}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity {...rest} style={_btnStyle}>
      {headIcon}
      {label ? <Text style={_labelStyle}>{label}</Text> : undefined}
      {tailIcon}
    </TouchableOpacity>
  );
}

export default MyButton;

const styles = StyleSheet.create({
  block: {flex: 1},
  label: {},
  round: {
    borderRadius: 8,
    borderColor: 'grey',
  },
  border: {
    borderWidth: 1,
    borderColor: 'grey',
  },
  centered: {
    justifyContent: 'center',
  },
  middle: {
    alignItems: 'center',
  },
  shadow: {
    shadowOpacity: 0.14,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {height: 0, width: 0},
  },
});
