import React from 'react';
import Block from '../../components/Block';
import MyButton from '../../components/MyButton';
import Feather from 'react-native-vector-icons/Feather';
import MyInput from '../../components/MyInput';

function SearchBar() {
  return (
    <Block direction="row" middle>
      <MyButton
        margin={4}
        color="#fff"
        padding={10}
        borderRadius={4}
        height={40}
        shadow
        headIcon={<Feather name="map-pin" size={20} />}
      />
      <MyInput
        padding={10}
        height={40}
        shadow
        round
        borderRadius={4}
        placeholder="Search for meals or area"
        tailElement={<Feather name="search" size={20} />}
      />
    </Block>
  );
}

export default SearchBar;
