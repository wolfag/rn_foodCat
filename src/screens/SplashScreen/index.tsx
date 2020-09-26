import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import image from '../../assets/images/dinner.png';

const {width} = Dimensions.get('screen');

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3000);
  }, [navigation]);

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
