import React, {ComponentProps} from 'react';
import {StyleSheet, View} from 'react-native';

export interface BlockProps {
  block?: boolean;
  margin?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  width?: number;
  height?: number;
  border?: boolean;
  borderWidth?: number;
  borderColor?: string;
  centered?: boolean;
  color?: string;
  direction?: 'column' | 'row';
  middle?: boolean;
  children?: JSX.Element | JSX.Element[];
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  borderRadius?: number;
  shadow?: boolean;
}

function Block(props: BlockProps & ComponentProps<typeof View>) {
  const {
    style,
    block,
    margin,
    padding,
    paddingHorizontal,
    paddingVertical,
    width,
    height,
    border,
    borderWidth,
    borderColor,
    centered,
    color,
    direction,
    middle,
    children,
    justifyContent,
    borderRadius,
    shadow,
    ...rest
  } = props;
  const styleComp: any[] = [
    block && styles.block,
    margin && {margin},
    padding && {padding},
    width && {width},
    height && {height},
    border && styles.border,
    borderWidth && {borderWidth},
    borderColor && {borderColor},
    color && {backgroundColor: color},
    centered && styles.centered,
    justifyContent && {justifyContent},
    direction && {flexDirection: direction},
    paddingVertical && {paddingVertical},
    paddingHorizontal && {paddingHorizontal},
    middle && styles.middle,
    borderRadius && {borderRadius},
    shadow && {
      shadowOpacity: 0.14,
      shadowRadius: 4,
      shadowColor: '#000',
      shadowOffset: {height: 0, width: 0},
    },
    style,
  ];

  return (
    <View style={styleComp} {...rest}>
      {children}
    </View>
  );
}

export default Block;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  middle: {
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: 'gray',
  },
});
