import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import facebookImg from '../../assets/images/facebook.png';
import googleImg from '../../assets/images/google.png';
import Block from '../../components/Block';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Block padding={14}>
        <Text style={styles.header}>Sign In</Text>
        <View>
          <MyInput label="Email" placeholder=" Your Email" border round />
          <MyInput
            label="Password"
            placeholder="Your Password"
            border
            round
            secureTextEntry
          />
        </View>
        <View style={styles.btnForgetContainer}>
          <MyButton label="Forget Password?" bold />
        </View>
        <MyButton
          label="SignIn"
          textColor="#fff"
          bold
          color="red"
          round
          centered
          middle
          padding={10}
        />
        <Text style={styles.or}>Or</Text>
        <Block direction="row">
          <MyButton
            label="Google"
            round
            bold
            middle
            centered
            direction="row"
            padding={10}
            block
            border
            headIcon={<Image source={googleImg} style={[styles.icon]} />}
          />
          <View style={{width: 10}} />
          <MyButton
            label="Facebook"
            round
            textColor="#fff"
            color="#3A559F"
            middle
            centered
            direction="row"
            padding={10}
            bold
            block
            headIcon={
              <Image
                source={facebookImg}
                style={[styles.icon, {backgroundColor: '#fff'}]}
              />
            }
          />
        </Block>
        <View style={styles.signupContainer}>
          <Text>Not yet a member,</Text>
          <MyButton label="Sign Up" textColor="red" />
        </View>
      </Block>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  btnForgetContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  or: {
    textAlign: 'center',
    padding: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
