import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Block from '../../components/Block';
import MyButton from '../../components/MyButton';
import MyText from '../../components/MyText';

interface HeaderTopProps {
  title: string;
  moreTitle: string;
  moreIcon?: string;
}

function HeaderTop(props: HeaderTopProps) {
  const {title, moreIcon, moreTitle} = props;
  return (
    <Block direction="row" justifyContent="space-between">
      <MyText bold h6>
        {title}
      </MyText>
      <MyButton>
        <Block direction="row" middle>
          <Feather size={18} color="#ADABAC" name={moreIcon} />
          <MyText color="#ADABAC">{moreTitle}</MyText>
        </Block>
      </MyButton>
    </Block>
  );
}

export default HeaderTop;
