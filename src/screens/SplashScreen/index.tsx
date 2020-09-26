import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import image from '../../assets/images/dinner.png';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      gotoLogin();
    }, 3000);
  }, []);

  const gotoLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width * 0.2,
    height: width * 0.2,
    tintColor: '#fff',
  },
});
