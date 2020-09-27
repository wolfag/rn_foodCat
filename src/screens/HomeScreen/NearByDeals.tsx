import React from 'react';
import {Dimensions, Image, StyleSheet, FlatList} from 'react-native';
import Block from '../../components/Block';
import MyButton from '../../components/MyButton';
import MyText from '../../components/MyText';
import foodapp from '../../mocks/foodapp.json';
import HeaderTop from './HeaderTop';
import {FoodApp} from './PopularItems';

const width = Dimensions.get('screen').width / 2;

function NearByDeals() {
  const renderItem = ({item}: {item: FoodApp}) => {
    const {name, image, location, price} = item;
    return (
      <MyButton margin={5} borderRadius={8} shadow padding={10} color="#fff">
        <Block style={{position: 'relative'}}>
          <Image style={styles.image} source={{uri: image}} />
          <Block paddingVertical={8}>
            <MyText size={16}>{name}</MyText>
            <MyText color="#AAAAAA">{`By ${location}`}</MyText>
            <MyText size={16}>{price}</MyText>
          </Block>
          <Block style={styles.safeOff}>
            <MyText padding={3} color="#fff" bgColor="#FF0000">
              10% OFF
            </MyText>
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

export default NearByDeals;

const styles = StyleSheet.create({
  image: {
    width,
    height: width / 2,
    borderRadius: 8,
  },
  safeOff: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
});
