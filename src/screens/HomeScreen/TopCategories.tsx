import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet} from 'react-native';
import Block from '../../components/Block';
import MyButton from '../../components/MyButton';
import MyText from '../../components/MyText';
import categories from '../../mocks/categories.json';
import HeaderTop from './HeaderTop';

const width = Dimensions.get('screen').width / 4;

export type Category = {
  id: string;
  name: string;
  image: string;
};

function TopCategories() {
  const renderItem = ({item}: {item: Category}) => {
    const {name, image} = item;
    return (
      <MyButton padding={5}>
        <Image style={styles.image} source={{uri: image}} />
        <MyText padding={8} center>
          {name}
        </MyText>
      </MyButton>
    );
  };
  return (
    <Block>
      <HeaderTop moreIcon="filter" title="Top Categories" moreTitle="Filter" />
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Block>
  );
}

export default TopCategories;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: (width * 9) / 16,
    borderRadius: 8,
  },
});
