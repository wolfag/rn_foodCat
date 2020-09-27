import React from 'react';
import {FlatList, Dimensions, StyleSheet, Image} from 'react-native';

import foodapp from '../../mocks/foodapp.json';
import MyButton from '../../components/MyButton';
import Block from '../../components/Block';
import MyText from '../../components/MyText';
import HeaderTop from './HeaderTop';

const width = Dimensions.get('screen').width / 4;

export type FoodApp = {
  id: string;
  name: string;
  price: string;
  location: string;
  category: string;
  image: string;
};

function PopularItems() {
  const renderItem = ({item}: {item: FoodApp}) => {
    const {name, price, location, image} = item;
    return (
      <MyButton margin={5} borderRadius={8} shadow padding={10} color="#fff">
        <Block direction="row">
          <Image source={{uri: image}} style={styles.image} />
          <Block paddingHorizontal={8}>
            <Block block>
              <MyText size={16}>{name}</MyText>
              <MyText color="#AAAAAA">{`By ${location}`}</MyText>
            </Block>
            <MyText size={16}>{price}</MyText>
          </Block>
        </Block>
      </MyButton>
    );
  };
  return (
    <Block padding={10}>
      <HeaderTop title="Popular Items" moreTitle="View all" />
      <FlatList horizontal data={foodapp} renderItem={renderItem} />
    </Block>
  );
}

export default PopularItems;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width,
    borderRadius: 8,
  },
});
