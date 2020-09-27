import React from 'react';
import {StyleProp, StyleSheet, Text, TextProps, ViewStyle} from 'react-native';

export interface MyTextProps {
  margin?: number | string;
  padding?: number | string;
  bgColor?: string;
  color?: string;
  size?: number;
  bold?: boolean;
  center?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[] | string | number;
}

function MyText(props: MyTextProps & TextProps) {
  const {
    margin,
    padding,
    bgColor,
    color,
    size,
    bold,
    center,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    style,
    children,
    ...rest
  } = props;

  const styleComponent: any[] = [
    {fontSize: 14},
    margin && {margin},
    padding && {padding},
    bgColor && {backgroundColor: bgColor},
    color && {color},
    size && {fontSize: size},
    bold && styles.bold,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    h5 && styles.h5,
    h6 && styles.h6,
    center && styles.center,
    style,
  ];

  return (
    <Text style={styleComponent} {...rest}>
      {children}
    </Text>
  );
}

export default MyText;

const styles = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  h1: {fontSize: 44, fontWeight: 'bold'},
  h2: {fontSize: 38, fontWeight: 'bold'},
  h3: {fontSize: 32, fontWeight: 'bold'},
  h4: {fontSize: 28, fontWeight: 'bold'},
  h5: {fontSize: 22, fontWeight: 'bold'},
  h6: {fontSize: 18, fontWeight: 'bold'},
  center: {textAlign: 'center'},
});
